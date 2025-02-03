(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_5d6b3d._.js", {

"[project]/src/components/Weather.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Weather)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$5PILOUBS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/card/dist/chunk-5PILOUBS.mjs [app-client] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$D5XJWRAV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/card/dist/chunk-D5XJWRAV.mjs [app-client] (ecmascript) <export card_header_default as CardHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/card/dist/chunk-LGSBTEIA.mjs [app-client] (ecmascript) <export card_body_default as CardBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$2QAN2V2R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/input/dist/chunk-2QAN2V2R.mjs [app-client] (ecmascript) <export input_default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$XJ3PDX4B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/button/dist/chunk-XJ3PDX4B.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$spacer$2f$dist$2f$chunk$2d$AWMMSYR4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__spacer_default__as__Spacer$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/spacer/dist/chunk-AWMMSYR4.mjs [app-client] (ecmascript) <export spacer_default as Spacer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$alert$2f$dist$2f$chunk$2d$J3BMREMR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__alert_default__as__Alert$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/alert/dist/chunk-J3BMREMR.mjs [app-client] (ecmascript) <export alert_default as Alert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$image$2f$dist$2f$chunk$2d$MLPFQTYO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/image/dist/chunk-MLPFQTYO.mjs [app-client] (ecmascript) <export image_default as Image>");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
function Weather() {
    _s();
    const [city, setCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [weatherData, setWeatherData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const apiKey = ("TURBOPACK compile-time value", "c0fc6f1ec1e5680352c7fd1a3471a6e4");
    const handleSearch = async ()=>{
        if (!city) return;
        setLoading(true);
        setError(null);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            setWeatherData(response.data);
        } catch (err) {
            setError("City not found or error with API");
        }
        setLoading(false);
    };
    const getWeatherImage = (weatherCondition)=>{
        switch(weatherCondition){
            case "clear sky":
                return "/images/clear-sky.jpg";
            case "rain":
                return "/images/rain.png";
            case "snow":
                return "/images/snow.jpg";
            case "few clouds":
                return "/images/fewclouds.jpg";
            case "mist":
                return "/images/mist.jpg";
            case "thunderstorm":
                return "/images/thunderstorm.jpg";
            case "shower rain":
                return "/images/showerrain.jpg";
            case "broken clouds":
                return "/images/brokenclouds.jpg";
            default:
                return " ";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 flex justify-center items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$5PILOUBS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
            isBlurred: true,
            className: "border-none bg-background/60 dark:bg-default-100/50 max-w-[1000px] w-full p-6",
            shadow: "lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$D5XJWRAV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__["CardHeader"], {
                    className: "pb-0 pt-2 px-4 flex-col items-start items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-bold text-large",
                        children: "Weather App"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Weather.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Weather.js",
                    lineNumber: 65,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$2QAN2V2R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                                value: city,
                                onChange: (e)=>setCity(e.target.value),
                                placeholder: "Enter city name",
                                "aria-label": "City"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Weather.js",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Weather.js",
                            lineNumber: 69,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$XJ3PDX4B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                            onClick: handleSearch,
                            isLoading: loading,
                            color: "secondary",
                            children: "Get Weather"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Weather.js",
                            lineNumber: 78,
                            columnNumber: 9
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$spacer$2f$dist$2f$chunk$2d$AWMMSYR4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__spacer_default__as__Spacer$3e$__["Spacer"], {
                                    y: 1
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Weather.js",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$alert$2f$dist$2f$chunk$2d$J3BMREMR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__alert_default__as__Alert$3e$__["Alert"], {
                                    variant: "danger",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Weather.js",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true),
                        weatherData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$5PILOUBS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                            className: "py-4 mt-4 ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$D5XJWRAV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__["CardHeader"], {
                                    className: "pb-0 pt-2 px-4 flex-col items-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-tiny uppercase font-bold",
                                            children: "Weather Info"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Weather.js",
                                            lineNumber: 92,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-bold text-large",
                                            children: "Current Weather"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Weather.js",
                                            lineNumber: 93,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Weather.js",
                                    lineNumber: 91,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                                    className: "overflow-visible py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: weatherData.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Weather.js",
                                            lineNumber: 96,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Temperature: ",
                                                weatherData.main.temp,
                                                "°C"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Weather.js",
                                            lineNumber: 97,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Humidity: ",
                                                weatherData.main.humidity,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Weather.js",
                                            lineNumber: 98,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Weather: ",
                                                weatherData.weather[0].description
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Weather.js",
                                            lineNumber: 99,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$image$2f$dist$2f$chunk$2d$MLPFQTYO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__["Image"], {
                                            alt: "Weather Image",
                                            className: "object-cover rounded-xl",
                                            src: getWeatherImage(weatherData.weather[0].main),
                                            width: 270
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Weather.js",
                                            lineNumber: 100,
                                            columnNumber: 13
                                        }, this),
                                        console.log(getWeatherImage(weatherData.weather[0].main))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Weather.js",
                                    lineNumber: 95,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Weather.js",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Weather.js",
                    lineNumber: 68,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Weather.js",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Weather.js",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(Weather, "Hr9MnZ9VAdqJrOCRvdfaA+GI+Io=");
_c = Weather;
var _c;
__turbopack_refresh__.register(_c, "Weather");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Navbar.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Nav)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$5ZHOTS66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_default__as__Navbar$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/navbar/dist/chunk-5ZHOTS66.mjs [app-client] (ecmascript) <export navbar_default as Navbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$4DMBHLGU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_brand_default__as__NavbarBrand$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/navbar/dist/chunk-4DMBHLGU.mjs [app-client] (ecmascript) <export navbar_brand_default as NavbarBrand>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$UYTDJMPP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_content_default__as__NavbarContent$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/navbar/dist/chunk-UYTDJMPP.mjs [app-client] (ecmascript) <export navbar_content_default as NavbarContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$5LMKFFWA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_item_default__as__NavbarItem$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/navbar/dist/chunk-5LMKFFWA.mjs [app-client] (ecmascript) <export navbar_item_default as NavbarItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$link$2f$dist$2f$chunk$2d$OPTZHMJX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/link/dist/chunk-OPTZHMJX.mjs [app-client] (ecmascript) <export link_default as Link>");
'use client';
;
;
function Nav() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$5ZHOTS66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_default__as__Navbar$3e$__["Navbar"], {
        isBordered: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$4DMBHLGU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_brand_default__as__NavbarBrand$3e$__["NavbarBrand"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-bold text-inherit",
                    children: "WEATHER APP"
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.js",
                    lineNumber: 8,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$UYTDJMPP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_content_default__as__NavbarContent$3e$__["NavbarContent"], {
                className: "hidden sm:flex gap-4",
                justify: "center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$5LMKFFWA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_item_default__as__NavbarItem$3e$__["NavbarItem"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$link$2f$dist$2f$chunk$2d$OPTZHMJX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__["Link"], {
                            color: "foreground",
                            href: "#",
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.js",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$5LMKFFWA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_item_default__as__NavbarItem$3e$__["NavbarItem"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$link$2f$dist$2f$chunk$2d$OPTZHMJX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__["Link"], {
                            "aria-current": "page",
                            href: "#",
                            children: "About"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.js",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$5LMKFFWA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_item_default__as__NavbarItem$3e$__["NavbarItem"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$link$2f$dist$2f$chunk$2d$OPTZHMJX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__["Link"], {
                            color: "foreground",
                            href: "#",
                            children: "Weather app"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.js",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$UYTDJMPP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_content_default__as__NavbarContent$3e$__["NavbarContent"], {
                justify: "end"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Nav;
var _c;
__turbopack_refresh__.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_5d6b3d._.js.map