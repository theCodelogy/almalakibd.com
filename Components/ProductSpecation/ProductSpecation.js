'use client'
import Image from 'next/image';
import React from 'react';
import ImageThree from '@/assests/MobileImage/20231109_1699518759_729998.jpeg'
import RecentlyViewProduct from '../RecentlyViewProduct/RecentlyViewProduct';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const ProductSpecation = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            
            <div   className="px-3 pb-4 lg:col-span-2 rounded drop-shadow bg-white mt-4">
            <h2 className=" text-2xl px-2 py-2   border-b-2 border-primary mb-4"></h2>
            <Tabs>
    <TabList>
      <Tab>Specification</Tab>
      <Tab>Description</Tab>
      <Tab>Warranty</Tab>
    </TabList>

    <TabPanel>
    

    <section>

<table className="table-auto w-full text-left">
    <tbody>
        <tr>
            <td className="border border-card-3 p-2 w-28">Weight</td>
            <td className="border border-card-3 p-2">221 g (7.80 oz)</td>
        </tr>
        <tr>
            <td className="border border-card-3 p-2 w-28">Sensors</td>
            <td className="border border-card-3 p-2">Face ID, accelerometer, gyro, proximity, compass, barometer</td>
        </tr>
        {/* Rest of the table rows */}
    </tbody>
</table>
<table className="table-auto w-full text-left">
    <tbody>
        <tr>
            <td className="border border-card-3 p-2 w-28">Weight</td>
            <td className="border border-card-3 p-2">221 g (7.80 oz)</td>
        </tr>
        <tr>
            <td className="border border-card-3 p-2 w-28">Sensors</td>
            <td className="border border-card-3 p-2">Face ID, accelerometer, gyro, proximity, compass, barometer</td>
        </tr>
        {/* Rest of the table rows */}
    </tbody>
</table>
<table className="table-auto w-full text-left">
    <tbody>
        <tr>
            <td className="border border-card-3 p-2 w-28">Weight</td>
            <td className="border border-card-3 p-2">221 g (7.80 oz)</td>
        </tr>
        <tr>
            <td className="border border-card-3 p-2 w-28">Sensors</td>
            <td className="border border-card-3 p-2">Face ID, accelerometer, gyro, proximity, compass, barometer</td>
        </tr>
        {/* Rest of the table rows */}
    </tbody>
</table>
<table className="table-auto w-full text-left">
    <tbody>
        <tr>
            <td className="border border-card-3 p-2 w-28">Weight</td>
            <td className="border border-card-3 p-2">221 g (7.80 oz)</td>
        </tr>
        <tr>
            <td className="border border-card-3 p-2 w-28">Sensors</td>
            <td className="border border-card-3 p-2">Face ID, accelerometer, gyro, proximity, compass, barometer</td>
        </tr>
        {/* Rest of the table rows */}
    </tbody>
</table>
<table className="table-auto w-full text-left">
    <tbody>
        <tr>
            <td className="border border-card-3 p-2 w-28">Weight</td>
            <td className="border border-card-3 p-2">221 g (7.80 oz)</td>
        </tr>
        <tr>
            <td className="border border-card-3 p-2 w-28">Sensors</td>
            <td className="border border-card-3 p-2">Face ID, accelerometer, gyro, proximity, compass, barometer</td>
        </tr>
        {/* Rest of the table rows */}
    </tbody>
</table>
<table className="table-auto w-full text-left">
    <tbody>
        <tr>
            <td className="border border-card-3 p-2 w-28">Weight</td>
            <td className="border border-card-3 p-2">221 g (7.80 oz)</td>
        </tr>
        <tr>
            <td className="border border-card-3 p-2 w-28">Sensors</td>
            <td className="border border-card-3 p-2">Face ID, accelerometer, gyro, proximity, compass, barometer</td>
        </tr>
        {/* Rest of the table rows */}
    </tbody>
</table>
<table className="table-auto w-full text-left">
    <tbody>
        <tr>
            <td className="border border-card-3 p-2 w-28">Weight</td>
            <td className="border border-card-3 p-2">221 g (7.80 oz)</td>
        </tr>
        <tr>
            <td className="border border-card-3 p-2 w-28">Sensors</td>
            <td className="border border-card-3 p-2">Face ID, accelerometer, gyro, proximity, compass, barometer</td>
        </tr>
        {/* Rest of the table rows */}
    </tbody>
</table>




</section>


    </TabPanel>









    <TabPanel>
    {/* drescription */}

    <div id="" className="px-3 pb-4 rounded drop-shadow bg-white mt-6">
            <h2 className=" text-2xl px-2 py-2  border-b-2 border-primary mb-4">Description</h2>

            <div>
                <Image src={ImageThree} />

                <h2 className='text-2xl font-bold' >iPhone 15 Pro Max</h2>
                <p >Meet the <span className='text-blue-700'>Apple</span> iPhone 15 Pro Max, a game-changing device that redefines the smartphone landscape and sets new industry standards. With its pioneering titanium construction, it sets a new standard for durability and elegance. Powered by a cutting-edge 3nm processor, this phone delivers unparalleled performance. The ultimate camera system, equipped with advanced features, promises magnificent photography and videography. Its high-resolution display offers a visual feast, and the optimized battery with a Type-C charger ensures convenience. Undoubtedly, the iPhone 15 Pro Max represents the Apex of smartphone innovation, making it the best phone to date.</p>
                {/* Add the rest of the description content here */}
            </div>
        </div>
    </TabPanel>








    <TabPanel>
     {/* warenty */}

<div  className="px-3 pb-4 rounded drop-shadow bg-white mt-6">
            <h2 className=" text-2xl px-2 py-2  border-b-2 border-primary mb-4">Warranty</h2>
            <div>
                <p><strong>Apple Store 1 Year Warranty Support</strong></p>
            </div>
            <span className="pt-4">Explore our <a className=" ">Warranty Policy</a> page for detailed information about our warranty coverage.</span>
        </div>
    </TabPanel>



  </Tabs>











        </div>

<RecentlyViewProduct/>

        </div>
    );
};

export default ProductSpecation;