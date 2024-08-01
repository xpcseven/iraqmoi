"use client";
import React from 'react'

function PrintView({ userInfo }: any) {
    const parseUserInfo = JSON.parse(userInfo)
    return (
        <div>


<div className=''>

<div className='flex justify-between pt-2'>
            <div className='pr-10 mt-5'>

                        <h1 className=' text-xs'>وزارة الداخليـــــــة</h1>
                        <h1 className=' text-xs'>{parseUserInfo.wkala}</h1>
                <h1 className=' text-xs'>{parseUserInfo.mderea}</h1>
                <h1 className=' text-xs'>{parseUserInfo.department} {parseUserInfo.workplace}</h1>
            </div>

            <div>

                <img className=" h-40 w-32 m-2 rounded-br-2xl rounded-tl-2xl border-1 border-gray-400 mb-2  " src={parseUserInfo.profileimg} />
            </div>
            </div>
<hr />

<table className=" rounded-xl grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 pr-10" >
<thead>
<tr>
                        <th className="p-2 text-xs  text-colortwo text-right" id="elementToChange">الرقم الاحصائي</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.idnum}</td>
                    </tr>

                    <tr>
                        <th className="p-2 text-xs  text-colortwo text-right">الرتبة</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.rank === "موظف مدني" ? parseUserInfo.joptitle : parseUserInfo.rank}</td>
                    </tr>

                    <tr>
                        <th className="p-2 text-xs  text-colortwo text-right">الاسم</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.name}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs  text-colortwo text-right">اللقب</th>
                        <td className="p-2 text-xs text-hussam2"> {parseUserInfo.familyname}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs  text-colortwo text-right">الجنس</th>
                        <td className="p-2 text-xs text-hussam2"> {parseUserInfo.gender}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">صفة العمل</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.worktype}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">الدائرة</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.workplace}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">محل الولادة</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.placeofbirth}</td>
                    </tr>



                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">اسم الام</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.mothername}</td>
                    </tr>


                    <tr>
                        <th className="p-2 text-xs  text-colortwo text-right">تاريخ الميلاد</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.dateofbirth}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs  text-colortwo text-right">رقم الهاتف</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.phonenumber}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs  text-colortwo text-right">العنوان الوظيفي</th>
                        <td className="p-2 text-xs text-hussam2"> {parseUserInfo.joptitle}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs  text-colortwo text-right">الوكالة</th>
                        <td className="p-2 text-xs text-hussam2"> {parseUserInfo.wkala}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs  text-colortwo text-right">المديرية</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.mderea}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">القسم</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.department}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">الرقم الوظيفي</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.jopid}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">رقم الضمان الصحي</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.healthnum}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">نوع السلاح</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.guntype}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">رقم السلاح</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.gunnum}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">رقم الاستمارة</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.cardidnum}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">نقطة دالة</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.nearableplace}</td>
                    </tr>





                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">تاريخ التنظيم</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.dateoff}</td>
                    </tr>
</thead>
<thead>
<tr>
                        <th className="p-2 text-xs text-colortwo text-right">العمل السابق</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.lastworkhome}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">الجامعة المدنية</th>
                        <td className="p-2 text-xs text-hussam2"> {parseUserInfo.civilcoll}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">الكلية او المعهد العسكري</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.militarycoll}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">الدورة</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.dowra}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">تاريخ التخرج</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.dowradate}</td>
                    </tr>




                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">اسم الام</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.mothername}</td>
                    </tr>

                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">الحالة الاجتماعية</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.maritalstatus}</td>
                    </tr>

                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">اسم الزوجة</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.wifeone}</td>
                    </tr>



                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">الزوجة الثانية</th>
                        <td className="p-2 text-xs text-hussam2"> {parseUserInfo.wifetwo}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">الزوجة الثالثة</th>
                        <td className="p-2 text-xs text-hussam2"> {parseUserInfo.wifethree}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">الزوجة الرابعة</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.wifefure}</td>
                    </tr>


                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">عدد الاطفال</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.kidsnum}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">فصيلة الدم</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.bloodgroup}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">الرقم الوطني</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.nationalnum}</td>
                    </tr>


                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">رقم الهوية</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.cardnum}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">رقم السجل</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.recordnum}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">رقم الصحيفة</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.pagenum}</td>
                    </tr>



                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">المحافظة</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.state}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">عنوان السكن</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.address}</td>
                    </tr>
                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">مكتب معلومات السكن</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.mktb}</td>
                    </tr>



                    <tr>
                        <th className="p-2 text-xs text-colortwo text-right">اسم المختار</th>
                        <td className="p-2 text-xs text-hussam2">{parseUserInfo.mktarname}</td>
                    </tr>

                    

</thead>
                    

            </table>

</div>

        </div>
    )
}

export default PrintView