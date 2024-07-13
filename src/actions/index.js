"use server"

export async function fetchAllProducts(){
    try {
        const result = await fetch("https://fakestoreapi.com/products",{
            method: "GET",
            cache: "no-store"
        })
        const data= await result.json();
        return {
            status:200,
            data:data,
            success:true,
        }
    } catch (error) {
        return {
            status: 500,
            message: "Internal Server Error"
        }
    }
}

export async function DetailedProduct(id){
    try {
        const result = await fetch(`https://fakestoreapi.com/products/${id}`,{
            method: "GET",
            cache: "no-store"
        })
        const data= await result.json();
        return {
            status:200,
            data:data,
            success:true,
        }
    } catch (error) {
        return {
            status: 500,
            message: "Internal Server Error"
        }
    }
}