import Link from "next/link";
import { HomeIcon, UserGroupIcon, BanknotesIcon, ChatBubbleLeftRightIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

const navigation = [
    { name: 'الرئيسية', href: '/dashboard', icon: HomeIcon },
    { name: 'البرامج', href: '/dashboard/programs', icon: BanknotesIcon },
    { name: 'الجمعيات', href: '/dashboard/charities', icon: UserGroupIcon },
    { name: 'الرسائل', href: '/dashboard/messages', icon: ChatBubbleLeftRightIcon },
];

export function Sidebar() {
    return (
        <div className="flex h-full w-64 flex-col border-l border-surface-200 bg-white shadow-elevation-1">
            <div className="flex h-16 items-center justify-center border-b border-surface-200 px-4">
                <h1 className="text-xl font-bold text-primary-600">منصة الربط</h1>
            </div>
            <nav className="flex-1 space-y-1 px-2 py-4">
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-surface-600 hover:bg-primary-50 hover:text-primary-700"
                    >
                        <item.icon
                            className="ml-3 h-6 w-6 flex-shrink-0 text-surface-400 group-hover:text-primary-600"
                            aria-hidden="true"
                        />
                        {item.name}
                    </Link>
                ))}
            </nav>
            <div className="border-t border-surface-200 p-4">
                <Link
                    href="/dashboard/settings"
                    className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-surface-600 hover:bg-surface-50 hover:text-surface-900"
                >
                    <Cog6ToothIcon
                        className="ml-3 h-6 w-6 flex-shrink-0 text-surface-400 group-hover:text-surface-500"
                        aria-hidden="true"
                    />
                    الإعدادات
                </Link>
            </div>
        </div>
    );
}
