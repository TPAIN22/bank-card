import React, { useState } from 'react';
import Mobile from './images/bg-main-mobile.png';
import Desk from './images/bg-main-desktop.png';
import BackCard from './images/bg-card-back.png';
import FrontCard from './images/bg-card-front.png';
import Logoo from './images/card-logo.svg';
import Check from './images/icon-complete.svg'

function Card (){
const [name, setName] = useState('Jean Apleseed')
const [number, setNumber] = useState('0000 0000 0000 0000')
const [month, setMonth] = useState('00')
const [year, setYear] = useState('00')
const [cvc, setCvc] = useState('123')
const [formattedNumber, setFormattedNumber] = useState('0000 0000 0000 0000');



function changeHidden (){
    event.preventDefault();
    if(document.getElementById('one').classList.contains('hidden')){
        document.getElementById('tow').classList.add('hidden')
        document.getElementById('one').classList.remove('hidden')}
        else {
            document.getElementById('one').classList.add('hidden')
            document.getElementById('tow').classList.remove('hidden')
        }
    }
    function ChangeName(event) {
        setName(event.target.value);
    }
    function changeNumber(event) {
        const inputValue = event.target.value.replace(/\s/g, ''); // إزالة أي مسافات قبل معالجة الإدخال
        setNumber(inputValue);
        setFormattedNumber(formatNumber(inputValue));
    
        // التحقق من أن المدخل يحتوي فقط على أرقام وأنه يحتوي على 16 خانة على الأقل
        if (!/^\d*$/.test(inputValue) || inputValue.length < 16) {
          document.getElementById('wrongnumber').classList.remove('hidden');
          document.getElementById('number').classList.add('border-2', 'border-red-500');
        } else {
          document.getElementById('wrongnumber').classList.add('hidden');
          document.getElementById('number').classList.remove('border-2', 'border-red-500');
        }
      }
    
      function formatNumber(input) {
        // تحويل الرقم إلى سلسلة للتعامل معه
        const str = input.toString();
        
        // تقسيم السلسلة إلى مجموعات من 4 أحرف وفصلها بمسافة
        const formattedStr = str.replace(/(.{4})/g, '$1 ');
        
        // إزالة المسافة الإضافية في نهاية السلسلة إن وجدت
        return formattedStr.trim();
      }
      function changeMonth(event) {
        const value = event.target.value;
        setMonth(value);
    
        // Check if the value is a number and is between 1 and 12
        if (!/^\d+$/.test(value) || value.length > 2) {
            document.getElementById('month-blank').classList.remove('hidden');
            document.getElementById('month').classList.add('border-2', 'border-red-500');
        } else {
            document.getElementById('month-blank').classList.add('hidden');
            document.getElementById('month').classList.remove('border-2', 'border-red-500');
        }
    }
    
    function changeYear(event) {
        const value = event.target.value;
        setYear(value);
    
        // Check if the value is a number and is between 1 and 12
        if (!/^\d+$/.test(value) || value.length > 2 ) {
            document.getElementById('month-blank').classList.remove('hidden');
            document.getElementById('yy').classList.add('border-2', 'border-red-500');
        } else {
            document.getElementById('month-blank').classList.add('hidden');
            document.getElementById('yy').classList.remove('border-2', 'border-red-500');
        }
    }
    
    function changeCvc(event) {
        const value = event.target.value;
        setCvc(value);
    
        // Check if the value is a number and is between 1 and 12
        if (!/^\d+$/.test(value) || value.length > 3 ) {
            document.getElementById('wrongcvc').classList.remove('hidden');
            document.getElementById('cvc').classList.add('border-2', 'border-red-500');
        } else {
            document.getElementById('wrongcvc').classList.add('hidden');
            document.getElementById('cvc').classList.remove('border-2', 'border-red-500');
        }
    }
    
    return(
        <div className='w-full h-dvh flex flex-col items-center md:gap-8 justify-center text-xs font-medium space-grotesk-uniquifier md:flex-row'>
            <div className='w-full h-5/6 md:h-full relative felx items md:items-center'>
               
                <img src={Mobile} className='absolute h-4/6 w-full md:hidden' />
                <img src={Desk} className='md:block hidden right-0 h-full' />
                <img src={BackCard} className='absolute w-3/4 top-7 right-6 md:top-96 md:left-48 md:w-4/6'/>
                <img src={FrontCard} className='absolute w-9/12 top-28 pt-1 left-4 md:top-20 md:left-24 md:w-4/6'/>
                <img src={Logoo} className='absolute top-32 left-10 md:top-28 md:left-32' />
                <span className='absolute text-white text-4xl md:top-52 md:left-36'>{formattedNumber}</span>
                <span className='absolute text-white text-xl md:top-72 md:right-44'> {month}/{year} </span>
                <span className='absolute text-white text-xl md:top-72 md:left-36'>{name}</span>
                <span className='absolute text-white text-2xl md:bottom-48 md:right-28'>{cvc}</span>
                
            </div>
            <div id='one' className='w-full h-full flex items-start md:items-center'> 
                <form className='mx-4 w-full md:w-4/6 gx'>
                    <div className='g1'>
                        <label htmlFor="name">CARDHOLDER NAME</label>
                        <input type="text" name="text" id="name" className='mb-2 px-6 text-base' placeholder='e.g. Jane Apleseed' onChange={ChangeName}/>
                    </div>

                    <div className='g2'>
                        <label htmlFor="number">CARD NUMBER</label>
                        <input type="text" name="text" id="number" className='mb-2 px-6 text-base' placeholder='e.g. 1234 5678 9123 0000'maxLength='16' onChange={changeNumber}/>
                        <span className='hidden text-red-500' id='wrongnumber'>wrong format, numbers only</span>
                    </div>

                    <div className='g3 flex flex-col'>
                        <label htmlFor="month">EXP. DATE (MM/YY)</label>
                        <div className='flex gap-2'>
                        <input type="text" name="" id="month" className='text-base px-4' placeholder='MM'onChange={changeMonth} maxLength='2'/>
                        <input type="text" name="text" id="yy" className='text-base px-4' placeholder='YY'onChange={changeYear} maxLength='2'/>
                        </div>
                        <span id='month-blank' className='hidden text-red-500'>can't be blank</span>
                    </div>
                    <div className='g4'>
                        <label htmlFor="cvc">CVC</label>
                        <input type="text" name="text" id="cvc" className='px-3 text-base' placeholder='e.g. 123' maxLength='3' onChange={changeCvc}/>
                        <span id='wrongcvc' className='hidden text-red-500'>can't be blank</span>

                    </div>
                    
                    <input type="submit" value="Confirm" className='g5 mt-6 py-2 bg-[var(--buttons)] text-white text-lg' onClick={changeHidden}/>
                </form>
            </div>
            <div className='w-full h-full flex items-center flex-col gap-6 hidden md:items-center md:justify-center' id='tow'>
                <img src={Check} />
                <h1 className='text-4xl'>Thank you!</h1>
                <p className='text-base text-gray-400'> We've added your card details</p>
                <button className='bg-[var(--buttons)] text-lg px-32 py-2 text-white rounded-lg' onClick={changeHidden}>continue</button>

            </div>
        </div>
    );
}
export default Card