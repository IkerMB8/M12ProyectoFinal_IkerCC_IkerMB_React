import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import './premios.css';

const Premios = () => {
    const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();
  return (
    <>
        <h1 id='Premios'>PREMIOS Y NOMINACIONES</h1>
        <ul
        ref={scrollRef}
        style={{
            display: 'flex',
            gap: '10px',
            overflow: 'auto',
            scrollSnapType: 'x mandatory'
        }}
        >
            <li
            style={{
                backgroundColor: 'white',
                fontSize: '50px',
                width: '250px',
                height: '250px',
                flexShrink: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <img className="img_Premios" src="/premio1.jpg"/>
            </li>

            <li
            style={{
                backgroundColor: 'white',
                fontSize: '50px',
                width: '250px',
                height: '250px',
                flexShrink: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <img className="img_Premios" src="/premio2.jpg"/>
            </li>

            <li
            style={{
                backgroundColor: 'white',
                fontSize: '50px',
                width: '250px',
                height: '250px',
                flexShrink: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <img className="img_Premios" src="/premio3.jpg"/>      
            </li>

            <li
            style={{
                backgroundColor: 'white',
                fontSize: '50px',
                width: '250px',
                height: '250px',
                flexShrink: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <img className="img_Premios" src="/premio4.jpg"/>
            </li>

            <li
            style={{
                backgroundColor: 'white',
                fontSize: '50px',
                width: '250px',
                height: '250px',
                flexShrink: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <img className="img_Premios" src="/premio5.jpg"/>
            </li>

            <li
            style={{
                backgroundColor: 'white',
                fontSize: '50px',
                width: '250px',
                height: '250px',
                flexShrink: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <img className="img_Premios" src="/premio6.jpg"/>
            </li>

            <li
            style={{
                backgroundColor: 'white',
                fontSize: '50px',
                width: '250px',
                height: '250px',
                flexShrink: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <img className="img_Premios" src="/premio7.jpg"/>
            </li>

            <li
            style={{
                backgroundColor: 'white',
                fontSize: '50px',
                width: '250px',
                height: '250px',
                flexShrink: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <img className="img_Premios" src="/premio8.jpg"/>
            </li>

            <li
            style={{
                backgroundColor: 'white',
                fontSize: '50px',
                width: '250px',
                height: '250px',
                flexShrink: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <img className="img_Premios" src="/premio9.jpg"/>
            </li>

            <li
            style={{
                backgroundColor: 'white',
                fontSize: '50px',
                width: '250px',
                height: '250px',
                flexShrink: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <img className="img_Premios" src="/premio10.jpg"/>
            </li>

            <li
            style={{
                backgroundColor: 'white',
                fontSize: '50px',
                width: '250px',
                height: '250px',
                flexShrink: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <img className="img_Premios" src="/premio11.jpg"/>
            </li>

            <li
            style={{
                backgroundColor: 'white',
                fontSize: '50px',
                width: '250px',
                height: '250px',
                flexShrink: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <img className="img_Premios" src="/premio12.jpg"/>
            </li>

            <li
            style={{
                backgroundColor: 'white',
                fontSize: '50px',
                width: '250px',
                height: '250px',
                flexShrink: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <img className="img_Premios" src="/premio13.jpg"/>
            </li>

            <li
            style={{
                backgroundColor: 'white',
                fontSize: '50px',
                width: '250px',
                height: '250px',
                flexShrink: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <img className="img_Premios" src="/premio14.jpg"/>
            </li>

            <li
            style={{
                backgroundColor: 'white',
                fontSize: '50px',
                width: '250px',
                height: '250px',
                flexShrink: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <img className="img_Premios" src="/premio15.jpg"/>
            </li>

            <li
            style={{
                backgroundColor: 'white',
                fontSize: '50px',
                width: '250px',
                height: '250px',
                flexShrink: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <img className="img_Premios" src="/premio16.jpg"/>
            </li>

            <li
            style={{
                backgroundColor: 'white',
                fontSize: '50px',
                width: '250px',
                height: '250px',
                flexShrink: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <img className="img_Premios" src="/premio17.jpg"/>
            </li>

            <li
            style={{
                backgroundColor: 'white',
                fontSize: '50px',
                width: '250px',
                height: '250px',
                flexShrink: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <img className="img_Premios" src="/premio18.jpg"/>
            </li>

            <li
            style={{
                backgroundColor: 'white',
                fontSize: '50px',
                width: '250px',
                height: '250px',
                flexShrink: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <img className="img_Premios" src="/premio19.jpg"/>
            </li>

            <li
            style={{
                backgroundColor: 'white',
                fontSize: '50px',
                width: '250px',
                height: '250px',
                flexShrink: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <img className="img_Premios" src="/premio20.jpg"/>
            </li>

            <li
            style={{
                backgroundColor: 'white',
                fontSize: '50px',
                width: '250px',
                height: '250px',
                flexShrink: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <img className="img_Premios" src="/premio21.jpg"/>
            </li>

            <li
            style={{
                backgroundColor: 'white',
                fontSize: '50px',
                width: '250px',
                height: '250px',
                flexShrink: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <img className="img_Premios" src="/premio22.jpg"/>
            </li>

            <li
            style={{
                backgroundColor: 'white',
                fontSize: '50px',
                width: '250px',
                height: '250px',
                flexShrink: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <img className="img_Premios" src="/premio23.jpg"/>
            </li>
        </ul>
        
        <div>
            {activePageIndex + 1} / {pages.length}
        </div>
        <button className="raise" onClick={() => prev()}>Prev</button>
        <button className='raise' onClick={() => next()}>Next</button>
    </>
  );
};

export default Premios;