import { Sidebar } from "@/components/Sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-surface-50">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden">
                <header className="flex h-16 items-center justify-between border-b border-surface-200 bg-white px-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-surface-900">لوحة التحكم</h2>
                    <div className="flex items-center gap-4">
                        <button className="rounded-full bg-surface-100 p-2 text-surface-600 hover:bg-surface-200">
                            <span className="sr-only">الإشعارات</span>
                            🔔
                        </button>
                        <div className="h-8 w-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
                            أ
                        </div>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto p-8">
                    <div className="mx-auto max-w-6xl">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
