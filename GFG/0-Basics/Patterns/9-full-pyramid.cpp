/*

     * 
    * * 
   * * * 
  * * * * 
 * * * * * 

*/

#include <iostream>
using namespace std;
int main() {
  int n;
  cin>>n;
  for(int row=0;row<n;row++){
    for(int space = n-row-1;space>=0;space--){
      cout<<" ";
    }
    for(int j=0;j<row+1;j++){
      cout<<"* ";
    }
    cout<<endl;
  }
  
}

// other appraoch

#include <iostream>
using namespace std;
int main() {
  int n;
  cin>>n;
  for(int row=0;row<n;row++){
    int k=0;
    for(int col=0;col<(2*n-1);col++){
      if(col < n-row-1){
        cout<<" ";
      }else if(k < 2 * row +1){
        cout<<"*";
        k++;
      }else{
        cout<<" ";
      }
    }
    cout<<endl;
    
    }
  
}