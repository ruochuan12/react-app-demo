/**
 * Created by lxchuan12 on 2017/2/24 0024.
 */
import React, { Component } from 'react';
const contentArr = [
  {
    'author':'lxchuan12',
    'work':'前端开发'
  },
  {
    'author':'轩辕Rowboat',
    'work':'搬砖工'
  }
];
class Content extends Component{
    render () {
      return (
          <div>
              <p>content</p>
              <ul>
                  <li>{contentArr}</li>
                  <li>huiuhiu</li>
              </ul>
          </div>
      )
};
export default Content;