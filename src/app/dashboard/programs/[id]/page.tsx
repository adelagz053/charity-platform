import { Button } from "@/components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import { Input } from "@/components/Input";
import { getProgram } from "@/lib/actions/programs";
import { notFound } from "next/navigation";

export default async function ProgramDetailsPage({ params }: { params: { id: string } }) {
    const program = await getProgram(params.id);

    if (!program) {
        notFound();
    }

    return (
        <div className="grid gap-8 lg:grid-cols-3 h-[calc(100vh-8rem)]">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8 overflow-y-auto pr-2">
                <div className="relative h-64 w-full bg-surface-200 rounded-xl flex items-center justify-center text-8xl overflow-hidden">
                    {program.image || '🌊'}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <h1 className="absolute bottom-6 right-6 text-4xl font-bold text-white">{program.title}</h1>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-surface-500">المبلغ المطلوب</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{program.target.toLocaleString()} ر.س</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-surface-500">المبلغ المجمّع</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-primary-600">{program.collected.toLocaleString()} ر.س</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-surface-500">عدد المساهمين</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{program.donations ? program.donations.length : 0}</div>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>تفاصيل المشروع</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-surface-600 leading-relaxed">
                        <p>{program.description}</p>
                        <h3 className="font-bold text-surface-900">عن الجمعية:</h3>
                        <p>{program.charity?.name}</p>
                    </CardContent>
                </Card>
            </div>

            {/* Chat Interface */}
            <Card className="flex flex-col h-full lg:h-auto">
                <CardHeader className="border-b border-surface-100 bg-surface-50/50">
                    <CardTitle className="flex items-center gap-2">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        محادثة مباشرة
                    </CardTitle>
                    <p className="text-xs text-surface-500">تواصل مباشرة مع مدير المشروع</p>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-surface-50/30">
                    {/* Message Received */}
                    <div className="flex gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-xs font-bold text-primary-700">
                            م
                        </div>
                        <div className="bg-white p-3 rounded-2xl rounded-tr-none shadow-sm border border-surface-100 max-w-[80%]">
                            <p className="text-sm">أهلاً بك! كيف يمكنني مساعدتك بخصوص مشروع {program.title}؟</p>
                            <span className="text-[10px] text-surface-400 mt-1 block">10:00 ص</span>
                        </div>
                    </div>

                    {/* Message Sent */}
                    <div className="flex gap-3 flex-row-reverse">
                        <div className="h-8 w-8 rounded-full bg-surface-200 flex items-center justify-center text-xs font-bold text-surface-700">
                            أ
                        </div>
                        <div className="bg-primary-600 text-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%]">
                            <p className="text-sm">هل يمكن الحصول على تفاصيل أكثر؟</p>
                            <span className="text-[10px] text-primary-100 mt-1 block">10:05 ص</span>
                        </div>
                    </div>
                </CardContent>
                <div className="p-4 border-t border-surface-100 bg-white rounded-b-xl">
                    <form className="flex gap-2">
                        <Input placeholder="اكتب رسالتك هنا..." className="flex-1" />
                        <Button type="submit" size="icon">
                            ➤
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    );
}
