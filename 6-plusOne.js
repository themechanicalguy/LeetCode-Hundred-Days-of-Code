    increment(arr,n){
        //code here
        for(let i=n-1;i>=0;i--){
            if(arr[i]<9){
                arr[i]++;
                return arr;
            }else{
                arr[i]=0;
            }
        }
        arr.push(0);
        arr[0] = 1;
        return arr;
    }