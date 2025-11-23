'use server'

import { prisma } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function getPrograms() {
    try {
        const programs = await prisma.program.findMany({
            include: {
                charity: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
        return programs
    } catch (error) {
        console.error('Error fetching programs:', error)
        return []
    }
}

export async function getProgram(id: string) {
    try {
        const program = await prisma.program.findUnique({
            where: { id },
            include: {
                charity: true,
                donations: true
            }
        })
        return program
    } catch (error) {
        console.error('Error fetching program:', error)
        return null
    }
}

export async function createProgram(formData: FormData) {
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const target = parseFloat(formData.get('target') as string)
    const charityId = 'default-charity-id' // TODO: Get from session

    // Create default charity if not exists (for testing)
    let charity = await prisma.charity.findFirst()
    if (!charity) {
        const user = await prisma.user.create({
            data: {
                email: 'charity@example.com',
                role: 'CHARITY',
                name: 'جمعية البر'
            }
        })
        charity = await prisma.charity.create({
            data: {
                name: 'جمعية البر',
                userId: user.id
            }
        })
    }

    await prisma.program.create({
        data: {
            title,
            description,
            target,
            charityId: charity.id,
            image: '🌊' // Default emoji for now
        }
    })

    revalidatePath('/dashboard/programs')
}
