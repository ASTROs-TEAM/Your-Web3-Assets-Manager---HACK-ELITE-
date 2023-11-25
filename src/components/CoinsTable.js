import React, { useEffect, useState } from 'react'

const CoinsTable = () => {

    const [CoinsData , setCoinsData] = useState([]);


    useEffect(() => {
        fetch("https://api.livecoinwatch.com/coins/list",{
          method:"POST",
          headers:{
            "Content-Type": "application/json",
            "x-api-key": "9c6c853d-9442-4f1f-aac4-4023dd79d98e"
          },
          body:JSON.stringify(
            {
              "currency": "USD",
              "sort": "rank",
              "order": "ascending",
              "offset": 0,
              "limit": 50,
              "meta": true
            }
          )
        }).then((res) => res.json()).then((data=> setCoinsData(data)))
    
    },[])

  return (

    

<div class="relative overflow-x-auto shadow-md sm:rounded-lg my-4 w-full">
    <table class="w-full shadow-secondary text-sm text-left rtl:text-right text-gray-500 ">
        <thead class="text-xs text-gray-100 uppercase bg-purple">
            <tr>
                <th scope="col" class="px-6 py-3">
                   Asset 
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    All Time High
                </th>
                <th scope="col" class="px-6 py-3">
                   Market Cap
                </th>
                <th scope="col" class="px-6 py-3">
                    Volume
                </th>
            </tr>
        </thead>
        <tbody>
            {
                CoinsData.map((item) => {

                    const {name , code , color , cap , allTimeHighUSD , symbol , rate ,png64 , webp64 , volume} = item;
                    return (
                        <tr className= {`bg-[${color}] bg-opacity-70 border-b `}>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {name}
                            </th>
                            <td class="px-6 py-4 flex gap-2 items-center">
                                <img className='h-8 w-8' src={webp64}/>{code}
                            </td>
                            <td class="px-6 py-4">
                                ${rate}
                            </td>
                            <td class="px-6 py-4">
                                ${allTimeHighUSD}
                            </td>
                            <td class="px-6 py-4">
                                {cap}
                            </td>
                            <td class="px-6 py-4">
                                {volume}
                            </td>
                            
                        </tr>
                    )
                })
            }
            
            
        </tbody>
    </table>
</div>

  )
}

export default CoinsTable