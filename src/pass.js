const list =[
    {
        "user": "natas0",
        "pass": "natas0"
    },
    {
        "user": "natas1",
        "pass": "0nzCigAq7t2iALyvU9xcHlYN4MlkIwlq"
    },
    {
        "user": "natas2",
        "pass": "TguMNxKo1DSa1tujBLuZJnDUlCcUAPlI"
    },
    {
        "user": "natas3",
        "pass": "3gqisGdR0pjm6tpkDKdIWO2hSvchLeYH"
    },
    {
        "user": "natas4",
        "pass": "QryZXc2e0zahULdHrtHxzyYkj59kUxLQ"
    },
    {
        "user": "natas5",
        "pass": "0n35PkggAPm2zbEpOU802c0x0Msn1ToK"
    },
    {
        "user": "natas6",
        "pass": "0RoJwHdSKWFTYR5WuiAewauSuNaBXned"
    },
    {
        "user": "natas7",
        "pass": "bmg8SvU1LizuWjx3y7xkNERkHxGre0GS"
    },
    {
        "user": "natas8",
        "pass": "xcoXLmzMkoIP9D7hlgPlh9XD7OgLAe5Q"
    },
    {
        "user": "natas9",
        "pass": "ZE1ck82lmdGIoErlhQgWND6j2Wzz6b6t"
    },
    {
        "user": "natas10",
        "pass": "t7I5VHvpa14sJTUGV0cbEsbYfFP2dmOu"
    },
    {
        "user": "natas11",
        "pass": "UJdqkK1pTu6VLt9UHWAgRZz6sVUZ3lEk"
    },
    {
        "user": "natas12",
        "pass": "yZdkjAYZRd3R7tq7T5kXMjMJlOIkzDeB"
    },
    {
        "user": "natas13",
        "pass": "trbs5pCjCrkuSknBBKHhaBxq6Wm1j3LC"
    },
    {
        "user": "natas14",
        "pass": "z3UYcr4v4uBpeX8f7EZbMHlzK4UR2XtQ"
    },
    {
        "user": "natas15",
        "pass": "SdqIqBsFcz3yotlNYErZSZwblkm0lrvx"
    },
    {
        "user": "natas16",
        "pass": "hPkjKYviLQctEW33QmuXL6eDVfMW4sGo"
    },
    {
        "user": "natas17",
        "pass": "EqjHJbo7LFNb8vwhHb9s75hokh5TF0OC"
    },
    {
        "user": "natas18",
        "pass": "6OG1PbKdVjyBlpxgD4DDbRG6ZLlCGgCJ"
    },
    {
        "user": "natas19",
        "pass": "tnwER7PdfWkxsG4FNWUtoAZ9VyZTJqJr"
    },
    {
        "user": "natas20",
        "pass": "p5mCvP7GS2K6Bmt3gqhM2Fc1A5T8MVyw"
    },
    {
        "user": "natas21",
        "pass": "BPhv63cKE1lkQl04cE5CuFTzXe15NfiH"
    },
    {
        "user": "natas22",
        "pass": "d8rwGBl0Xslg3b76uh3fEbSlnOUBlozz"
    },
    {
        "user": "natas23",
        "pass": "dIUQcI3uSus1JEOSSWRAEXBG8KbR8tRs"
    },
    {
        "user": "natas24",
        "pass": "MeuqmfJ8DDKuTr5pcvzFKSwlxedZYEWd"
    },
    {
        "user": "natas25",
        "pass": "ckELKUWZUfpOv6uxS6M7lXBpBssJZ4Ws"
    }
];

exports.getUserPass = (level)=>{
    return list.find(i=>i.user === "natas"+level);
}