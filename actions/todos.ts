"use server";

import {auth} from "@clerk/nextjs/server";
import {createSupabaseClient} from "@/lib/supabase";

export async function addTodo(title: string){

    const {userId} = await auth();
    if(!userId){
        throw new Error("Unauthorized");
    }

    // console.log({userId});

    const supabase = createSupabaseClient();

    const {data, error} = await supabase.from("todos").insert({title, user_id: userId, completed: false}).select();

    if(error || !data){
        throw new Error(error?.message || "Failed to add todo");
    }

    return data[0];
}


export async function getTodos(){
    
    const {userId} = await auth();
    if(!userId){
        throw new Error("Unauthorized");
    }

    const supabase = createSupabaseClient();

    const {data} = await supabase.from("todos").select("*").eq("user_id", userId).order("created_at", {ascending: false})
    console.log(data);

    return data || [];
}


export async function toggleTodo(id: string, completed: boolean){

    const {userId} = await auth();
    if(!userId){
        throw new Error("Unauthorized");
    }

    const supabase = createSupabaseClient();

    await supabase.from("todos").update({completed}).eq("id", id).eq("user_id", userId);
}


export async function deleteTodo(id: string){

    const {userId} = await auth();
    if(!userId){
        throw new Error("Unauthroized");
    }

    const supabase = createSupabaseClient();

    await supabase.from("todos").delete().eq("id", id).eq("user_id", userId);
}