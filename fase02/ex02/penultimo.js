function penultimo(str) {
    for (let i = 0; i < str.length; i++) {
        if (i + 2 === str.length)
            return str[i];
    }
}
