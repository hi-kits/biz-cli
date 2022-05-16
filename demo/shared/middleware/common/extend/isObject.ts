/**
 * 判断引用是否为对象
 * @function isObject
 * @version 0.0.1
 * @author by fico on 2018/06/01
 * @Copyright © 2019 海尔优家智能科技（北京）有限公司. All rights reserved.
 */
export function isObject(value): boolean {
    return value !== null && typeof value === 'object';
}
