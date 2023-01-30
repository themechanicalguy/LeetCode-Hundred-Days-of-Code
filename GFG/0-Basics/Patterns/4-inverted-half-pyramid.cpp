/*

*****
****
***
**
*

*/

#include <iostream>
using namespace std;

int main() {
  int rows;
  int cols;
  cin>>rows>>cols;
  for(int row = 0;row < rows;row++){
    for(int col=0;col<cols-row;col++){
      cout<<"*";
    }
    cout<<endl;
  }
}