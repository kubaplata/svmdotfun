import { AppSidebar } from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import {Chart} from "@/components/Chart";
import {ProjectList} from "@/components/ProjectList";

export default function Page() {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1"/>
                        <Separator orientation="vertical" className="mr-2 h-4"/>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">
                                        svm.fun
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block"/>
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Welcome!</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                        <div className="aspect-video rounded-xl bg-muted/50">
                            <div className={"p-4 sf_pro font-medium text-[24px]"}>
                                Total Value Locked
                            </div>
                            <div className={"h-[70%]"}>
                                <Chart />
                            </div>
                        </div>
                        <div className="aspect-video rounded-xl bg-muted/50">
                            <div className={"p-4 sf_pro font-medium text-[24px]"}>
                                Activity
                            </div>
                            <div className={"h-[70%]"}>
                                <Chart/>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
                        <ProjectList />
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}