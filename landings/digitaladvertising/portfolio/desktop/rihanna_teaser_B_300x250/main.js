function initAd(){function A(A){return document.getElementById(A)}function t(A,t){var e=new RegExp("\\b"+t+"\\b","gi");return A.className.match(e)?!0:!1}function e(A,e){t(A,e)?console.log('addClass warning: "'+e+'" already exists on '+A.innerHTML):A.className+=" "+e}function a(A,e){t(A,e)?A.className.indexOf(" "+e)>-1?A.className=A.className.replace(" "+e,""):A.className.indexOf(e+" ")>-1?A.className=A.className.replace(e+" ",""):A.className=A.className.replace(e,""):console.log('removeClass warning: "'+e+'" not found on '+A.innerHTML)}function n(A,t,n){a(A,t),e(A,n)}function g(){h.src="txt1.jpg",delay=setTimeout(i,4e3)}function i(){h.src="txt2.jpg",delay=setTimeout(g,3e3)}function s(){h.src="txt1.jpg",delay=setTimeout(i,2e3)}function c(){delay=setTimeout(o,2e3)}function o(){TweenLite.to(l,.1,{alpha:1}),h.src="txt1.jpg",TweenLite.to(l,.1,{alpha:1,ease:Sine.easeInOut}),delay=setTimeout(i,1e3)}var l=A("canvas"),r=l.getContext("2d"),h=new Image,M,I,Y,B=300,d=250;h.onload=function(){u()};var u=function(){clearInterval(Y),l.width=M=B,l.height=I=d;var A=(d-h.height)/2,t=(B-h.width)/2;Y=setInterval(function(){E(),r.drawImage(h,0,0,h.width,h.height,t,A,h.width,h.height),setTimeout(W,C(250,1e3))},300)};setTimeout(E,500);var E=function(){r.clearRect(0,0,M,I)},W=function(){for(var A=0;A<C(1,2);A++){var t=Math.random()*M,e=Math.random()*I,a=C(0,5),n=M-t,g=C(5,I/3);r.drawImage(l,0,e,n,g,t,e+a,n,g),r.drawImage(l,n,e,t,g,0,e,t,g)}},C=function(A,t){return~~(Math.random()*(t-A)+A)};g()}function randomRange(A,t){return Math.floor(Math.random()*(t-A+1))+A}function loadGlitchBg(){var A="data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QN8aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTU3NzIsIDIwMTQvMDEvMTMtMTk6NDQ6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OGYxMjI1YjQtN2U5OS00ZDc5LWEzYzktOTk1YWZjNjcxZWFjIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg1M0FDRkI3N0YxMTExRTU4RDJGRTY4NkI0MzlEQjJCIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg1M0FDRkI2N0YxMTExRTU4RDJGRTY4NkI0MzlEQjJCIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmFjZDFjMzY3LTU2NmQtNDFiNy04MjFlLWRhNjRhNmUwZjc3OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4ZjEyMjViNC03ZTk5LTRkNzktYTNjOS05OTVhZmM2NzFlYWMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAD6ASwDAREAAhEBAxEB/8QAjQAAAgMBAQEBAAAAAAAAAAAAAgMAAQQFBwYIAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAUQAAICAQMCBQMBBwIFBAIDAAECEQMAITESQQRRYXEiE4EyBUKRsVIjMxQGocHR4WKCNPByQ3ODJBU1FhEBAQEBAAIDAQEAAwAAAAAAAAERAiEDMUESE1FhcTL/2gAMAwEAAhEDEQA/APz41QEknUdM8OvoKI/mT45RRLQQeuALoQA0aA75dAiW1O2UU8mkKTpqQvhgLCbDcztlFppPidIwhDGXYkRrtlgOlF+Vp1EGJ9MCOA1dQGhOh9cAbVIrUHcEzlgUAOImNTgLcAIQRrMj0zURVYOuVDT5ZmqigkE9BgENsKinXyyKIqCMahTUmAY0J0zX6AGvTH6TCnSM1KzYAjKxYoDCSCC41ucr45NX8rAxq4NVnIuLKgYEAwGKclVGUYAMMIUV1yoqNdpys2KjCYkYMfVGsHpJ3zyOpD/fPTplVbUNzjfSfpgL5FqrFjTQ+mAmsS4EwSRGa0HZX/K5FeL7E+PngSlghfQOWEciNp8MoEqCBYPapP7sIV3SAMSIhuLftGagUh4s3WdJxUGV9iDz08siluSaif8Aq1OWAalJBMe1RJygO4ZnYco0AAjw3zURVfGWBMeHrhBtxB9hkRud8lUprNMuAWuMAZcTRC0CthxljENO2TD9GVWAgeJOZsWU9+Jjy6ZFL4jCk2oZOaiWElM1GbFBcphgXIsiECMiqA1waMDBqEYQIwlWDGDTNCMi6ojGmhKjLKB4jfKgSuNRXHA+xRfuEb7Z42tZ/iGuo9Dvml0I5EMwJ57A4NLZCSQq/cNRgZSkuFiOI19c0oyUVV5Asv6gD+7AOoDQiospBlfADASgEkf/ABLqR1yoRcg14nTSAenllgBFYQY0OaBEgARsMi4qFFABGramfI6ZUVUYoImCSQwjWMVFWUVrakNKleTk9N9MsoytHIxt0zSG1AcHJ6DIrMwJaM1EU06TlQUpz8UBGniOuENUF+TrCquoXyOSrBo5+mZxo1IOZalVYo1jECWUZuIGMaJgRhGmBFSTgiSAdMMpIOBUEb4FaxOEQORgWHOAW4yKsxxj9uAMYFRrlR9zfWCgYe1l3EQc8aaxhRxflAPQnNNkJXNhGsHWMoTdxJhdCMKUwACnlJMyvgcopgSgjYdMqrSy1EBB6kR5YCUhuUmCwIH/AAyoX3FcPxjiBGWKFWPBUPQkqcoGQQZ8YjADkeSrsAdcsQkOJMsf+nKNKol6uR7TWvIz4ZKhLpWeTTxiOKeI8csCF5NZwA1aAF8zmw635a3FNigGkkEQJnwJ65nRls1YmI12zUZUD7gDqoOuVBnUllUhJgeHpOSqZyPAADbc+GTF0xb1CRx16nM2LKLnyGmF0thliByiYEjIIzhV2g+OWJazNYc1I53oS2TiwnQjZ45MX9IWgCDuMYaimcYagIxhKMN0yY1q5xhqcwMBfyjllxnXoDjkVsDSRpxjPGyzdxQBDqukwV88OkpLVWshYCSRB6YVk+OeRiCo2yrCxUPWNTlaWQoYSJTw88aF3rxj+L9UbZUZuUROhByqK3+ZYsnyIywJsXiVjwOv1zSFmenjvhUtrdbiCQDE+uWITx5MgA1jXKD+S2sNA/qrH0nCKAUWOAOY4wJ8+uEIsC+5p90iM3FHBNYbqdMmKCxfERliFRlZsMSwhShJ4kzx6T44QtyQY8MBgYcddzsMmKOow2vTJiw1mDCcjRZIwiSMrOlNZlkS0t7CRlkZtJJzblagYjGJOlyRvkw/SBjjF/Qw0bHI1KnIxOMXRq2TFlEziNMmNaW1hzWM2lzrlY16XYBUxs++smDG4OeBuFWPYsggMkzJ8MNxla5PkbiPYdsNM7hpgfq1IytFniGKqdWIE+WAliYY9FMDKKtQxI23nw8ssGVlYDkD1jKogCSGJEgT9copkBrscxxXQN1LHpGEKWqxyWVSQACwH+mUDbYPk5MJZlIM+OWDNWX58hsBqM2NViqUao+34gWDHfWNMyjKpZGPyggkbHQwc0GUXf297NwBJVkhtY5DfAUEhYnQDLqgaeuJQtgYnpmtSgM4ZUxkztlZMWCvMEArA4+PnkFll3B13ORdEGWJ5fTBoHcTI0OWFoDZplxm0sucuMXoJM5WbQ5WEwJgTILBw1KucLogxyLKotg1U5U1MD1OmyqxCLEMgciw2JzwRojuQsKYHHdj4DwxW4zWrVdV8lAHJf0+mRuOda5YBjvHTDYLiUYBhqoExlCu5T4mC8g0w0qZGuUOqKta68RwIGjePjgZblGqEGVaY8tssBVduJlgQskT6ZVZ7D7lSNWOv7cqAZnW1uDQdQCOmAnul4OAG5gbEZqCNQF7YWg7iI+uVAB1MkjoNPTKpVru9hdySfE5UHYS5YnVtDOAy9lsKtOoSDHiMiszEmAMsBEU8VV5BAJYjfl0GVCq7FQnkOSkGV8c0zSDlc0BwCJnCp0Ou2EBOVnVE4S1ROVlWEVlRMCYEwLJk7RgTIqxhUMTpt0wKwCgRvrhXqVgD1rTTKFevpnhaK7mxFr/AIlH3sPHMtRyXfgzBTAbaMOkZnhjM6zlbAVeWDamNjlEvrHCANAN/TA01duEDMwDuVVgZ2HlhKzNyNxEgI+gJ0/blhCR7flBPLixUsDKn0yqQWPNIEifriCWppyJALEyn6h4E5qBNlaGhWBJskhhGgHrmoKtB+BTqFX2nwnfAvtBPtXdpJkdAMUKh7gtKGFdhv8AxeZyzwirVCOSon9BHpjQc1Bai68kBIKAwf24Uplreu1z7XDDhB6eEZoJdhymZMQfXLjJR31zTIfE4YUTplRWERmkzgVhFHKlVhKmVFHCJhEwJgTAgwq8KvfIJBABjQ7HCpgenVL3JdnrcfG/Q54HQokhLFYclB1jI0zXVV6OBJHTDcYPigS2xOGx0Ul7h4uCRHSPHKBvUiJ9oIkHxyhVDwxVwRIjfCKuEXMoPKYE+E5YFJVCWBjChtB/ERhWdgosBMhpmMsFuptLEsF0mOunTKBoNo5CsAwCWBE6ZpER/mPHj7Rrx6aDU4UCNxrLAjVY5eWKFIth7O4gRWpAceu2maC1WVUjppAyhva1t8rArOhWD0JyULWlW58iQ4ICJH3a669MaDTsrLnf4a4FKTcWOgkwPqTtl/WMsM8LFYieJ2Plm2OlWNzLMSASSfD92VmlE6DKyqcIsgkcoPEaT54QM5RMIo4SqwJlRMImBWBMC8CYVeRVkmACdtsKrA9b7msABaiFXaPLPFY3KxI6JY9ejDbObcYe6QoAAfYQSoOVuMbOCgB3j/fDYUYzpryWCMojDkQGMhVhfrgLWqxXIiG4ySegygAH/uREFSR7T+/LBfxl0sYEexjP1OBmZLeTMolR7WJ88sA3I09VJIBHrlRtft6WsFNaCvin80zrP8WvTGqwCrt01NxJJK+1dCARrv1GXQVvc1fJdH8xINdJIC6A6GB5ZcGN2ZzqNYAJHlmg4I1SI9YIYAmxwdIO3pgXUxPMjk9h93mclCGVSOMH5SdPXwxB0e67uvt+2q7KgQwIburR+u2Pt9EGgxmpjk9+i8hYn2tv5HOkZ6jISACI1PXNudBhhI03yoqTEdMCYQVVTWNA6ak41ZNXeiowC+Gs5JTqYWc0yrCLVSxAG5wKIgkHphFYEwLwJhV5FTCpges3oSvKvTidQfHPDW45r1/zCwHEzJAzNdID8k3yII3r0+mGowmuHE+xY9cNJWPeNp2U+GVRNVYoLKAUBksOv/LAUe4MOeuomd5yhHu+T36AiMCVQinX2MQY8hlA2DndIla45KB4+eAwLW0LYf6h5Ejcsu30whjILLK7SSpQR7dz5Yi1jtvrftlWusBlJ+VY13+4eWaGHuOIKqvXWPXNLB/GqjkWBaRCjKJYXCFA2h+5ekbjAbdWidvVDEOy8iem+ZQIUUEXkh7IiqNpO7f9ualGKwqWPEmPPLEEODVupYAdFO5PlmolYXlXgjY7Z0cegsS7E9ThlWUTAKmo2NGw/U3hkqSa1ABBCaDx8cxa7yM/c/f9M1w5+wk5tyVGEaRX8Sa/cRrmbWpGbNMJgWEYqW6Dc4FYEwq8iphVwd8D1F+6siB7o0z5+umF0V0tyRj/ADT9k5HQgVsXcaFSYdT1wsZ7agKy6DTw8MrUI+JygjSNTOmmUMlhcsk+zYdI9MKpu1rtD/Hx+Q9P+OBi7mmxLAG0ET6xppllClsCWg2Dki7r4jwzQHnCsRqXHHj4a4EoUtDAnhWIA8SclHQ7eqwW8Wb4mjc67jy8cy0xL24HcAzBU7eGh/3zWss3d0GxTZWnC1TNtfX1Hlm+apdaBUf5lPuAKsemu4zQlKK1xCtzWYDxAP7cgbalL/GqFmsBK2JGgHSDkQrumfgK9lU6L4dM1BkZdJjNBbxA01ys0mwcl5dRoc3HPqFajX6ZXNWAddZsPgBufDGma0rCrwUQv78xa7SYsCTkaI7tVBXjvGua4cvZGfNuLRRUFX5X/wDxjxPjkqyKtaevr65Gqz5tyFWhdoH1ORYbewChF2wtIyoIoQoJ67DAHAvIq+WkeWFepunFpYBQ2gjxz5zrGRixZW0EHceWGx3Iz9s1i/dIYgdRtOCM/bmwuyrGo2OVoyyutzNY96j3rvH/ALcDGwhwwO+n7MKiIary5MYAsK7geRAIPGD0B1kHCkdx+Ns5vwIKKCS/SOhzcoxcR8wTcT7YPlrlUfbuPhJjQMR65KNFDFEcjeQVPXMrUvNj9w1jAc3jTbXKyy9+tqXWSxD1hTIMx9c3yoWos7hQAwWwLLVk6RvK/wDDNBHZ3fG4SwxVMtpOo2wLUWNaePtd5aPAeGKgra3NIePaeuIrM1bCQT02y6hLUtK8hCnY5rUsZ9iZ22Ppm5WLCnXiSP2ZpzsUlZbyA3OGcaQAFAAgDpmLXaRMjQgcKV3KzxOa5c/bAUUhiWfStfuP+2atcpyO1+RnYbKPADI1SW1ByxjotUZm4qJJzTGNMBBwX/uPiczWoRaZc5YlFXWI5tt0HjgBYxZiTlQOBMirwPVL6y/uG4GfPsdYyfIV5ADSdcjpB83lQu66sB54FmlAy21iOp8jg0s1kENqCTIIwSguC26KONq7CIB/54aI7pD8CuSAQwDDZv2ZYRiUtwYh+JJEDcnDTa54oy6S1YXTr11wRhXtqwwurnmp+36dM1rVhFdXx0NyOsmF9ctRop5GlqzxQNB+QjUQclWp3d9fb3pzIdiQCRtPiMsjLl32vZaVmS/tP0OmbkAryawGueY1nzxRvs7ezuuBSlmsAgqogT1JyaBp/HfkBYx+FpOnTGmtNn4j8g6iKWAEaemTTSP/AOG7ss4KgHoCYx+jUH4D8o8cU5xsJB/3yztdKH+KfmGY/wAgmQYjNT2xiwDf4h+d+Lk/ZWErqOMEkeG+anu5/wBYsjFb+E/MUkfL2VyL09hjNf05/wBSQp6bEX3oyHwIIya6YDKiYixGra5gqD7dWboB4nNROvKnK8QifYu3mfHDMhL74jPQG2jNRzsMVfiWP1t93l5YtTFEwpOQLrr5Hk32jNIu15MdOmArKiYEwLyK9XZkBbSTO42jPn66FWV0WAgDi3SPHFajNWWS0nqND5jI21cfjOpBRxpHUHCaM1sAZ1A+0+WE1z7kb5mAO8GMOkpX5EczWhQ/JpJ3JykJp7G4kh0InRQcaut3b/j3suVD90xx8hkS11+0/wAS7dxzvclSdEXT9pzrx69c+/cX+a/Afj+2oBprBIksGM/U5eucOfZa+MvfuDY9EA/MojoIBn25I7RiZrW7xflPMiAATIgbDNyeAdhVnZkXga1kqd94ySg6Qy1KVgMx36jpi0dftVKavaFtJjidz5+mRNbU7imm8vYwAA5cZ/1yVG8fl+yavgjhmMTA2zAYl/aMOBNZYa8SBMeOuQOrs/HWsEUUu5GijiTAyB1DdnVYTWtQsXfjEj1jM1M0+r8tZbd8NFIsI+9uQAXzjfM/lzvGOoBpr9cRyA9FFgiytXHgwBzcNc7uf8Z/A3Hm/ZpPXgOP7s3+8bndcYf4j/jj3yKO44zqnT/jj+zf6v8Aw193/hn+ML2djjtjUAsllZg2nqc1fb/jE6uvNu/7evt7yqTx/hbcGds9HN12sxketivONOua1iwKe08uMn9M9D45dYQz1/bgCV5adOpysrYqB4AYCCZOViqyiYEwJgeuFFEECZ3jPnOhRVqnDRJaSP8AnkagbBUVZ49xjQYa1dYXiARp+mcIO53X2ASv7sDFceNhPjGG4y3ch3dREn3CMNOwWqFhgzBEg+eGQ9qjG5XQzYCWZY1CjWQcRH0HYdytlMKQL2XmKyZ8p0z0epx7nlzfzHeXVGxO5ZWApAKopjkTrLHJ7Ld8tet8h3/wv3typTU1alWFtZJhY+wfXfJHaVl/JWUVd0LEVCamKpTwKjgyzJJ8OmajUJ7XuV7Z7XDKXtpJPypMGZhcYVfavTzZ6gXKww5aQNyYyUx0v76vvHEVr85AGq6cQZkxkxMdAoXe77VdwFFnEGB4RkGymmsL7YLxq/ECT6DMhiUKtNhaHsZCGsKif2ZAv8b27o1XcEpx+LgB8YRpn92EH2vddglgRKWRr7SPsPufrr4Zmxda/wAUe2X8r37kViyKweAM6eJOmL8OfWun3feChamDIOdioS5MQx6R1zHM8uX5LTtrf7J6xUVZ7SxVbCDBeeXL01jOsStAS68fzA3bmuyV4sDzUbTHQ+GbnKF93Yy/kOzrV3UWF+SqvJWAWfcf0+WX8RdYfyd9tS2dp3FnOzumY9oqIZ+MAclbpI1zHXEnw365teW9+GfvHDkonJ+DsCJCkgaecRnp5mR1t0JQr27KGBg/cNjjUJVcqflZQFSfDCWEZpmk2NrmoxaDKymBMCYEwPX3YhJA06Z890A8ldPuIg5lqEhecCOJXr44U5VK1hTrHXDNo7NAWjKRz+7BdWfjLEDXI6RnRgKzZElIg+GGnRSr21AGfbyDdfHDKqyo7pIUghiS4OsEa6YK+h/H1KtRrkFgCBYAFMHO/rce2b8zTXX2Ko7NYqzCuZ5H/qOT2rx5rzhBcnevWvtJOmsR1GI9MFctnc3ljyd35BgwIBhdNT+3KEJ2j3I5f7aUkkanQaD640X2HFzfYfakdB1Gwy9QdDtLlReRAQ2aadfIZkdOu2uPkVua7todCNxkRu7a9TXyCsA40kEEz5ZlMa+2sR3dQDyUAnQxr55kX3TFELmQFEkjwGDD+zVPgHctZ/K48+R0gdTkZ1oF/YiqlhYqr3JAo0+89MzjNpgWihqx3DIHsc/EGO7H+GeuIxa2c604qzBS2ig6Sd9M1IwtXR0DVsCp1DDUZ1gMA50kRgT8f23b12JBsQs9suxYqW3Ck6gZx6rceO9y4Hd2LaGdVLhFLHQkk9fPPTz8O0Gzz2xbWW1JPjOFJrGmBbyFMZUrK5hc1HPonNOasqJgTAmBMD1pntHt3jYeBz52umDqDcYOrdTkXUI4RqD4DBqK5BYEaYMW/F1JG5wsjO1YIKzBUa4alYLqiK41ADa+mG46fJhVUZ1YABv9sjNL+craYUajhPmf1DA7VF1odamVj8ojmsDhpvnXmudgfzoFP4okHkagOL2N1nczvl7unr+Xwv5F6L7u87sfIbhYhRyRHEaN03nbLHo5YrO5+QXWMLHpJbhW7ywZv17RPjlCau4sA5cuKWAJYviPXzy4hlRSi6SpFJEFEaZ5eZyK6XbXH46fYXWshaeI1WTuT5ZEdavtj86OWMVggKNjPU5nR06a5jU8vHImmmpma1YdJVfcG06/auZQjtO0vf8AIX81sCQvAs/JI8AI3wWttlNrd4lCO6VNS4gAfGDsD/yzLFp3t7ZOz7V0a6xpVLwohGAPuPhhi+V8jQvZ0d5y7juXYhLwogOATJ2jTLE/6aaO2s+Cte5Zbr01+UqPuIiQNM1zGQLV3HbdtWFatUqRzaAkCQJUqAdNc6zk0z8Z3D9z2FF7sjNYoYtXPA+k6505hWS2rt/xXZdwwZ2qZ2sYO3KC+6rOwzzez/03zNeUfmvir/L90ID8rfk5CQYYciuvrnq5+I6WEOZoAAgeuFAjADAlh9hylZbthm45dE5pzTAgwJgTAmB7EKRyAb3E7+oz5+N/pPi4uyjXqMvXOGqKpAP6uuZwlKlnDTtkaWI4rGpGFLtYGABr1OFjDYxI4tMA5Nbh9bWBKhqLAfaMIruKzWAWP3HXyJwrodh3DGpDs1ZjNJY1/lG/ue1ZK4Y6e2Qc0xzMfA913XboAiqDxf8AneZE5uO0ZlRU7Vi/t+Y86D5KYMxmlZqwXpZNip5A9T0jAbwRaUaw8n5S1QO6jzGSjv8A4qscFOihhz4gzA8MzaOxU1ZQWge3fzgZlGnt+4qsFZXQWiUnQ6YRp/uqanWtyfktYhBHUCcyjZS4C+B6z54Yqq++pc3gBv8A9c/zJG+k6eOZrNh1fd0t2Q7sSKSnySRrxidsSM2eUbve3Xsv71jFAT5OUa8YnNSJnld3edtR2p7u2wJ24AY2GYAMR+/Ll+gFv5Tsanau21BxVWs5HZXMLPqc3x119mNihQoCgBRsBtnolZcD/NL3q/EhU2ssVX0nTf8AfnHv5dfVPLyz8g11v5C97ORfnxYtM6aaz6Z34+HWhuPsUA+Q9MiFrtjBG2wM9x2Hhm+XLsrKwmEXhcTKYkYMSDMYHsR5IqkGWHTPApYtZnLbnYjHy1iXfIWEjQCJGSoiKVhT1jItpzcUTaT1y4ms5Q8GI3n2nM1uVzrUbXkdQZIyOkNXuV+I+I0Hkehwi2UuiljLKoET1nfCnVWCueR4tOinSTlDu2sLJZICgakgQDG+2VLHyneVUcyOSKTaSykH7ekjwzpzW58MdtSf2aMB/TcgsBHJSdM1ql9paEZgihiT7eYn6ZaGQlV5FZSxYPIlYg9RrmaN/wCMsf50ZJC68uPmPDM0dmiu018Fcs6gqB4z4+eRDVp79fhphyiqR8gglYGhOEaKv7mlaUK2Xb8rgByXrr65Ad9nd39ryNDq5deVa/cIP7sJjodjUtdlrwQ97cmkaaCIGZ1jpsTtQvcNfyJ5IE+M/YADMgZHPWbuuzs7juXQPZXQ9DVSsBVPLcDxzUpK0f2QN4sexnr+IVmgxwJBnkR450ljOs3fdv8A3b3dvWgocCsnuSoYMAZ4j0yWxrnw1X97R2tTWXWAKgkgCSfQDLOknNr5L/Lf8h7buPxxro0MLYOcqwYkaAfxRjnzXfjix8G1/wAlzseXB3L8S0nkZgknffPQ0l8aLkhhW2aRG2GBnu+7NRy6LjKxiRgxMC8CpwiYV7EShA6nrnhVQHF1Fe36sFoyeg90bnGshXizkZJFogOM8jIy1mAJOp89My3GO6r3l/uVtx6ZHSVktNYUlARpJ9cNxO37xXWApDoNR44xbCu5797Ur5RzOqny2yyEZez/AC9tDGlifibRp29c1i2MHcWLZbb3DcRYZC1jqehzUixQtuq7UBxyraCUO0Dx+uBn+7uYqQVwQR5dcoWpKtba0EmQD01wOl2X5CrtqHZ0LPxPEjYN0zIb2X5vuEh+ILuCQJ8MtiNJ/wAq7ySTTPHQ8TEHJg19z/kvcdtxlOScA2jfxYxmQC/5syEcu3O0kTrl/K4an+e8VBbtvNvIZPwzeINf8+7dmP8AJcjpEDTJ/MnEF/8A77t1H9B4zP8ANf5FP/n3aGZS1fIRj+VWeuM1/wDnPbOnBBYo32nXL/CtzmRis/yzt7NWe2ekQMs9Na1xe/76ruCeDHedc6882M2sClFOp0zrjKWWIzSDjBJUk6jLiISuhnCMz6sTmo59BjDOKyomEVgXGFxMI9dqVACAddDp1zwquyFdTMDw8clQ9CyjXY6jLEDWB8zaTOuSFqWkEjLUgLVJAAMSNZzLcJOiFRkblc/ukWuppEE7DLG+XNXvKyAQp5oNZ3MZY2C+7VfbJVZXWY10GVMLUnuO498G1xx4qICzqTGXVDZ26js3smbVeFHiu0401O1ovlmCBpVfYdRqZyqSHNneXuw53MDxI0AUDwxSMvxXDt2kHi5HE+eagjtZVUa7QRtI/wCOPsNrRuAZFhx7o6BclRfydwe4a9/aHkBRA1A0MYE7y013LqHXTkBs0DEIyq3Lk2s+WVVO7ioalp3GUD2zqHYNoeMD1y1BuPbHhqczGtZ2XcnNyhTDwy6BK9cupQdZyshIknwylCBlZVhEwBOVmphFHKzVYRMCYVMD1tXIkgDbcdPLPng2HIqQJI11y0Nrb2Q+h6YSwSGGMkadM1EC2uo8cIFlBgz02zLUIsPGVIgnY5Gox91JqY/+pw3y4llnDuGVRrIEjzyx0irUCsrlgFQkKvgQf1ZVBa1gse6tSFIhWHgB5ZYqdryUFO4EBllJO+k4Quy0CtACwLfedhA8IwEAhUXQiwggMCACCNcqhe117EKSTJHFfARlFpS/x87HHEgcgdTtlQTO6itUOhB18R55APcd1a6LTxVVJMPHvI8zgVVQW7i0sQFXodySNBlCZ4IyAQ8+7xwoVHIEA7QTgLICk2fQDNIZ8nJDpPhkWKsgDgOupwEhQTrtlUuwSYH7MqAdIgZdQDiNM0mAI0zSBwiYFRhMQjKzYEjKziRhMVGDF4FYHr9dSV8iJgbjPAmjRlckgcW8M0LMfq28ciCK9dPLAVyAby6DIpb3DX+IdMULsYsgJENOmFhHe2fD2rWwBwjlPn5ZbGuflwe8CO62VMFLke0776E4jtGY3zR3HIBrSwDSfHqBlih/H3Wi8CCUPtZJic1Sn8Ht7hoAatVYSToPTxjMpo+57Kz4qa1HI2A6nSAD/vg1ks7dGUW0FmVFPJSNeQ0IGai6SXDVcbCfYBxgYUKtN0FiqiNDrGEMZhX3C8hKgHiRodfTCIVRrEsILqzg8djvEHAtjx7k2Hcsx8TphSrKm4m0ssEy0bg+GULUOnJGEEwY/dlC/jb4bnKgqp4zMQx8sqAR+KAgTB3wLVuT+BjAjA/EGnUkgeORQqBMnoMoAqdyMsCyNdc1AJQxlSlxlRIwJG+EoTlShysoAOuEVlRMCYHspECQBJ1jPGwEVgANsRkRJDyB+zAI8eIM7ZUZLbVV4zLUDa8DkN41jwyVrGe3vURipGxkD6ZVkYvyneV20hdg7At9BGVvmOL3qBbanSz2Bws7kAdYyxsoqBfZY5ml24yPu5bjTKrUfi5B6TCkTy2PLMg6WAR3P2oNV6yfDJRV95PcUryIIHKTvr0xAhrKKyy8XVpGk6ef7c0Aepm7lvaFVgGUHaMqsttFqs9qEMoaNDqZ8B4ZYoa3ey9C7RBifCMqNvd01Ds6yulxaC07A6jJEIUGtrC7ggQF64VnrtQ1tyWT4+EnfNYL7lq0smksawBwZvu08cQJpmWDH7gSQdd8qCoqmhnYHgJaehjSBj7C6xztVftkxiht4rBVQ32zkUFpRQOE6jWcsCpMScogWcC2HGPT9+JQoKODE76AZrUDx08saKbb/QZUoIkxlShbfKzVYRMIrAmB60LbIKKwIB+7rnh2ph1NzcCH3G2XWbBqukjfec1GQ2lkWEEjcnFCGsqghoL7AZlpzO67u5HKAyRECNDlbidvbRarc/Za5KkkbRkq1xu/uHMgkQCYA2zcbhf4zuKBc4cj5DWRWWEid4+u2LGmW9nu95gOdgNtNMSDfSFYLY6mKQAWGo1HtzNFrW5aSACzcl8wMgzXoz90gUFmeB5+eWKZWiJd8oYShAAbXlB65QPc3F3as2KeRLGBsW/T6DASlTn8hWEXlIAHHwHXL9Kzd6grcqG9oJGm4zUZNAqCFgzMEOnmSP8AbIM1rAugB3HuPSc0BEignaDHrOFE9aCtG5FmbSPDKBuqtrAL+xbRow1mDrhFt/LqFauWDSGYTBB6CcCdsFDtaSfZs24npiigpPJtyOuQKckg9TlgEt7RplBppHkMVVNrkVRX28fGMqB4aEZQLrocSlhUQZzWs4EjKzYHKymEVgXgeup2tQWV0WZnrnikZ0dloWCBPLSM1qLrEiZgHQriINwFQiJOW4jlXFUtFqiXXUp5Zh0kZL+6F1ij7XBBUkajXK1IwOa7+8u52FVGvOdsN4yixHsdLK0LqrIJJ1J2b1y4BvZjdMIjUoCp0knQRp11xFjG5qXQgrGhLfvGaVooexrVRWJheeh+6Bp+zJYNXaNae8WJ+ToGMyTmFS60p3PAIByaeRHu84PhhmL5rXWUYElySxOogbZVZEqm4OgkdQ3icqql6e95cuMMfIbdMABQlltYb3NJZx5k5rfCNl5VKbKnrSGKlLgP1A6j0zCMPddqroO4rj4h7YXf2mJPrm5V0nvKGSiklSr2xCjqema5ACkV38b/AL6oAr8WPTLoX3Tc7mG0AAiI1G+IFhW3GgO3hlGikE0MgAILT55mi+IRWXck6neMKzEcZkZYUsgs2nQTmmWmlQUcmBA0nJWoBELan7Ruciq3OEWqyT54ULLv0mcQLZQVnNamFMuVmwLLGVMURlTFRhMSMGPYkBA4nTwzyuBYBcuT0MRkqmqgKabrmpPCasj2mcWEcn8g/CosBpPuYb5muvLiV/N3HdOTq8RWv/SevhpiNsfdULUXYMGC6NUZmf8Af6ZYsZXVqbgtRZ24BjIjcZv5iw/sjTYR7TXGtthJYAjrH0zNKR3jJ3FiVoT7QV5HWY66ZYQENzKrANcDTFV0TYy2U2s/PgAAZ2H8OmZod3PBn+YE8UmPQnrkQFfBjHIKGs1G8DfCpcxHO1F5AsBO4EDAVelDMGscqUU/GBryb16YGahuFavEFTDQdSD11ygbO85K1dg5LIFbagqJmY65cAdraIFWoHuLaT10zQHvRx+F/mNijaZ0YbgZeRSWmru0YgOXBnkOQ1G+vXLngLrQX9yxRRsQgPWMv0AWxlrKuum4B6HICqPFDrJyUMUCJJ9PU5loFyKk8Ty8zmolIUR7SNc0hlRIXUakZKsE4IrUdDrkilhdDG8ZRaHbJSD4ycihasxliEmvWDtmtA2IORjbLqYBkxKmB4ZrUwMa5dTHrdaEWEyToInpnkec0anVo13zQYTBA2HjmmVWAhDr6Zep4I5P5GtfiEwFbRh55xrty4F/ePyVafYyrAYba4dCuaQJX21KzEkbN/D6nNKVbZfxS1YrD1/Gq9SDr/plgLtCKabQWUJYhDId2/hj65Csgv8AjpuIBa1X48tOIXTp9M0RdYV3u+MkqxBBIgyfLFVuFKVWVUMQVaSbiNvERmRd1LNTwrBLaMSdNBkISlXcCwzWISSXPgMKfXVe6cQeFbCQW0B0nCMdqvb8fViSBr4YBv2YrCu8kPISNuWUZe75WdwErUkBQYOpAUa5uDMEsqYFCST9sZQn57PieptQTInoc1gfSFVCyGOKSZ3M6GMg09t2yf2Bt1W0yQ22nlktGexkNTQOMtsdoHniAawSGjUA74oeanNYZV0UanMtI1VZmSSogT1nCFLWLHs46QDx+gzepiUcTHOeCzoNSTGgyVUs1jf65FRQeBK9N5wKC7eOAVerAeJwphr3H+mAAq1DeGuXQtqtMaFtVH1y6IKTwJ6SMaA+HWOuXUx6iFsV/k5yJ1BzzvJpobkoI08M0iuLEROg6+eCjuJFJ5HYb5vfDMcT8na3C0nVZAB842zlXflxzWK3CPrY5BKbQBtJw6I4Szsn4t8bc+VqN/8AJGxywc/uLv8A9hCkFI0QmeJ65qQPuWpmpCsDXwCsx0I4nATy7WzvGVuSVFitvHqRscuCg7U9w45lxEA6dNslVtXvO3rRK3qLOiw7+J3yYlMa8WKOGihFCzJIJOsnIQtCEssHcWFazPFvFhhSbDaLK/lYFd0WdF8MKOqwCbCg4qeJEYQDvbe6GYAkiftjAw9yX/uZr0c6Hj+zNwabEY92rOCqUiCTpJAgDGjnNU9tzuRxJbYePlm9Vr4onZ/24HLuXcBBpB+vTILv51Wr2zyyqvF0UyJGpE5EYkscVuJ+4gcSJ0zQ01pz+VoCpP6dBkoaHPwtyaeLBa1PSMw0UJ906kn6ZRGqCbDU7D1xqBqU17Egg6HKoWkxJknfIhvAgcTGvTqMKACW2nAojg48d8B1Tcp/iyVRDjxEDXrkFBJ0jfbApkAYmNDocuhToIC/X65dC/jMzl1XpzEcPM5zeALv8YPH3x+kbzjQyshqxG/UeGWGM3dkmplsMHoB1yVZHFsMuKnZSA3Liep2AzDtzHK79SO4YEEwYmZH0zUbIN6vYFcSFUgkH/UZcCKe0W52sQEVDZm8euub0NNJ5Fx7gPcOWkDwjrmdDKOy7b2OAWkAuPEsdFHnlvQont0vUPUoVCS0SdI0BPWMkCNGqSwuSbHgE7H1y4rYtoW61GYohKh1Gx4wMziC/JUq16sHHBFB4gak7/65YrAj1+9o9ob7TqT5nKNIdru0sIHtQSPI9cgz83ausFiSTCqdhlUSo62BzrbOhGwg9cIZz+Qu+pIJAnWSepwrLD/KrtHtnUeWaigqZv71DXEh5E6jCNCs7d3beeI+E8VB1WSY6ZPiIxyzQijck6aabZoPU+xaUEcY5Hxk5KqrFCNHINDGWGxzIsQKg0ddZ6k5RLX5Ov8ACANPpgUWEkxptGAIMnlEAHTCiWS077k4DOzlrSu/IREa/TJQu0cmO8rt6DEASQvLzwGFjx8oAGFMSwQxP6V0yCgwIjAq7iCvkNfXLAPHKPRrNsw8JdX3N6fXIHV/q9OmbaYe9/qJvsN8zSOR+V/8tPt3H27fXMOvLl9797b7H/0M3y3GKr+qn/tO/wDv5ZtWhPt7j/6z9n25ENT7LP8A61+7f6Zmjd+O/wDDX7dz6bHb/qyJWdv6J+37W+706+eahHNr/wDFT/3fT6Zpo9v/ADzv94/qeg3yVB1/1l3+7r6fuyRWbsP/ACrNuv37fXLR0+0/8R/6f3Hfbbr5+GZRzG++n/11zUaOX+o31323GQBT91+//bhSV/pN6H13zQzrufXplGyv+gdv6i7bf92ZRkq/rN6H0zX0GWf1TtsPt9Mio39M7bHf1xBot/8A6+v79xv9m3TAxtthBePoN/XAt+mFWv2N9PXFDe2/rVb9fs+7IC7b+u232Nv6YGcfYcod/wDKdt13yAW+2/1G3rhQL03wD7j7E+u3++IB6/qzQ//Z";glitcher.glitch(A,function(){document.body.appendChild(glitcher.canvas)}),setInterval(function(){glitcher.options={color:{red:1,green:.8,blue:.58},stereoscopic:{red:1*randomRange(1,3),green:1*randomRange(1,3),blue:3*randomRange(1,3)},lineOffset:{value:1*randomRange(1,3),lineHeight:10*randomRange(1,3)}},glitcher.process()},100)}window.onload=function(){initAd(),loadGlitchBg()};var Glitcher=function(){function A(A){this.canvas=document.getElementById("bg0"),this.context=this.canvas.getContext("2d"),this.origCanvas=document.getElementById("bg"),this.canvas.style.zIndex=-1,this.origCanvas.style.zIndex=-2,this.origContext=this.origCanvas.getContext("2d"),this.options=A}return A.prototype.glitch=function(A,t){var e=this;this.loadImage(A,function(A){e.renderImage(A),e.process(),t()})},A.prototype.process=function(){var A=this.origContext.getImageData(0,0,this.width,this.height),t=A.data,e=t.length,a=this.options,n,g,i,s,c;for(i=0;e>i;i+=4)a.color&&(t[i]*=a.color.red,t[i+1]*=a.color.green,t[i+2]*=a.color.blue),a.greyscale&&(n=t[i]*a.greyscale.red+t[i+1]*a.greyscale.green+t[i+2]*a.greyscale.blue,t[i]=n,t[i+1]=n,t[i+2]=n),a.stereoscopic&&(g=a.stereoscopic.red,t[i]=void 0===t[i+4*g]?0:t[i+4*g],g=a.stereoscopic.green,t[i+1]=void 0===t[i+1+4*g]?0:t[i+1+4*g],g=a.stereoscopic.blue,t[i+2]=void 0===t[i+2+4*g]?0:t[i+2+4*g]);if(a.lineOffset)for(i=0,c=0;c<this.height;c++)for(g=c%a.lineOffset.lineHeight===0?Math.round(Math.random()*a.lineOffset.value):g,s=0;s<this.width;s++)i+=4,t[i+0]=void 0===t[i+4*g]?0:t[i+4*g],t[i+1]=void 0===t[i+1+4*g]?0:t[i+1+4*g],t[i+2]=void 0===t[i+2+4*g]?0:t[i+2+4*g];a.glitch,this.context.putImageData(A,0,0)},A.prototype.loadImage=function(A,t){var e=document.createElement("img");e.crossOrigin="anonymous",e.onload=function(){t(e)},e.src=A},A.prototype.renderImage=function(A){this.canvas.width=this.origCanvas.width=this.width=A.width,this.canvas.height=this.origCanvas.height=this.height=A.height,this.origContext.drawImage(A,0,0)},A}(),glitcher=new Glitcher({color:{red:1,green:1,blue:1},stereoscopic:{red:10,green:20,blue:0},lineOffset:{value:4}});