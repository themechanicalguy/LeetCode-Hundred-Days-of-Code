/*
    *
   **
  ***
 ****
*****

*/

#include <iostream>
using namespace std;

int main() {
  int rows;
  int cols;
  cin>>rows>>cols;
  for(int row = 1;row <= rows;row++){
    for(int col=1;col<=cols;col++){
      if(col > cols-row){
        cout<<"*";
      }else{
        cout<<" ";
      }
    }
    cout<<endl;
  }
}