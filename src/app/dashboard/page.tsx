import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import { Button } from "@/components/Button";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight text-surface-900">نظرة عامة</h1>
                <Button>
                    + إضافة برنامج جديد
                </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">إجمالي التبرعات</CardTitle>
                        <span className="text-2xl">💰</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">45,231.89 ر.س</div>
                        <p className="text-xs text-surface-500 flex items-center mt-1">
                            <span className="text-green-600 flex items-center ml-1">
                                <ArrowUpIcon className="h-3 w-3 ml-0.5" />
                                +20.1%
                            </span>
                            من الشهر الماضي
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">البرامج النشطة</CardTitle>
                        <span className="text-2xl">🚀</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+12</div>
                        <p className="text-xs text-surface-500 flex items-center mt-1">
                            <span className="text-surface-500 flex items-center ml-1">
                                0%
                            </span>
                            من الشهر الماضي
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">الممولين الجدد</CardTitle>
                        <span className="text-2xl">👥</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+573</div>
                        <p className="text-xs text-surface-500 flex items-center mt-1">
                            <span className="text-green-600 flex items-center ml-1">
                                <ArrowUpIcon className="h-3 w-3 ml-0.5" />
                                +12%
                            </span>
                            من الشهر الماضي
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">الرسائل غير المقروءة</CardTitle>
                        <span className="text-2xl">📩</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-surface-500 flex items-center mt-1">
                            <span className="text-red-600 flex items-center ml-1">
                                <ArrowDownIcon className="h-3 w-3 ml-0.5" />
                                -4%
                            </span>
                            من الشهر الماضي
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>نظرة عامة على التبرعات</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[200px] flex items-center justify-center bg-surface-50 rounded-md border border-dashed border-surface-200 text-surface-400">
                            مخطط بياني للتبرعات (سيتم إضافته لاحقاً)
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>أحدث البرامج</CardTitle>
                        <p className="text-sm text-surface-500">
                            تم إنشاء 3 برامج هذا الشهر.
                        </p>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            <div className="flex items-center">
                                <div className="h-9 w-9 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold ml-4">
                                    س
                                </div>
                                <div className="ml-auto space-y-1">
                                    <p className="text-sm font-medium leading-none">سقيا الماء</p>
                                    <p className="text-sm text-surface-500">جمعية البر</p>
                                </div>
                                <div className="font-medium text-green-600">نشط</div>
                            </div>
                            <div className="flex items-center">
                                <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold ml-4">
                                    ك
                                </div>
                                <div className="ml-auto space-y-1">
                                    <p className="text-sm font-medium leading-none">كفالة يتيم</p>
                                    <p className="text-sm text-surface-500">جمعية الأيتام</p>
                                </div>
                                <div className="font-medium text-yellow-600">مراجعة</div>
                            </div>
                            <div className="flex items-center">
                                <div className="h-9 w-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold ml-4">
                                    إ
                                </div>
                                <div className="ml-auto space-y-1">
                                    <p className="text-sm font-medium leading-none">إفطار صائم</p>
                                    <p className="text-sm text-surface-500">جمعية الإحسان</p>
                                </div>
                                <div className="font-medium text-surface-500">مسودة</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
