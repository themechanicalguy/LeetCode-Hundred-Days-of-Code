/**

1
12
123
1234
12345

*/

#include <iostream>
using namespace std;

int main() {
  int rows;
  int cols;
  cin>>rows>>cols;
  for(int row = 0;row < rows;row++){
    for(int col=0;col<row+1;col++){
      cout<<col+1;
    }
    cout<<endl;
  }
}

/**

1
12
123
1234
12345

*/