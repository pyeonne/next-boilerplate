import React, { useContext, useState } from "react";
import Context from "../../modules";

export default function useHomeViewModel() {
    const counterService = useContext(Context).counterService;

    function handleAddCount() {
        console.log("더하기 버튼");
        counterService.addCount();
    }

    function handleMinusCount() {
        console.log("빼기 버튼");
        counterService.minusCount();
    }

    return {
        count: counterService.count,
        handleAddCount,
        handleMinusCount,
    };
}