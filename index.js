gsap.to(".imgcontainer", {
  duration: 2,
  width: "100%",
  stagger: 2,
  ease: Expo.eaeInOut,
});
gsap.to("#text h1", {
  delay: 2,
  ease: Expo.eaeInOut,
  stagger: 2,
  top: "-100%",
});
gsap.to("#text h1", {
  ease: Expo.eaeInOut,
  stagger: 2,
  top: 0,
});
