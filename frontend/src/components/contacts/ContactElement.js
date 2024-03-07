import React, { useState } from 'react'

const ContactElement = ({ details }) => {
    const [data, setData] = useState({
        name: "",
        countryCode: "+91",
        mobileNo: "",
        email: "",
        concern: ""
    });

    const HandleChange = (e) => {

        setData({ ...data, [e.target.name]: e.target.value });
    }

    return (
        <div className='ml-[180px] mt-[66px]'>
            <div>
                <h2 className='text-[40px] text-[2e2c43] font-bold'>{details.type}</h2>
                <p className='text-[16px] text-[#001b33]'>{details.title}</p>
            </div>

            <div className='mt-[69px] flex gap-[150px] '>
                <form action="" className='flex flex-col gap-6'>
                    <div>
                        <p className='text-[14px] text-[#2e2c43] pl-4 pb-2'>Name</p>
                        <input type="text"
                            placeholder='Kishor Kumar'
                            value={data.name}
                            onChange={() => HandleChange}
                            required
                            className='w-[381px] h-[54px] rounded-2xl bg-[#f9f9f9] stroke-[#2e2c43] outline-none px-[31px] text-[#dbcdbb]'
                        />
                    </div>
                    <div className='flex gap-[16px]'>
                        <div>
                            <p className='text-[14px] text-[#2e2c43] pl-4 pb-2'>Country Code</p>
                            <input type="text"
                                placeholder='+91'
                                value={data.countryCode}
                                onChange={() => HandleChange}
                                required
                                className='w-[122px] h-[54px] rounded-2xl bg-[#f9f9f9] stroke-[#2e2c43] outline-none px-[31px] text-[#dbcdbb]'
                            />
                        </div>
                        <div>
                            <p className='text-[14px] text-[#2e2c43] pl-4 pb-2'>Mobile number</p>
                            <input type="text"
                                placeholder='8088790488'
                                value={data.mobileNo}
                                onChange={() => HandleChange}
                                required
                                className='w-[244px] h-[54px] rounded-2xl bg-[#f9f9f9] stroke-[#2e2c43] outline-none px-[31px] text-[#dbcdbb]'
                            />
                        </div>
                    </div>
                    <div>
                        <p className='text-[14px] text-[#2e2c43] pl-4 pb-2'>Email</p>
                        <input type="email"
                            placeholder='shrivastavaaishwary@gmail.com'
                            value={data.email}
                            onChange={() => HandleChange}
                            required
                            className='w-[381px] h-[54px] rounded-2xl bg-[#f9f9f9] stroke-[#2e2c43] outline-none px-[31px] text-[#dbcdbb]'
                        />
                    </div>
                    <div>
                        <p className='text-[14px] text-[#2e2c43] pl-4 pb-2'>Your concern</p>
                        <textarea
                            placeholder='type here...'
                            cols="30" rows="10"
                            // value={data.email}
                            onChange={() => HandleChange}
                            required
                            className='w-[381px] h-[180px] rounded-2xl bg-[#f9f9f9] stroke-[#2e2c43] outline-none px-[31px] py-[18px] text-[#dbcdbb]'
                        />
                    </div>
                    <button className='w-[381px] h-[74px] bg-[#fb8c00] rounded-md text-white font-bold text-[18px]'>{details.submit}</button>
                </form>

                <div>
                    <img src={details.img} alt="contact" className='w-[754px] h-[535px] scale-150' />
                </div>
            </div>
        </div>
    )
}

export default ContactElement
