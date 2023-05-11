import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';

const Premios = () => {
    const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();
  return (
    <>
    <h1 id='linkPremios'>PREMIOS Y NOMINACIONES</h1>
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
            backgroundColor: 'aqua',
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
            <img src="/premio1.jpg"/>
        </li>

        <li
        style={{
            backgroundColor: 'aqua',
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
            <img src="/premio2.jpg"/>
        </li>

        <li
        style={{
            backgroundColor: 'aqua',
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
            <img src="/premio3.jpg"/>      
        </li>

        <li
        style={{
            backgroundColor: 'aqua',
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
            <img src="/premio4.jpg"/>
        </li>

        <li
        style={{
            backgroundColor: 'aqua',
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
            <img src="/premio5.jpg"/>
        </li>

        <li
        style={{
            backgroundColor: 'aqua',
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
            <img src="/premio6.jpg"/>
        </li>

        <li
        style={{
            backgroundColor: 'aqua',
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
            <img src="/premio7.jpg"/>
        </li>

        <li
        style={{
            backgroundColor: 'aqua',
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
            <img src="/premio8.jpg"/>
        </li>

        <li
        style={{
            backgroundColor: 'aqua',
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
            <img src="/premio9.jpg"/>
        </li>

        <li
        style={{
            backgroundColor: 'aqua',
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
            <img src="/premio10.jpg"/>
        </li>

        <li
        style={{
            backgroundColor: 'aqua',
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
            <img src="/premio11.jpg"/>
        </li>

        <li
        style={{
            backgroundColor: 'aqua',
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
            <img src="/premio12.jpg"/>
        </li>

        <li
        style={{
            backgroundColor: 'aqua',
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
            <img src="/premio13.jpg"/>
        </li>
    </ul>
    <div>
        {activePageIndex + 1} / {pages.length}
    </div>
    <button onClick={() => prev()}>Prev</button>
    <button onClick={() => next()}>Next</button>
    <ol style={{ display: 'flex', justifyContent: 'center', padding: '0'}}>
    {pages.map((_, i) => (
        <li key={i}>
        <button
            style={i === activePageIndex ? { opacity: 0.5 } : {}}
            onClick={() => goTo(i)}
        >
            {i + 1}
        </button>
        </li>
    ))}
    </ol>
    </>
  );
};

export default Premios;