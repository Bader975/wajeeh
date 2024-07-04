import React from 'react'
import classes from './navBar.module.css'
import Link from 'next/link'
import Image from 'next/image'
export default function navBar() {
  return (
   <>
   <nav className={classes['nav-bar']}>

<ul className='flex justify-between items-center px-20 pt-2 flex-wrap gap-3'>

<Image src="/images/wajeeh-logo.svg" alt="main logo" width="122" height="52"/>

<li className= {classes["nav-link"]}>
  <Link href={'/'} >
  الرئيسة
  </Link>
</li>

<li className={classes["nav-link"]}>
  <Link href={'/'} >
  عن وجيه
  </Link>
</li>


<li className={classes["nav-link"]}>
  <Link href={'/'} >
  مزايا وجيه  
  </Link>
</li>

<li className={classes["nav-link"]}>
  <Link href={'/'} >
  اتصل بنا
  </Link>
</li>

<li className={classes["nav-link"]}>
  <Link href={'/'} >
  لوحة التحكم 
   </Link>
</li>

<li className={classes["nav-link"]}>
  <Link href={'/'} >
  الدخول
   </Link>
</li>

<Image src="/images/king-khalid-uni.svg" alt="" width="93" height="74"/>
</ul>



   </nav>
   
   </>
  )
}
