package com.native_code;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import java.util.Map;
import java.util.HashMap;

public class MathyStuff extends ReactContextBaseJavaModule {
  MathyStuff(ReactApplicationContext context) {
    super(context);
  }

  @Override
  public String getName() {
    return  "MathyStuff";
  }

  @ReactMethod
  void addTwoNumbers(int num1, int num2, Callback callback) {
    callback.invoke(num1 * num2);
  }
}
