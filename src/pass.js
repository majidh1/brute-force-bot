const list =[
    {
        "user": "natas0",
        "pass": "natas0"
    },
    {
        "user": "natas1",
        "pass": "g9D9cREhslqBKtcA2uocGHPfMZVzeFK6"
    },
    {
        "user": "natas2",
        "pass": "h4ubbcXrWqsTo7GGnnUMLppXbOogfBZ7"
    },
    {
        "user": "natas3",
        "pass": "G6ctbMJ5Nb4cbFwhpMPSvxGHhQ7I6W8Q"
    },
    {
        "user": "natas4",
        "pass": "tKOcJIbzM4lTs8hbCmzn5Zr4434fGZQm"
    },
    {
        "user": "natas5",
        "pass": "Z0NsrtIkJoKALBCLi5eqFfcRN82Au2oD"
    },
    {
        "user": "natas6",
        "pass": "fOIvE0MDtPTgRhqmmvvAOt2EfXR6uQgR"
    },
    {
        "user": "natas7",
        "pass": "jmxSiH3SP6Sonf8dv66ng8v1cIEdjXWr"
    },
    {
        "user": "natas8",
        "pass": "a6bZCNYwdKqN5cGP11ZdtPg0iImQQhAB"
    },
    {
        "user": "natas9",
        "pass": "Sda6t0vkOPkM8YeOZkAGVhFoaplvlJFd"
    },
    {
        "user": "natas10",
        "pass": "D44EcsFkLxPIkAAKLosx8z3hxX1Z4MCE"
    },
    {
        "user": "natas11",
        "pass": "1KFqoJXi6hRaPluAmk8ESDW4fSysRoIg"
    },
    {
        "user": "natas12",
        "pass": "YWqo0pjpcXzSIl5NMAVxg12QxeC1w9QG"
    },
    {
        "user": "natas13",
        "pass": "lW3jYRI02ZKDBb8VtQBU1f6eDRo6WEj9"
    },
    {
        "user": "natas14",
        "pass": "qPazSJBmrmU7UQJv17MHk1PGC4DxZMEP"
    },
    {
        "user": "natas15",
        "pass": "TTkaI7AWG4iDERztBcEyKV7kRXH1EZRB"
    },
    {
        "user": "natas16",
        "pass": "TRD7iZrd5gATjj9PkPEuaOlfEjHqj32V"
    },
    {
        "user": "natas17",
        "pass": "XkEuChE0SbnKBvH1RU7ksIb9uuLmI7sd"
    },
    {
        "user": "natas18",
        "pass": "8NEDUUxg8kFgPV84uLwvZkGn6okJQ6aq"
    },
    {
        "user": "natas19",
        "pass": "8LMJEhKFbMKIL2mxQKjv0aEDdk7zpT0s"
    },
    {
        "user": "natas20",
        "pass": "guVaZ3ET35LbgbFMoaN5tFcYT1jEP7UH"
    },
    {
        "user": "natas21",
        "pass": "89OWrTkGmiLZLv12JY4tLj2c4FW0xn56"
    }
];

exports.getUserPass = (level)=>{
    return list.find(i=>i.user === "natas"+level);
}