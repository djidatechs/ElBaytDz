import React, { useState } from 'react';

function GeneralTable({TABLE , AN}) {
  if (!TABLE.ths.length) return <></>
   
    return (
        <div className="overflow-x-auto w-full">
        <table className="table w-full  border-separate border-spacing-2 ">
          {/* <!-- head --> */}
          <thead >
            <tr className=''>
                <th className='rounded-xl bg-[#EEEEEE]'>
                <label>
                  <input type="checkbox" className="checkbox bg-night" />
                </label>
              </th>
             {
                TABLE.ths.map(elem=><th className='rounded-xl bg-[#EEEEEE] text-night text-xs'>{elem.title}</th>)
             }
              
            </tr>
          </thead>
          <tbody className='text-xs'>
                {
                    ! TABLE.rows.length ? (
                    <>
                    <tr >
                      <th className='rounded-xl bg-[#EEEEEE]'>
                        <label>
                          <input type="checkbox" className="checkbox bg-night" />
                        </label>
                      </th>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      {AN && <td className='animate-pulse rounded-xl bg-gray-400'></td> }

                      </tr>
                      <tr >
                      <th className='rounded-xl bg-[#EEEEEE]'>
                        <label>
                          <input type="checkbox" className="checkbox bg-night" />
                        </label>
                      </th>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      {AN && <td className='animate-pulse rounded-xl bg-gray-400'></td> }
                      </tr>
                      <tr >
                      <th className='rounded-xl bg-[#EEEEEE]'>
                        <label>
                          <input type="checkbox" className="checkbox bg-night" />
                        </label>
                      </th>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      {AN && <td className='animate-pulse rounded-xl bg-gray-400'></td> }
                      </tr>
                    </>):(
                    TABLE.rows.map((row,rowIndex)=>{
                        return (
                            <tr >
                            <th className='rounded-xl bg-[#EEEEEE]'>
                            <label>
                              <input type="checkbox" className="checkbox bg-night" />
                            </label>
                          </th>
                                {
                                row.map((rowElem , rowElemIndex)=> {
                                    const type = TABLE.ths[rowElemIndex].type
                                    if (type == "user" )
                                        return <User img={rowElem[0]} fullname={rowElem[1]} />
                                    if (type == "action" )
                                        return <Action onClick={rowElem[0]} title={rowElem[1]} />
                                    else return <td className='rounded-xl bg-[#EEEEEE]'>{rowElem[0]}</td>
                                        
                                })}
                            </tr>
                        )
                        
                    }))
                }
            
           
          
          </tbody>
        
        </table>
      </div>
    );
}

export default GeneralTable;



function User({img,fullname}) {
    return (
        <td className='rounded-xl bg-[#EEEEEE]'>
        <div className="flex items-center space-x-3">
         {img && img!="noImage" ?  <div className="avatar"><div className="mask mask-squircle w-12 h-12"><img src={img} alt="Avatar Tailwind CSS Component" /></div></div>:undefined}
          <div>
            <div className="font-bold">{fullname}</div>
          </div>
        </div>
      </td>
    );
}

function Action ({onClick , title}) {
  const [tit , usetit] = useState(title)
    return ( <th onClick={()=>{usetit("Done!")}} className='rounded-xl bg-[#EEEEEE]'>
        <button onClick={onClick} className="btn btn-ghost btn-xs text-xs   text-night">{tit}</button>
      </th>)
}

