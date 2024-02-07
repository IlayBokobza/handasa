import {Storage} from "@/Utils/Storage";
import {NextResponse} from "next/server";

export const dynamic = 'force-dynamic'

export function GET(){
    return NextResponse.json(Storage.read())
}