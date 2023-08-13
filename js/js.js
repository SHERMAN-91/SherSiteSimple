var home = document.getElementById("home")
var homeOffsetTop = home.offsetHeight
var featuers = document.getElementById("featuers")
var feautOffsetTop = featuers.offsetHeight
var about = document.getElementById("about")
var aboutOffsetTop = about.offsetHeight
var service = document.getElementById("service")
var serviceOffsetTop = service.offsetHeight
var portfolio = document.getElementById("portfolio")
var portfolioOffsetTop = portfolio.offsetHeight
var team = document.getElementById("team")
var teamOffsetTop = team.offsetHeight
var contact = document.getElementById("contact")
var contactOffsetTop = contact.offsetHeight

console.log(homeOffsetTop)
window.addEventListener("scroll", function () {
    var scrollNow = window.scrollY
    console.log(scrollNow + "::" + homeOffsetTop)
    if (scrollNow >= homeOffsetTop - 100) {
        console.log("fea" + feautOffsetTop)
        this.document.querySelector("nav.menue").classList.add("leftMenu");
        $(".featuersLi").addClass("active").siblings().removeClass("active")
    }
    if (scrollNow >= feautOffsetTop + homeOffsetTop - 10) {
        console.log("abo" + aboutOffsetTop)

        $(".aboutLi").addClass("active").siblings().removeClass("active")
    }
    if (scrollNow >= aboutOffsetTop + feautOffsetTop + homeOffsetTop - 10) {
        console.log("ser" + serviceOffsetTop)

        $(".sevicesLi").addClass("active").siblings().removeClass("active")
    }
    if (scrollNow >= aboutOffsetTop + feautOffsetTop + serviceOffsetTop + homeOffsetTop - 10) {
        console.log("por" + portfolioOffsetTop)

        $(".portfolioLi").addClass("active").siblings().removeClass("active")
    }
    if (scrollNow >= aboutOffsetTop + feautOffsetTop + serviceOffsetTop + portfolioOffsetTop + homeOffsetTop - 10) {
        $(".teamLi").addClass("active").siblings().removeClass("active")
    }
    if (scrollNow >= aboutOffsetTop + feautOffsetTop + serviceOffsetTop + portfolioOffsetTop + teamOffsetTop + homeOffsetTop - 10) {
        $(".contactLi").addClass("active").siblings().removeClass("active")
    }
    if (scrollNow < feautOffsetTop - 250) {
        $(".homeLi").addClass("active").siblings().removeClass("active")
        this.document.querySelector("nav.menue").classList.remove("leftMenu")
    }

})
$(".menuBar").on("click", function () {
    $(this).next().toggleClass("openList")
})
for (i = 0; i < $(".photList ul li").length; i++) {
    if (i < 4) {
        $($(".photList ul li")[i]).css("transform", `translate(${i * 100}%, 0) scale(1)`)
        $(".photList ul").css("height", "80px")

    } else {
        $($(".photList ul li")[i]).css("transform", `translate(${(i - 4) * 100}%, 100%) scale(1)`)
        $(".photList ul").css("height", "140px")
    }

}
$(".titList ul li").on("click", function () {
    var className = $(this).text().trim();
    for (i = 0; i < $(".photList ul li.showing").length; i++) {
        if (i < 4) {
            $($(".photList ul li.showing")[i]).css("transform", `translate(${i * 100}%, 0)  scale(0)`)
        } else {
            $($(".photList ul li.showing")[i]).css("transform", `translate(${(i - 4) * 100}%, 100%)  scale(0)`)
        }
    }
    $(".photList ul li.showing").removeClass("showing")
    for (i = 0; i < $(`.photList ul li.${className}`).length; i++) {
        if (i < 4) {
            $($(`.photList ul li.${className}`)[i]).css("transform", `translate(${i * 100}%, 0) scale(1)`)
            $(".photList ul").css("height", "80px")

        } else {
            $($(`.photList ul li.${className}`)[i]).css("transform", `translate(${(i - 4) * 100}%, 100%) scale(1)`)
            $(".photList ul").css("height", "140px")
        }
        $($(`.photList ul li.${className}`)[i]).addClass("showing")
    }
})