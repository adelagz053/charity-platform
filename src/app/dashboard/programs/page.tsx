import { Button } from "@/components/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/Card";
import { Input } from "@/components/Input";
import Link from "next/link";

const programs = [
    { id: 1, title: "سقيا الماء", charity: "جمعية البر", target: 50000, collected: 35000, image: "🌊" },
    { id: 2, title: "كفالة يتيم", charity: "جمعية الأيتام", target: 120000, collected: 45000, image: "👶" },
    { id: 3, title: "بناء مسجد", charity: "جمعية الإعمار", target: 250000, collected: 150000, image: "🕌" },
    { id: 4, title: "سلة غذائية", charity: "جمعية الإطعام", target: 15000, collected: 15000, image: "🍎" },
    { id: 5, title: "كسوة العيد", charity: "جمعية الكسوة", target: 30000, collected: 5000, image: "👕" },
    { id: 6, title: "ترميم منازل", charity: "جمعية الإسكان", target: 80000, collected: 20000, image: "🏠" },
];

export default function ProgramsPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-surface-900">البرامج والمشاريع</h1>
                    <p className="text-surface-500">تصفح جميع البرامج المتاحة للدعم.</p>
                </div>
                <div className="flex gap-2">
                    <Input placeholder="بحث عن برنامج..." className="w-full md:w-[300px]" />
                    <Button>بحث</Button>
                </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {programs.map((program) => (
                    <Card key={program.id} className="flex flex-col hover:shadow-elevation-2 transition-shadow cursor-pointer group">
                        <div className="h-48 bg-surface-100 rounded-t-xl flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                            {program.image}
                        </div>
                        <CardHeader>
                            <CardTitle className="text-xl">{program.title}</CardTitle>
                            <p className="text-sm text-surface-500">{program.charity}</p>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-surface-500">تم جمع:</span>
                                    <span className="font-bold text-primary-700">{program.collected.toLocaleString()} ر.س</span>
                                </div>
                                <div className="h-2 w-full bg-surface-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-primary-500 rounded-full"
                                        style={{ width: `${(program.collected / program.target) * 100}%` }}
                                    />
                                </div>
                                <div className="flex justify-between text-xs text-surface-400">
                                    <span>الهدف: {program.target.toLocaleString()} ر.س</span>
                                    <span>{Math.round((program.collected / program.target) * 100)}%</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Link href={`/dashboard/programs/${program.id}`} className="w-full">
                                <Button variant="outline" className="w-full">عرض التفاصيل</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
