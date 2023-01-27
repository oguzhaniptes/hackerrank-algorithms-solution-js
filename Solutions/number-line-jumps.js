function kangaroo(x1, v1, x2, v2) {
    let h = x2-x1;
    let r = v1-v2;
    return(v1>v2 && h%r == 0 ? "YES" : "NO");
}