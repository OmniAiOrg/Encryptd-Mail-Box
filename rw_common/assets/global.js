
document.getElementById("clipboard").style.visibility="hidden";var $temp=$("<input>");var $url=$(location).attr('href');$('.clipboard').on('click',function(){console.log("clicked");$("body").append($temp);$temp.val($generated_url).select();document.execCommand("copy");$temp.remove();alert("🐻 链接已经复制，可以去粘贴了哦！");})