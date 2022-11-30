import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://carmax-server-alpha.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.isSeller) {
                        console.log(data);
                        setIsSeller(data.isSeller);
                        setIsSellerLoading(false);
                    }
                })
        }
    }, [email])
    return [isSeller, isSellerLoading]
    // return [isSeller]
}

export default useSeller;