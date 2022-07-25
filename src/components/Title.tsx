// react component that renders a div with an h1 and text "Data Tagging" and a p tag with text "Press an arrow key to tag data"
// Language: typescript
//
// import { useState } from 'react';

export default function Title() {
    return (
        <div className="flex justify-center items-center bg-slate-800">
            <h1 className="text-white text-4xl">Data Tagging</h1>
            <p className="text-white text-2xl">Press an arrow key to tag data</p>
        </div>
);
}
