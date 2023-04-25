import React from 'react'

function Card2() {
    return (
        React.createElement(
            "div",
            { style: { width: "500px", height: "550px", margin: "100px auto", boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset", borderRadius: "20px" } },
            React.createElement(
                "div",
                { style: { width: "100%", height: "60%" } },
                React.createElement("img", { src: "https://uswfoxtail.blob.core.windows.net/foxtail-prod-uploads/images/Thinkst.f8f644e6.fill-750x422.format-jpeg.jpegquality-80.jpg", alt: "", style: { height: "100%", width: "100%", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" } }),
                React.createElement(
                    "div",
                    { style: { position: "relative", top: "-100%", margin: "5px", background: "pink", width: "40px", backgroundColor: "#e33d6f", height: "30px", borderRadius: "10px", display: 'flex', alignItems: "center", justifyContent: "center", fontSize: "1.5rem", fontWeight: "bold" } },
                    React.createElement(
                        "p",
                        null,
                        "+"
                    )
                )
            ),
            React.createElement(
                "div",
                { style: { textAlign: "center", lineHeight: ".5" } },
                React.createElement(
                    "h1",
                    null,
                    "Dima Blover"
                ),
                React.createElement(
                    "p",
                    { style: { color: "#aaabac", fontWeight: "bold", fontSize: "1.2rem" } },
                    "UI/UX Designer"
                )
            ),
            React.createElement(
                "div",
                { style: { display: "flex", gap: "20px", justifyContent: "center", marginTop: "40px" } },
                React.createElement(
                    "div",
                    { style: { display: "flex", alignItems: "center", flexDirection: "column", lineHeight: "0" } },
                    React.createElement(
                        "p",
                        { style: { fontWeight: "bolder", fontSize: "1.2rem" } },
                        "26"
                    ),
                    React.createElement(
                        "p",
                        { style: { color: "#aaabac", fontWeight: "bold", fontSize: "1.2rem" } },
                        "shoot"
                    )
                ),
                React.createElement(
                    "div",
                    { style: { display: "flex", alignItems: "center", flexDirection: "column", lineHeight: "0" } },
                    React.createElement(
                        "p",
                        { style: { fontWeight: "bolder", fontSize: "1.2rem" } },
                        "100"
                    ),
                    React.createElement(
                        "p",
                        { style: { color: "#aaabac", fontWeight: "bold", fontSize: "1.2rem" } },
                        "Following"
                    )
                ),
                React.createElement(
                    "div",
                    { style: { display: "flex", alignItems: "center", flexDirection: "column", lineHeight: "0" } },
                    React.createElement(
                        "p",
                        { style: { fontWeight: "bolder", fontSize: "1.2rem" } },
                        "90"
                    ),
                    React.createElement(
                        "p",
                        { style: { color: "#aaabac", fontWeight: "bold", fontSize: "1.2rem" } },
                        "Followers"
                    )
                )
            )
        )
    )
}

export default Card2