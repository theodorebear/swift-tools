// helpers/index.js
import React, { useState, useEffect, useRef } from "react"
import cookie from "cookie"
export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}
export const cacheImageUrl = (path) =>
  new Promise((resolve) => {
    try {
      const img = new Image()
      img.onload = () => {
        //console.log("img loaded: ", path)
        resolve(path)
      }
      img.onerror = () => resolve(path)
      img.src = path
    } catch (e) {
      resolve(path)
    }
  })
export const rangeMap = (value, x1, y1, x2, y2) => ((value - x1) * (y2 - x2)) / (y1 - x1) + x2
export const popWindow = (url) => {
  var left = window.screenX
  var top = window.screenY
  var NWin = window.open(url, "", "scrollbars=1,height=605,width=800,top=" + top + ",left=" + left)
  if (window.focus) {
    NWin.focus()
  }
  return false
}
export let objToKey = (obj) => {
  var str = []
  Object.keys(obj)
    .sort()
    .forEach((key) => {
      //console.log("obj", key, obj[key])
      str.push(key + ":" + obj[key])
    })
  str = str.join("::")
  return str
}
export const useInterval = (callback, delay) => {
  const savedCallback = useRef()
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
export const swiftHash = (b) => {
  {
    for (var a = 0, c = b.length; c--; ) {
      a += b.charCodeAt(c)
      a += a << 10
      a ^= a >> 6
    }
    a += a << 3
    a ^= a >> 11
    return (((a + (a << 15)) & 4294967295) >>> 0).toString(16)
  }
}
export const randomHex = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16)
}
export const numberShorten = (value) => {
  var tier = (Math.log10(Math.abs(value)) / 3) | 0
  if (tier == 0) return value
  const symbols = ["", "K", "M", "B"]
  var scaled = value / Math.pow(10, tier * 3)
  return parseFloat(scaled.toFixed(2)) + symbols[tier]
}

export const objectEquals = (x, y) => {
  "use strict"

  if (x === null || x === undefined || y === null || y === undefined) {
    return x === y
  }
  // after this just checking type of one would be enough
  if (x.constructor !== y.constructor) {
    return false
  }
  // if they are functions, they should exactly refer to same one (because of closures)
  if (x instanceof Function) {
    return x === y
  }
  // if they are regexps, they should exactly refer to same one (it is hard to better equality check on current ES)
  if (x instanceof RegExp) {
    return x === y
  }
  if (x === y || x.valueOf() === y.valueOf()) {
    return true
  }
  if (Array.isArray(x) && x.length !== y.length) {
    return false
  }

  // if they are dates, they must had equal valueOf
  if (x instanceof Date) {
    return false
  }

  // if they are strictly equal, they both need to be object at least
  if (!(x instanceof Object)) {
    return false
  }
  if (!(y instanceof Object)) {
    return false
  }

  // recursive object equality check
  var p = Object.keys(x)
  return (
    Object.keys(y).every(function (i) {
      return p.indexOf(i) !== -1
    }) &&
    p.every(function (i) {
      return objectEquals(x[i], y[i])
    })
  )
}

export const customScriptRun = (js) => {
  console.log("customScriptRun - running", js)
  try {
    let scriptLead = js.replace("<script>", " ").replace('<script type="text/javascript">', " ").replace("<script type='text/javascript'>", " ").replace("</script>", " ").trim()
    console.log("customScriptRun - parsed", scriptLead)
    let scriptFn = new Function(scriptLead)
    scriptFn()
    console.log("customScriptRun - success!")
  } catch (e) {
    console.log("customScriptRun - website custom scriptLeadFn() failed.")
    console.log(e)
  }
}
export function arrayMoveMutable(array, fromIndex, toIndex) {
  const startIndex = fromIndex < 0 ? array.length + fromIndex : fromIndex

  if (startIndex >= 0 && startIndex < array.length) {
    const endIndex = toIndex < 0 ? array.length + toIndex : toIndex

    const [item] = array.splice(fromIndex, 1)
    array.splice(endIndex, 0, item)
  }
}

export function arrayMoveImmutable(array, fromIndex, toIndex) {
  const newArray = [...array]
  arrayMoveMutable(newArray, fromIndex, toIndex)
  return newArray
}
