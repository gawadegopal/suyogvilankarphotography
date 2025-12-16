"use client";

import React from "react";

export default function Loading() {
    return (
        <div className="p-6 mx-auto text-md leading-loose w-full flex flex-col items-center justify-center min-h-screen">
            <div className="loader" />
        </div>
    );
}
