import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Atlas from "@/assets/logos/Atlas.jpg";
import Eclipse from "@/assets/logos/Eclipse.svg";
import Magicblock from "@/assets/logos/Magicblock.jpg";
import Pyth from "@/assets/logos/Pyth.svg";
import Rome from "@/assets/logos/Rome.svg";
import Cube from "@/assets/logos/Cube.jpg";
import Code from "@/assets/logos/Code.avif";
import Bullet from "@/assets/logos/Bullet.png";
import Tinydancer from "@/assets/logos/tinydancer.svg";
import Image from "next/image";

const projects = [
    {
        name: "Eclipse",
        icon: Eclipse,
        type: "Ethereum L2",
        tvl: 1238473821,
        revenue: 84343,
        activity: 53945,
    },
    {
        name: "Atlas",
        type: "Ethereum L2",
        tvl: 3273195,
        revenue: 843,
        activity: 315,
        icon: Atlas,
    },
    {
        name: "Code VM",
        type: "Rollup",
        tvl: 746212,
        revenue: 8402,
        activity: 9238,
        icon: Code,
    },
    {
        name: "Bullet",
        type: "Rollup",
        tvl: 837144,
        revenue: 91822,
        activity: 6351,
        icon: Bullet,
    },
    {
        name: "Tinydancer",
        type: "Light Client",
        tvl: 0,
        revenue: 0,
        activity: 763,
        icon: Tinydancer,
    },
    {
        name: "MagicBlock",
        type: "Rollup",
        tvl: 746273,
        revenue: 8371,
        activity: 763,
        icon: Magicblock,
    },
    {
        name: "Pythnet",
        type: "Permissioned Environment",
        tvl: 71623,
        revenue: 837162,
        activity: 89472,
        icon: Pyth,
    },
    {
        name: "Cube Exchange",
        type: "Permissioned Environment",
        tvl: 29301837,
        revenue: 2543102,
        activity: 90541,
        icon: Cube,
    },
    {
        name: "Rome Protocol",
        type: "Shared Sequencer",
        tvl: 3192213,
        revenue: 38912,
        activity: 5782,
        icon: Rome,
    },
]

export function ProjectList() {
    return (
        <div className={"w-full px-3 py-4"}>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>TVL</TableHead>
                        <TableHead>Revenue</TableHead>
                        <TableHead className="text-right">Activity</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {projects.map(({ tvl, activity, revenue, type, name, icon }, index) => (
                        <TableRow className={"h-16"} key={`project_${index}`}>
                            <TableCell className="font-medium whitespace-nowrap">
                                <div className={"flex flex-row justify-start items-center content-center"}>
                                    <div className={"w-8 my-auto aspect-square overflow-hidden mr-3 rounded-[6px] flex flex-row justify-center items-center content-center"}>
                                        <Image className={"h-full w-auto"} src={icon} alt={`${name} Icon`} />
                                    </div>
                                    {name}
                                </div>
                            </TableCell>
                            <TableCell>{type}</TableCell>
                            <TableCell>{tvl}</TableCell>
                            <TableCell>{revenue}</TableCell>
                            <TableCell className="text-right">{activity}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
