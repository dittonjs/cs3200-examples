//
//  MathyStuff.swift
//  native_code
//
//  Created by Joseph Ditton on 4/7/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation


@objc(MathyStuff)
class MathyStuff: NSObject {
  @objc(addTwoNumbers:num2:callback:)
  func addTwoNumbers(num1: Int, num2: Int, callback: RCTResponseSenderBlock) {
    let result = num1 * num2;
    callback([result])
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true;
  }
}
