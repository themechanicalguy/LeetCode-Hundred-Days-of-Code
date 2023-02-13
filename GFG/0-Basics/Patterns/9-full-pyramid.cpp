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
    for(int space = n-1-row;space>=0;space--){
      cout<<" ";
    }
    for(int j=0;j<row+1;j++){
      cout<<"* ";
    }
    cout<<endl;
  }
  
}