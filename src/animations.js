import gsap from "gsap";

const shakeTimeline = () => {
  const tl = gsap.timeline({ defaults: { duration: 0.2 } });
  tl.to(".Ball", {
    x: -40,
  })
    .to(".Ball", {
      x: 40,
    })
    .to(".Ball", {
      x: -30,
    })
    .to(".Ball", {
      x: 30,
    })
    .to(".Ball", {
      x: -20,
    })
    .to(".Ball", {
      x: 20,
    })
    .to(".Ball", {
      x: -10,
    })
    .to(".Ball", {
      x: 10,
    });
  return tl;
};

const ballTimeline = () => {
  const tl = gsap.timeline();
  tl.to(".Ball", {
    height: "800px",
    width: "800px",
    y: 200,
  })
    .to(
      ".Ball > h1",
      {
        y: -500,
        position: "absolute",
      },
      "=-0.5"
    )
    .to(".Ball > div", {
      display: "flex",
      opacity: 1,
      y: 0,
    });
  return tl;
};

const backgroundTimeline = () => {
  const tl = gsap.timeline();
  tl.to(".animate-down", {
    y: 500,
    stagger: 0.15,
  })
    .to(
      ".animate-up",
      {
        y: -500,
      },
      "=-0.3"
    )
    .to(".App-bg", {
      "--o": 200,
    })
    .to(
      ".App-bg",
      {
        "--wh": 200,
      },
      "=-0.3"
    )
    .to(".App-bg", {
      y: -500,
    })
    .to(".App-opentext", {
      y: 0,
    });
  return tl;
};

const animate = () => {
  const master = gsap.timeline();
  master
    .add(backgroundTimeline())
    .add(shakeTimeline())
    .add(ballTimeline())
    .restart();
  setTimeout(() => {
    const removed = master.getChildren(false)[1];
    master.remove(removed).reverse();
  }, 6000);
};

export default animate;
