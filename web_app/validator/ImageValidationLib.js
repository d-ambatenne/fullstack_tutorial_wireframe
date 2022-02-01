(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@tensorflow-models/blazeface'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@tensorflow-models/blazeface'));
  else {
    if (typeof this['@tensorflow-models/blazeface'] === 'undefined') {
      throw new Error("Error loading module 'ImageValidationLib'. Its dependency '@tensorflow-models/blazeface' was not found. Please, check whether '@tensorflow-models/blazeface' is loaded prior to 'ImageValidationLib'.");
    }root.ImageValidationLib = factory(typeof ImageValidationLib === 'undefined' ? {} : ImageValidationLib, this['@tensorflow-models/blazeface']);
  }
}(this, function (_, $module$_tensorflow_models_blazeface) {
  var load_0 = $module$_tensorflow_models_blazeface.load;
  var BlazeFaceModel_0 = $module$_tensorflow_models_blazeface.BlazeFaceModel;
  'use strict';
  CoroutineSingletons.prototype = Object.create(Enum.prototype);
  CoroutineSingletons.prototype.constructor = CoroutineSingletons;
  LazyThreadSafetyMode.prototype = Object.create(Enum.prototype);
  LazyThreadSafetyMode.prototype.constructor = LazyThreadSafetyMode;
  Error_0.prototype = Object.create(Error.prototype);
  Error_0.prototype.constructor = Error_0;
  NotImplementedError.prototype = Object.create(Error_0.prototype);
  NotImplementedError.prototype.constructor = NotImplementedError;
  IntProgressionIterator.prototype = Object.create(IntIterator.prototype);
  IntProgressionIterator.prototype.constructor = IntProgressionIterator;
  CharProgressionIterator.prototype = Object.create(CharIterator.prototype);
  CharProgressionIterator.prototype.constructor = CharProgressionIterator;
  IntRange.prototype = Object.create(IntProgression.prototype);
  IntRange.prototype.constructor = IntRange;
  CharRange.prototype = Object.create(CharProgression.prototype);
  CharRange.prototype.constructor = CharRange;
  AbstractMutableCollection.prototype = Object.create(AbstractCollection.prototype);
  AbstractMutableCollection.prototype.constructor = AbstractMutableCollection;
  AbstractMutableList.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableList.prototype.constructor = AbstractMutableList;
  AbstractMutableSet.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableSet.prototype.constructor = AbstractMutableSet;
  AbstractEntrySet.prototype = Object.create(AbstractMutableSet.prototype);
  AbstractEntrySet.prototype.constructor = AbstractEntrySet;
  _no_name_provided__11.prototype = Object.create(AbstractMutableSet.prototype);
  _no_name_provided__11.prototype.constructor = _no_name_provided__11;
  AbstractMutableMap.prototype = Object.create(AbstractMap.prototype);
  AbstractMutableMap.prototype.constructor = AbstractMutableMap;
  ArrayList.prototype = Object.create(AbstractMutableList.prototype);
  ArrayList.prototype.constructor = ArrayList;
  EntrySet.prototype = Object.create(AbstractEntrySet.prototype);
  EntrySet.prototype.constructor = EntrySet;
  HashMap.prototype = Object.create(AbstractMutableMap.prototype);
  HashMap.prototype.constructor = HashMap;
  HashSet.prototype = Object.create(AbstractMutableSet.prototype);
  HashSet.prototype.constructor = HashSet;
  ChainEntry.prototype = Object.create(SimpleEntry.prototype);
  ChainEntry.prototype.constructor = ChainEntry;
  EntrySet_0.prototype = Object.create(AbstractEntrySet.prototype);
  EntrySet_0.prototype.constructor = EntrySet_0;
  LinkedHashMap.prototype = Object.create(HashMap.prototype);
  LinkedHashMap.prototype.constructor = LinkedHashMap;
  LinkedHashSet.prototype = Object.create(HashSet.prototype);
  LinkedHashSet.prototype.constructor = LinkedHashSet;
  Exception.prototype = Object.create(Error.prototype);
  Exception.prototype.constructor = Exception;
  RuntimeException.prototype = Object.create(Exception.prototype);
  RuntimeException.prototype.constructor = RuntimeException;
  IllegalStateException.prototype = Object.create(RuntimeException.prototype);
  IllegalStateException.prototype.constructor = IllegalStateException;
  CancellationException.prototype = Object.create(IllegalStateException.prototype);
  CancellationException.prototype.constructor = CancellationException;
  PrimitiveKClassImpl.prototype = Object.create(KClassImpl.prototype);
  PrimitiveKClassImpl.prototype.constructor = PrimitiveKClassImpl;
  NothingKClassImpl.prototype = Object.create(KClassImpl.prototype);
  NothingKClassImpl.prototype.constructor = NothingKClassImpl;
  SimpleKClassImpl.prototype = Object.create(KClassImpl.prototype);
  SimpleKClassImpl.prototype.constructor = SimpleKClassImpl;
  RegexOption.prototype = Object.create(Enum.prototype);
  RegexOption.prototype.constructor = RegexOption;
  Long.prototype = Object.create(Number_0.prototype);
  Long.prototype.constructor = Long;
  _no_name_provided__1_0.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__1_0.prototype.constructor = _no_name_provided__1_0;
  IllegalArgumentException.prototype = Object.create(RuntimeException.prototype);
  IllegalArgumentException.prototype.constructor = IllegalArgumentException;
  NoSuchElementException.prototype = Object.create(RuntimeException.prototype);
  NoSuchElementException.prototype.constructor = NoSuchElementException;
  UnsupportedOperationException.prototype = Object.create(RuntimeException.prototype);
  UnsupportedOperationException.prototype.constructor = UnsupportedOperationException;
  IndexOutOfBoundsException.prototype = Object.create(RuntimeException.prototype);
  IndexOutOfBoundsException.prototype.constructor = IndexOutOfBoundsException;
  ArithmeticException.prototype = Object.create(RuntimeException.prototype);
  ArithmeticException.prototype.constructor = ArithmeticException;
  NullPointerException.prototype = Object.create(RuntimeException.prototype);
  NullPointerException.prototype.constructor = NullPointerException;
  NoWhenBranchMatchedException.prototype = Object.create(RuntimeException.prototype);
  NoWhenBranchMatchedException.prototype.constructor = NoWhenBranchMatchedException;
  ClassCastException.prototype = Object.create(RuntimeException.prototype);
  ClassCastException.prototype.constructor = ClassCastException;
  UninitializedPropertyAccessException.prototype = Object.create(RuntimeException.prototype);
  UninitializedPropertyAccessException.prototype.constructor = UninitializedPropertyAccessException;
  None.prototype = Object.create(TraceBase.prototype);
  None.prototype.constructor = None;
  AbstractCoroutine.prototype = Object.create(JobSupport.prototype);
  AbstractCoroutine.prototype.constructor = AbstractCoroutine;
  DeferredCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  DeferredCoroutine.prototype.constructor = DeferredCoroutine;
  LazyDeferredCoroutine.prototype = Object.create(DeferredCoroutine.prototype);
  LazyDeferredCoroutine.prototype.constructor = LazyDeferredCoroutine;
  DispatchedTask.prototype = Object.create(SchedulerTask.prototype);
  DispatchedTask.prototype.constructor = DispatchedTask;
  CancellableContinuationImpl.prototype = Object.create(DispatchedTask.prototype);
  CancellableContinuationImpl.prototype.constructor = CancellableContinuationImpl;
  CancelHandler.prototype = Object.create(CancelHandlerBase.prototype);
  CancelHandler.prototype.constructor = CancelHandler;
  BeforeResumeCancelHandler.prototype = Object.create(CancelHandler.prototype);
  BeforeResumeCancelHandler.prototype.constructor = BeforeResumeCancelHandler;
  CancelledContinuation.prototype = Object.create(CompletedExceptionally.prototype);
  CancelledContinuation.prototype.constructor = CancelledContinuation;
  Key_1.prototype = Object.create(AbstractCoroutineContextKey.prototype);
  Key_1.prototype.constructor = Key_1;
  CoroutineDispatcher.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineDispatcher.prototype.constructor = CoroutineDispatcher;
  CoroutineName.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineName.prototype.constructor = CoroutineName;
  CoroutineStart.prototype = Object.create(Enum.prototype);
  CoroutineStart.prototype.constructor = CoroutineStart;
  EventLoop.prototype = Object.create(CoroutineDispatcher.prototype);
  EventLoop.prototype.constructor = EventLoop;
  CompletionHandlerException.prototype = Object.create(RuntimeException.prototype);
  CompletionHandlerException.prototype.constructor = CompletionHandlerException;
  CoroutinesInternalError.prototype = Object.create(Error_0.prototype);
  CoroutinesInternalError.prototype.constructor = CoroutinesInternalError;
  LinkedListHead.prototype = Object.create(LinkedListNode.prototype);
  LinkedListHead.prototype.constructor = LinkedListHead;
  NodeList_0.prototype = Object.create(LinkedListHead.prototype);
  NodeList_0.prototype.constructor = NodeList_0;
  CompletionHandlerBase.prototype = Object.create(LinkedListNode.prototype);
  CompletionHandlerBase.prototype.constructor = CompletionHandlerBase;
  JobNode.prototype = Object.create(CompletionHandlerBase.prototype);
  JobNode.prototype.constructor = JobNode;
  ChildCompletion.prototype = Object.create(JobNode.prototype);
  ChildCompletion.prototype.constructor = ChildCompletion;
  JobCancellingNode.prototype = Object.create(JobNode.prototype);
  JobCancellingNode.prototype.constructor = JobCancellingNode;
  ChildHandleNode.prototype = Object.create(JobCancellingNode.prototype);
  ChildHandleNode.prototype.constructor = ChildHandleNode;
  InvokeOnCancelling.prototype = Object.create(JobCancellingNode.prototype);
  InvokeOnCancelling.prototype.constructor = InvokeOnCancelling;
  InvokeOnCompletion.prototype = Object.create(JobNode.prototype);
  InvokeOnCompletion.prototype.constructor = InvokeOnCompletion;
  ChildContinuation.prototype = Object.create(JobCancellingNode.prototype);
  ChildContinuation.prototype.constructor = ChildContinuation;
  MainCoroutineDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  MainCoroutineDispatcher.prototype.constructor = MainCoroutineDispatcher;
  TimeoutCancellationException.prototype = Object.create(CancellationException.prototype);
  TimeoutCancellationException.prototype.constructor = TimeoutCancellationException;
  Unconfined.prototype = Object.create(CoroutineDispatcher.prototype);
  Unconfined.prototype.constructor = Unconfined;
  DispatchedContinuation.prototype = Object.create(DispatchedTask.prototype);
  DispatchedContinuation.prototype.constructor = DispatchedContinuation;
  JsMainDispatcher.prototype = Object.create(MainCoroutineDispatcher.prototype);
  JsMainDispatcher.prototype.constructor = JsMainDispatcher;
  UnconfinedEventLoop.prototype = Object.create(EventLoop.prototype);
  UnconfinedEventLoop.prototype.constructor = UnconfinedEventLoop;
  JobCancellationException.prototype = Object.create(CancellationException.prototype);
  JobCancellationException.prototype.constructor = JobCancellationException;
  SetTimeoutBasedDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  SetTimeoutBasedDispatcher.prototype.constructor = SetTimeoutBasedDispatcher;
  NodeDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  NodeDispatcher.prototype.constructor = NodeDispatcher;
  SetTimeoutDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  SetTimeoutDispatcher.prototype.constructor = SetTimeoutDispatcher;
  MessageQueue.prototype = Object.create(ArrayQueue.prototype);
  MessageQueue.prototype.constructor = MessageQueue;
  ScheduledMessageQueue.prototype = Object.create(MessageQueue.prototype);
  ScheduledMessageQueue.prototype.constructor = ScheduledMessageQueue;
  WindowDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  WindowDispatcher.prototype.constructor = WindowDispatcher;
  WindowMessageQueue.prototype = Object.create(MessageQueue.prototype);
  WindowMessageQueue.prototype.constructor = WindowMessageQueue;
  _no_name_provided__3_0.prototype = Object.create(RequireFailureCapture.prototype);
  _no_name_provided__3_0.prototype.constructor = _no_name_provided__3_0;
  _no_name_provided__3_1.prototype = Object.create(RequireFailureCapture.prototype);
  _no_name_provided__3_1.prototype.constructor = _no_name_provided__3_1;
  _no_name_provided__3_2.prototype = Object.create(RequireFailureCapture.prototype);
  _no_name_provided__3_2.prototype.constructor = _no_name_provided__3_2;
  _no_name_provided__3_3.prototype = Object.create(RequireFailureCapture.prototype);
  _no_name_provided__3_3.prototype.constructor = _no_name_provided__3_3;
  _no_name_provided__3_4.prototype = Object.create(RequireFailureCapture.prototype);
  _no_name_provided__3_4.prototype.constructor = _no_name_provided__3_4;
  _no_name_provided__3_5.prototype = Object.create(RequireFailureCapture.prototype);
  _no_name_provided__3_5.prototype.constructor = _no_name_provided__3_5;
  InsufficientSpaceException.prototype = Object.create(Exception.prototype);
  InsufficientSpaceException.prototype.constructor = InsufficientSpaceException;
  DefaultBufferPool.prototype = Object.create(DefaultPool.prototype);
  DefaultBufferPool.prototype.constructor = DefaultBufferPool;
  _no_name_provided__3_5_0.prototype = Object.create(RequireFailureCapture.prototype);
  _no_name_provided__3_5_0.prototype.constructor = _no_name_provided__3_5_0;
  _no_name_provided__3_6.prototype = Object.create(RequireFailureCapture.prototype);
  _no_name_provided__3_6.prototype.constructor = _no_name_provided__3_6;
  _no_name_provided__3_7.prototype = Object.create(RequireFailureCapture.prototype);
  _no_name_provided__3_7.prototype.constructor = _no_name_provided__3_7;
  _no_name_provided__3_8.prototype = Object.create(RequireFailureCapture.prototype);
  _no_name_provided__3_8.prototype.constructor = _no_name_provided__3_8;
  EmptyBufferPoolImpl.prototype = Object.create(NoPoolImpl.prototype);
  EmptyBufferPoolImpl.prototype.constructor = EmptyBufferPoolImpl;
  BufferLimitExceededException.prototype = Object.create(Exception.prototype);
  BufferLimitExceededException.prototype.constructor = BufferLimitExceededException;
  BytePacketBuilderBase.prototype = Object.create(AbstractOutput.prototype);
  BytePacketBuilderBase.prototype.constructor = BytePacketBuilderBase;
  BytePacketBuilderPlatformBase.prototype = Object.create(BytePacketBuilderBase.prototype);
  BytePacketBuilderPlatformBase.prototype.constructor = BytePacketBuilderPlatformBase;
  _no_name_provided__3_9.prototype = Object.create(RequireFailureCapture.prototype);
  _no_name_provided__3_9.prototype.constructor = _no_name_provided__3_9;
  BytePacketBuilder.prototype = Object.create(BytePacketBuilderPlatformBase.prototype);
  BytePacketBuilder.prototype.constructor = BytePacketBuilder;
  ByteReadPacketBase.prototype = Object.create(AbstractInput.prototype);
  ByteReadPacketBase.prototype.constructor = ByteReadPacketBase;
  ByteReadPacketPlatformBase.prototype = Object.create(ByteReadPacketBase.prototype);
  ByteReadPacketPlatformBase.prototype.constructor = ByteReadPacketPlatformBase;
  ByteReadPacket.prototype = Object.create(ByteReadPacketPlatformBase.prototype);
  ByteReadPacket.prototype.constructor = ByteReadPacket;
  _no_name_provided__3_10.prototype = Object.create(RequireFailureCapture.prototype);
  _no_name_provided__3_10.prototype.constructor = _no_name_provided__3_10;
  _no_name_provided__46.prototype = Object.create(NoPoolImpl.prototype);
  _no_name_provided__46.prototype.constructor = _no_name_provided__46;
  _no_name_provided__47.prototype = Object.create(NoPoolImpl.prototype);
  _no_name_provided__47.prototype.constructor = _no_name_provided__47;
  _no_name_provided__3_11.prototype = Object.create(RequireFailureCapture.prototype);
  _no_name_provided__3_11.prototype.constructor = _no_name_provided__3_11;
  _no_name_provided__3_12.prototype = Object.create(RequireFailureCapture.prototype);
  _no_name_provided__3_12.prototype.constructor = _no_name_provided__3_12;
  ChunkBuffer.prototype = Object.create(Buffer.prototype);
  ChunkBuffer.prototype.constructor = ChunkBuffer;
  _no_name_provided__48.prototype = Object.create(DefaultPool.prototype);
  _no_name_provided__48.prototype.constructor = _no_name_provided__48;
  CharsetImpl.prototype = Object.create(Charset.prototype);
  CharsetImpl.prototype.constructor = CharsetImpl;
  CharsetEncoderImpl.prototype = Object.create(CharsetEncoder.prototype);
  CharsetEncoderImpl.prototype.constructor = CharsetEncoderImpl;
  MalformedInputException.prototype = Object.create(Error.prototype);
  MalformedInputException.prototype.constructor = MalformedInputException;
  ByteOrder.prototype = Object.create(Enum.prototype);
  ByteOrder.prototype.constructor = ByteOrder;
  _no_name_provided__2_0.prototype = Object.create(RequireFailureCapture.prototype);
  _no_name_provided__2_0.prototype.constructor = _no_name_provided__2_0;
  _no_name_provided__2_1.prototype = Object.create(RequireFailureCapture.prototype);
  _no_name_provided__2_1.prototype.constructor = _no_name_provided__2_1;
  _no_name_provided__50.prototype = Object.create(DefaultPool.prototype);
  _no_name_provided__50.prototype.constructor = _no_name_provided__50;
  _no_name_provided__51.prototype = Object.create(NoPoolImpl.prototype);
  _no_name_provided__51.prototype.constructor = _no_name_provided__51;
  IoBuffer.prototype = Object.create(ChunkBuffer.prototype);
  IoBuffer.prototype.constructor = IoBuffer;
  IOException.prototype = Object.create(Exception.prototype);
  IOException.prototype.constructor = IOException;
  EOFException.prototype = Object.create(IOException.prototype);
  EOFException.prototype.constructor = EOFException;
  ContentType.prototype = Object.create(HeaderValueWithParameters.prototype);
  ContentType.prototype.constructor = ContentType;
  BadContentTypeFormatException.prototype = Object.create(Exception.prototype);
  BadContentTypeFormatException.prototype.constructor = BadContentTypeFormatException;
  SequenceGrammar.prototype = Object.create(Grammar.prototype);
  SequenceGrammar.prototype.constructor = SequenceGrammar;
  StringGrammar.prototype = Object.create(Grammar.prototype);
  StringGrammar.prototype.constructor = StringGrammar;
  AtLeastOne.prototype = Object.create(Grammar.prototype);
  AtLeastOne.prototype.constructor = AtLeastOne;
  OrGrammar.prototype = Object.create(Grammar.prototype);
  OrGrammar.prototype.constructor = OrGrammar;
  RawGrammar.prototype = Object.create(Grammar.prototype);
  RawGrammar.prototype.constructor = RawGrammar;
  NamedGrammar.prototype = Object.create(Grammar.prototype);
  NamedGrammar.prototype.constructor = NamedGrammar;
  MaybeGrammar.prototype = Object.create(Grammar.prototype);
  MaybeGrammar.prototype.constructor = MaybeGrammar;
  ManyGrammar.prototype = Object.create(Grammar.prototype);
  ManyGrammar.prototype.constructor = ManyGrammar;
  AnyOfGrammar.prototype = Object.create(Grammar.prototype);
  AnyOfGrammar.prototype.constructor = AnyOfGrammar;
  RangeGrammar.prototype = Object.create(Grammar.prototype);
  RangeGrammar.prototype.constructor = RangeGrammar;
  _no_name_provided__63.prototype = Object.create(DefaultPool.prototype);
  _no_name_provided__63.prototype.constructor = _no_name_provided__63;
  _no_name_provided__64.prototype = Object.create(DefaultPool.prototype);
  _no_name_provided__64.prototype.constructor = _no_name_provided__64;
  _no_name_provided__67.prototype = Object.create(DefaultPool.prototype);
  _no_name_provided__67.prototype.constructor = _no_name_provided__67;
  _no_name_provided__70.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__70.prototype.constructor = _no_name_provided__70;
  function indexOf(_this_, element) {
    if (element == null) {
      var inductionVariable = 0;
      var last_0 = _this_.length - 1 | 0;
      if (inductionVariable <= last_0)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (_this_[index] == null) {
            return index;
          }}
         while (inductionVariable <= last_0);
    } else {
      var inductionVariable_0 = 0;
      var last_1 = _this_.length - 1 | 0;
      if (inductionVariable_0 <= last_1)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (equals_1(element, _this_[index_0])) {
            return index_0;
          }}
         while (inductionVariable_0 <= last_1);
    }
    return -1;
  }
  function toSet(_this_) {
    var tmp0_subject = _this_.length;
    switch (tmp0_subject) {
      case 0:
        return emptySet();
      case 1:
        return setOf_0(_this_[0]);
      default:return toCollection(_this_, LinkedHashSet_init_$Create$_0(mapCapacity(_this_.length)));
    }
  }
  function single(_this_) {
    var tmp0_subject = _this_.length;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        throw NoSuchElementException_init_$Create$_0('Array is empty.');
      case 1:
        tmp = _this_[0];
        break;
      default:throw IllegalArgumentException_init_$Create$('Array has more than one element.');
    }
    return tmp;
  }
  function toCollection(_this_, destination) {
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      destination.add_2bq_k$(item);
      Unit_getInstance();
    }
    return destination;
  }
  function joinToString(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo(_this_, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString(_this_, separator, prefix, postfix, limit, truncated, transform);
  }
  function contains(_this_, element) {
    return indexOf(_this_, element) >= 0;
  }
  function joinTo(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_v1o70a_k$(prefix);
    Unit_getInstance();
    var count = 0;
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    $l$break: while (inductionVariable < last_0) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_v1o70a_k$(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_v1o70a_k$(truncated);
      Unit_getInstance();
    }buffer.append_v1o70a_k$(postfix);
    Unit_getInstance();
    return buffer;
  }
  function plus(_this_, elements) {
    if (isInterface(elements, Collection)) {
      var result = ArrayList_init_$Create$_0(_this_._get_size__0_k$() + elements._get_size__0_k$() | 0);
      result.addAll_dxd4eo_k$(_this_);
      Unit_getInstance();
      result.addAll_dxd4eo_k$(elements);
      Unit_getInstance();
      return result;
    } else {
      {
        var result_0 = ArrayList_init_$Create$_1(_this_);
        addAll(result_0, elements);
        Unit_getInstance();
        return result_0;
      }
    }
  }
  function plus_0(_this_, elements) {
    if (isInterface(_this_, Collection))
      return plus(_this_, elements);
    else {
    }
    var result = ArrayList_init_$Create$();
    addAll(result, _this_);
    Unit_getInstance();
    addAll(result, elements);
    Unit_getInstance();
    return result;
  }
  function toSet_0(_this_) {
    if (isInterface(_this_, Collection)) {
      var tmp0_subject = _this_._get_size__0_k$();
      var tmp;
      switch (tmp0_subject) {
        case 0:
          tmp = emptySet();
          break;
        case 1:
          var tmp_0;
          if (isInterface(_this_, List)) {
            tmp_0 = _this_.get_ha5a7z_k$(0);
          } else {
            {
              tmp_0 = _this_.iterator_0_k$().next_0_k$();
            }
          }

          tmp = setOf_0(tmp_0);
          break;
        default:tmp = toCollection_0(_this_, LinkedHashSet_init_$Create$_0(mapCapacity(_this_._get_size__0_k$())));
          break;
      }
      return tmp;
    } else {
    }
    return optimizeReadOnlySet(toCollection_0(_this_, LinkedHashSet_init_$Create$()));
  }
  function asSequence(_this_) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new _no_name_provided__1(_this_);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function joinToString_0(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo_0(_this_, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default_0(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString_0(_this_, separator, prefix, postfix, limit, truncated, transform);
  }
  function single_0(_this_) {
    var tmp0_subject = _this_._get_size__0_k$();
    var tmp;
    switch (tmp0_subject) {
      case 0:
        throw NoSuchElementException_init_$Create$_0('List is empty.');
      case 1:
        tmp = _this_.get_ha5a7z_k$(0);
        break;
      default:throw IllegalArgumentException_init_$Create$('List has more than one element.');
    }
    return tmp;
  }
  function toLongArray(_this_) {
    var result = longArray(_this_._get_size__0_k$());
    var index = 0;
    var tmp0_iterator = _this_.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var element = tmp0_iterator.next_0_k$();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      result[tmp1] = element;
    }
    return result;
  }
  function toByteArray(_this_) {
    var result = new Int8Array(_this_._get_size__0_k$());
    var index = 0;
    var tmp0_iterator = _this_.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var element = tmp0_iterator.next_0_k$();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      result[tmp1] = element;
    }
    return result;
  }
  function toCollection_0(_this_, destination) {
    var tmp0_iterator = _this_.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var item = tmp0_iterator.next_0_k$();
      destination.add_2bq_k$(item);
      Unit_getInstance();
    }
    return destination;
  }
  function joinTo_0(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_v1o70a_k$(prefix);
    Unit_getInstance();
    var count = 0;
    var tmp0_iterator = _this_.iterator_0_k$();
    $l$break: while (tmp0_iterator.hasNext_0_k$()) {
      var element = tmp0_iterator.next_0_k$();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_v1o70a_k$(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_v1o70a_k$(truncated);
      Unit_getInstance();
    }buffer.append_v1o70a_k$(postfix);
    Unit_getInstance();
    return buffer;
  }
  function single_1(_this_) {
    var tmp0_subject = _this_;
    if (isInterface(tmp0_subject, List))
      return single_0(_this_);
    else {
      {
        var iterator = _this_.iterator_0_k$();
        if (!iterator.hasNext_0_k$())
          throw NoSuchElementException_init_$Create$_0('Collection is empty.');
        var single_2 = iterator.next_0_k$();
        if (iterator.hasNext_0_k$())
          throw IllegalArgumentException_init_$Create$('Collection has more than one element.');
        return single_2;
      }
    }
  }
  function _no_name_provided__1($this_asSequence) {
    this._$this_asSequence = $this_asSequence;
  }
  _no_name_provided__1.prototype.iterator_2_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = this._$this_asSequence.iterator_0_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  _no_name_provided__1.prototype.iterator_0_k$ = function () {
    return this.iterator_2_0_k$();
  };
  _no_name_provided__1.$metadata$ = {
    simpleName: '<no name provided>_1',
    kind: 'class',
    interfaces: [Sequence]
  };
  function until(_this_, to_1) {
    if (to_1 <= IntCompanionObject_getInstance()._MIN_VALUE_0)
      return Companion_getInstance_6()._EMPTY;
    return numberRangeToNumber(_this_, to_1 - 1 | 0);
  }
  function coerceAtMost(_this_, maximumValue) {
    return _this_ > maximumValue ? maximumValue : _this_;
  }
  function coerceAtLeast(_this_, minimumValue) {
    return _this_ < minimumValue ? minimumValue : _this_;
  }
  function coerceIn(_this_, minimumValue, maximumValue) {
    if (minimumValue > maximumValue)
      throw IllegalArgumentException_init_$Create$('' + 'Cannot coerce value to an empty range: maximum ' + maximumValue + ' is less than minimum ' + minimumValue + '.');
    if (_this_ < minimumValue)
      return minimumValue;
    if (_this_ > maximumValue)
      return maximumValue;
    return _this_;
  }
  function downTo(_this_, to_1) {
    return Companion_getInstance_4().fromClosedRange_fcwjfj_k$(_this_, to_1, -1);
  }
  function map(_this_, transform) {
    return new TransformingSequence(_this_, transform);
  }
  function toList(_this_) {
    return optimizeReadOnlyList(toMutableList(_this_));
  }
  function mapNotNull(_this_, transform) {
    return filterNotNull(new TransformingSequence(_this_, transform));
  }
  function toMutableList(_this_) {
    return toCollection_1(_this_, ArrayList_init_$Create$());
  }
  function filterNotNull(_this_) {
    var tmp = filterNot(_this_, _no_name_provided_$factory());
    return isInterface(tmp, Sequence) ? tmp : THROW_CCE();
  }
  function toCollection_1(_this_, destination) {
    var tmp0_iterator = _this_.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var item = tmp0_iterator.next_0_k$();
      destination.add_2bq_k$(item);
      Unit_getInstance();
    }
    return destination;
  }
  function filterNot(_this_, predicate) {
    return new FilteringSequence(_this_, false, predicate);
  }
  function _no_name_provided_() {
  }
  _no_name_provided_.prototype.invoke_20i2_k$ = function (it) {
    return it == null;
  };
  _no_name_provided_.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_20i2_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided_.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory() {
    var i = new _no_name_provided_();
    return function (p1) {
      return i.invoke_20i2_k$(p1);
    };
  }
  function plus_1(_this_, elements) {
    var tmp0_safe_receiver = collectionSizeOrNull(elements);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _this_._get_size__0_k$() + tmp0_safe_receiver | 0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var result = LinkedHashSet_init_$Create$_0(mapCapacity(tmp1_elvis_lhs == null ? imul(_this_._get_size__0_k$(), 2) : tmp1_elvis_lhs));
    result.addAll_dxd4eo_k$(_this_);
    Unit_getInstance();
    addAll(result, elements);
    Unit_getInstance();
    return result;
  }
  function first(_this_) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = charSequenceLength(_this_) === 0;
      break $l$block;
    }
    if (tmp$ret$0)
      throw NoSuchElementException_init_$Create$_0('Char sequence is empty.');
    else {
    }
    return charSequenceGet(_this_, 0);
  }
  function last(_this_) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = charSequenceLength(_this_) === 0;
      break $l$block;
    }
    if (tmp$ret$0)
      throw NoSuchElementException_init_$Create$_0('Char sequence is empty.');
    else {
    }
    return charSequenceGet(_this_, _get_lastIndex__0(_this_));
  }
  function _no_name_provided__0(this$0) {
    this._this$0 = this$0;
  }
  _no_name_provided__0.prototype.invoke_2bq_k$ = function (it) {
    return it === this._this$0 ? '(this Collection)' : toString_0(it);
  };
  _no_name_provided__0.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_2bq_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__0.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractCollection() {
  }
  AbstractCollection.prototype.contains_2bq_k$ = function (element) {
    var tmp$ret$0;
    $l$block_2: {
      var tmp;
      if (isInterface(this, Collection)) {
        tmp = this.isEmpty_0_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = this.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = equals_1(element_2, element);
          break $l$block_0;
        }
        if (tmp$ret$1) {
          tmp$ret$0 = true;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = false;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  AbstractCollection.prototype.containsAll_dxd4eo_k$ = function (elements) {
    var tmp$ret$0;
    $l$block_2: {
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.isEmpty_0_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = this.contains_2bq_k$(element_2);
          break $l$block_0;
        }
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = true;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  AbstractCollection.prototype.isEmpty_0_k$ = function () {
    return this._get_size__0_k$() === 0;
  };
  AbstractCollection.prototype.toString = function () {
    return joinToString$default_0(this, ', ', '[', ']', 0, null, _no_name_provided_$factory_0(this), 24, null);
  };
  AbstractCollection.prototype.toArray = function () {
    return copyToArrayImpl_0(this);
  };
  AbstractCollection.$metadata$ = {
    simpleName: 'AbstractCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function _no_name_provided_$factory_0(this$0) {
    var i = new _no_name_provided__0(this$0);
    return function (p1) {
      return i.invoke_2bq_k$(p1);
    };
  }
  function Companion_0() {
    Companion_instance = this;
  }
  Companion_0.prototype.checkElementIndex_rvwcgf_k$ = function (index, size_0) {
    if (index < 0 ? true : index >= size_0) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', size: ' + size_0);
    }};
  Companion_0.prototype.checkPositionIndex_rvwcgf_k$ = function (index, size_0) {
    if (index < 0 ? true : index > size_0) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', size: ' + size_0);
    }};
  Companion_0.prototype.checkRangeIndexes_zd700_k$ = function (fromIndex, toIndex, size_0) {
    if (fromIndex < 0 ? true : toIndex > size_0) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'fromIndex: ' + fromIndex + ', toIndex: ' + toIndex + ', size: ' + size_0);
    }if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_$Create$('' + 'fromIndex: ' + fromIndex + ' > toIndex: ' + toIndex);
    }};
  Companion_0.prototype.checkBoundsIndexes_zd700_k$ = function (startIndex, endIndex, size_0) {
    if (startIndex < 0 ? true : endIndex > size_0) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'startIndex: ' + startIndex + ', endIndex: ' + endIndex + ', size: ' + size_0);
    }if (startIndex > endIndex) {
      throw IllegalArgumentException_init_$Create$('' + 'startIndex: ' + startIndex + ' > endIndex: ' + endIndex);
    }};
  Companion_0.prototype.orderedHashCode_dxd51x_k$ = function (c) {
    var hashCode_1 = 1;
    var tmp0_iterator = c.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var e = tmp0_iterator.next_0_k$();
      var tmp = imul(31, hashCode_1);
      var tmp1_safe_receiver = e;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_1 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_1;
  };
  Companion_0.prototype.orderedEquals_tuq55s_k$ = function (c, other) {
    if (!(c._get_size__0_k$() === other._get_size__0_k$()))
      return false;
    var otherIterator = other.iterator_0_k$();
    var tmp0_iterator = c.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var elem = tmp0_iterator.next_0_k$();
      var elemOther = otherIterator.next_0_k$();
      if (!equals_1(elem, elemOther)) {
        return false;
      }}
    return true;
  };
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion_0();
    return Companion_instance;
  }
  function toString($this, o) {
    return o === $this ? '(this Map)' : toString_0(o);
  }
  function implFindEntry($this, key) {
    var tmp$ret$1;
    $l$block_1: {
      var tmp0_firstOrNull_0 = $this._get_entries__0_k$();
      var tmp0_iterator_1 = tmp0_firstOrNull_0.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = equals_1(element_2._get_key__0_k$(), key);
          break $l$block;
        }
        if (tmp$ret$0) {
          tmp$ret$1 = element_2;
          break $l$block_1;
        } else {
        }
      }
      tmp$ret$1 = null;
      break $l$block_1;
    }
    return tmp$ret$1;
  }
  function Companion_1() {
    Companion_instance_0 = this;
  }
  Companion_1.prototype.entryHashCode_4vm2wp_k$ = function (e) {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp2_safe_receiver_4 = e._get_key__0_k$();
        var tmp3_elvis_lhs_3 = tmp2_safe_receiver_4 == null ? null : hashCode(tmp2_safe_receiver_4);
        var tmp = tmp3_elvis_lhs_3 == null ? 0 : tmp3_elvis_lhs_3;
        var tmp0_safe_receiver_6 = e._get_value__0_k$();
        var tmp1_elvis_lhs_5 = tmp0_safe_receiver_6 == null ? null : hashCode(tmp0_safe_receiver_6);
        tmp$ret$0 = tmp ^ (tmp1_elvis_lhs_5 == null ? 0 : tmp1_elvis_lhs_5);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  Companion_1.prototype.entryToString_4vm2wp_k$ = function (e) {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = '' + e._get_key__0_k$() + '=' + e._get_value__0_k$();
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  Companion_1.prototype.entryEquals_caydzc_k$ = function (e, other) {
    if (!(!(other == null) ? isInterface(other, Entry) : false))
      return false;
    else {
    }
    return equals_1(e._get_key__0_k$(), other._get_key__0_k$()) ? equals_1(e._get_value__0_k$(), other._get_value__0_k$()) : false;
  };
  Companion_1.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_1();
    return Companion_instance_0;
  }
  function _no_name_provided__2(this$0) {
    this._this$0_0 = this$0;
  }
  _no_name_provided__2.prototype.invoke_4v0zae_k$ = function (it) {
    return this._this$0_0.toString_4v0zae_k$(it);
  };
  _no_name_provided__2.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_4v0zae_k$((!(p1 == null) ? isInterface(p1, Entry) : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__2.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMap() {
    Companion_getInstance_0();
    this.__keys = null;
    this.__values = null;
  }
  AbstractMap.prototype.containsKey_2bw_k$ = function (key) {
    return !(implFindEntry(this, key) == null);
  };
  AbstractMap.prototype.containsEntry_7gsh9e_k$ = function (entry) {
    if (!(!(entry == null) ? isInterface(entry, Entry) : false))
      return false;
    else {
    }
    var key = entry._get_key__0_k$();
    var value = entry._get_value__0_k$();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = (isInterface(this, Map_0) ? this : THROW_CCE()).get_2bw_k$(key);
      break $l$block;
    }
    var ourValue = tmp$ret$0;
    if (!equals_1(value, ourValue)) {
      return false;
    }var tmp;
    if (ourValue == null) {
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = (isInterface(this, Map_0) ? this : THROW_CCE()).containsKey_2bw_k$(key);
        break $l$block_0;
      }
      tmp = !tmp$ret$1;
    } else {
      tmp = false;
    }
    if (tmp) {
      return false;
    } else {
    }
    return true;
  };
  AbstractMap.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Map_0) : false))
      return false;
    else {
    }
    if (!(this._get_size__0_k$() === other._get_size__0_k$()))
      return false;
    var tmp$ret$0;
    $l$block_2: {
      var tmp0_all_0 = other._get_entries__0_k$();
      var tmp;
      if (isInterface(tmp0_all_0, Collection)) {
        tmp = tmp0_all_0.isEmpty_0_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = tmp0_all_0.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = this.containsEntry_7gsh9e_k$(element_2);
          break $l$block_0;
        }
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = true;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  AbstractMap.prototype.get_2bw_k$ = function (key) {
    var tmp0_safe_receiver = implFindEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__0_k$();
  };
  AbstractMap.prototype.hashCode = function () {
    return hashCode(this._get_entries__0_k$());
  };
  AbstractMap.prototype.isEmpty_0_k$ = function () {
    return this._get_size__0_k$() === 0;
  };
  AbstractMap.prototype._get_size__0_k$ = function () {
    return this._get_entries__0_k$()._get_size__0_k$();
  };
  AbstractMap.prototype.toString = function () {
    var tmp = this._get_entries__0_k$();
    return joinToString$default_0(tmp, ', ', '{', '}', 0, null, _no_name_provided_$factory_1(this), 24, null);
  };
  AbstractMap.prototype.toString_4v0zae_k$ = function (entry) {
    return toString(this, entry._get_key__0_k$()) + '=' + toString(this, entry._get_value__0_k$());
  };
  AbstractMap.$metadata$ = {
    simpleName: 'AbstractMap',
    kind: 'class',
    interfaces: [Map_0]
  };
  function _no_name_provided_$factory_1(this$0) {
    var i = new _no_name_provided__2(this$0);
    return function (p1) {
      return i.invoke_4v0zae_k$(p1);
    };
  }
  function Companion_2() {
    Companion_instance_1 = this;
  }
  Companion_2.prototype.unorderedHashCode_dxd51x_k$ = function (c) {
    var hashCode_1 = 0;
    var tmp0_iterator = c.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var element = tmp0_iterator.next_0_k$();
      var tmp = hashCode_1;
      var tmp1_safe_receiver = element;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_1 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_1;
  };
  Companion_2.prototype.setEquals_qlktm2_k$ = function (c, other) {
    if (!(c._get_size__0_k$() === other._get_size__0_k$()))
      return false;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = c.containsAll_dxd4eo_k$(other);
      break $l$block;
    }
    return tmp$ret$0;
  };
  Companion_2.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_2();
    return Companion_instance_1;
  }
  function listOf(elements) {
    return elements.length > 0 ? asList(elements) : emptyList();
  }
  function emptyList() {
    return EmptyList_getInstance();
  }
  function optimizeReadOnlyList(_this_) {
    var tmp0_subject = _this_._get_size__0_k$();
    switch (tmp0_subject) {
      case 0:
        return emptyList();
      case 1:
        return listOf_0(_this_.get_ha5a7z_k$(0));
      default:return _this_;
    }
  }
  function _get_lastIndex_(_this_) {
    return _this_._get_size__0_k$() - 1 | 0;
  }
  function EmptyIterator() {
    EmptyIterator_instance = this;
  }
  EmptyIterator.prototype.hasNext_0_k$ = function () {
    return false;
  };
  EmptyIterator.prototype.next_0_k$ = function () {
    throw NoSuchElementException_init_$Create$();
  };
  EmptyIterator.$metadata$ = {
    simpleName: 'EmptyIterator',
    kind: 'object',
    interfaces: [ListIterator]
  };
  var EmptyIterator_instance;
  function EmptyIterator_getInstance() {
    if (EmptyIterator_instance == null)
      new EmptyIterator();
    return EmptyIterator_instance;
  }
  function EmptyList() {
    EmptyList_instance = this;
    this._serialVersionUID = new Long(-1478467534, -1720727600);
  }
  EmptyList.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, List) : false) {
      tmp = other.isEmpty_0_k$();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  EmptyList.prototype.hashCode = function () {
    return 1;
  };
  EmptyList.prototype.toString = function () {
    return '[]';
  };
  EmptyList.prototype._get_size__0_k$ = function () {
    return 0;
  };
  EmptyList.prototype.isEmpty_0_k$ = function () {
    return true;
  };
  EmptyList.prototype.containsAll_lwol4p_k$ = function (elements) {
    return elements.isEmpty_0_k$();
  };
  EmptyList.prototype.containsAll_dxd4eo_k$ = function (elements) {
    return this.containsAll_lwol4p_k$(elements);
  };
  EmptyList.prototype.get_ha5a7z_k$ = function (index) {
    throw IndexOutOfBoundsException_init_$Create$('' + "Empty list doesn't contain element at index " + index + '.');
  };
  EmptyList.prototype.iterator_0_k$ = function () {
    return EmptyIterator_getInstance();
  };
  EmptyList.$metadata$ = {
    simpleName: 'EmptyList',
    kind: 'object',
    interfaces: [List, Serializable, RandomAccess]
  };
  var EmptyList_instance;
  function EmptyList_getInstance() {
    if (EmptyList_instance == null)
      new EmptyList();
    return EmptyList_instance;
  }
  function throwIndexOverflow() {
    throw ArithmeticException_init_$Create$('Index overflow has happened.');
  }
  function arrayListOf(elements) {
    return elements.length === 0 ? ArrayList_init_$Create$() : ArrayList_init_$Create$_1(new ArrayAsCollection(elements, true));
  }
  function ArrayAsCollection(values, isVarargs) {
    this._values = values;
    this._isVarargs = isVarargs;
  }
  ArrayAsCollection.prototype._get_size__0_k$ = function () {
    return this._values.length;
  };
  ArrayAsCollection.prototype.isEmpty_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_isEmpty_0 = this._values;
      tmp$ret$0 = tmp0_isEmpty_0.length === 0;
      break $l$block;
    }
    return tmp$ret$0;
  };
  ArrayAsCollection.prototype.contains_2c5_k$ = function (element) {
    return contains(this._values, element);
  };
  ArrayAsCollection.prototype.containsAll_dxd41r_k$ = function (elements) {
    var tmp$ret$0;
    $l$block_2: {
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.isEmpty_0_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = this.contains_2c5_k$(element_2);
          break $l$block_0;
        }
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = true;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  ArrayAsCollection.prototype.containsAll_dxd4eo_k$ = function (elements) {
    return this.containsAll_dxd41r_k$(elements);
  };
  ArrayAsCollection.prototype.iterator_0_k$ = function () {
    return arrayIterator(this._values);
  };
  ArrayAsCollection.$metadata$ = {
    simpleName: 'ArrayAsCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function collectionSizeOrDefault(_this_, default_0) {
    var tmp;
    if (isInterface(_this_, Collection)) {
      tmp = _this_._get_size__0_k$();
    } else {
      {
        tmp = default_0;
      }
    }
    return tmp;
  }
  function collectionSizeOrNull(_this_) {
    var tmp;
    if (isInterface(_this_, Collection)) {
      tmp = _this_._get_size__0_k$();
    } else {
      {
        tmp = null;
      }
    }
    return tmp;
  }
  function addAll(_this_, elements) {
    var tmp0_subject = elements;
    if (isInterface(tmp0_subject, Collection))
      return _this_.addAll_dxd4eo_k$(elements);
    else {
      {
        var result = false;
        var tmp1_iterator = elements.iterator_0_k$();
        while (tmp1_iterator.hasNext_0_k$()) {
          var item = tmp1_iterator.next_0_k$();
          if (_this_.add_2bq_k$(item))
            result = true;
        }
        return result;
      }
    }
  }
  function Sequence() {
  }
  Sequence.$metadata$ = {
    simpleName: 'Sequence',
    kind: 'interface',
    interfaces: []
  };
  function _no_name_provided__3(this$0) {
    this._this$0_1 = this$0;
    this._iterator = this._this$0_1._sequence.iterator_0_k$();
  }
  _no_name_provided__3.prototype.next_0_k$ = function () {
    return this._this$0_1._transformer(this._iterator.next_0_k$());
  };
  _no_name_provided__3.prototype.hasNext_0_k$ = function () {
    return this._iterator.hasNext_0_k$();
  };
  _no_name_provided__3.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function TransformingSequence(sequence, transformer) {
    this._sequence = sequence;
    this._transformer = transformer;
  }
  TransformingSequence.prototype.iterator_0_k$ = function () {
    return new _no_name_provided__3(this);
  };
  TransformingSequence.$metadata$ = {
    simpleName: 'TransformingSequence',
    kind: 'class',
    interfaces: [Sequence]
  };
  function calcNext($this) {
    while ($this._iterator_0.hasNext_0_k$()) {
      var item = $this._iterator_0.next_0_k$();
      if ($this._this$0_2._predicate(item) === $this._this$0_2._sendWhen) {
        $this._nextItem = item;
        $this._nextState = 1;
        return Unit_getInstance();
      }}
    $this._nextState = 0;
  }
  function _no_name_provided__4(this$0) {
    this._this$0_2 = this$0;
    this._iterator_0 = this._this$0_2._sequence_0.iterator_0_k$();
    this._nextState = -1;
    this._nextItem = null;
  }
  _no_name_provided__4.prototype.next_0_k$ = function () {
    if (this._nextState === -1)
      calcNext(this);
    if (this._nextState === 0)
      throw NoSuchElementException_init_$Create$();
    var result = this._nextItem;
    this._nextItem = null;
    this._nextState = -1;
    return (result == null ? true : isObject(result)) ? result : THROW_CCE();
  };
  _no_name_provided__4.prototype.hasNext_0_k$ = function () {
    if (this._nextState === -1)
      calcNext(this);
    return this._nextState === 1;
  };
  _no_name_provided__4.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function FilteringSequence(sequence, sendWhen, predicate) {
    this._sequence_0 = sequence;
    this._sendWhen = sendWhen;
    this._predicate = predicate;
  }
  FilteringSequence.prototype.iterator_0_k$ = function () {
    return new _no_name_provided__4(this);
  };
  FilteringSequence.$metadata$ = {
    simpleName: 'FilteringSequence',
    kind: 'class',
    interfaces: [Sequence]
  };
  function setOf(elements) {
    return elements.length > 0 ? toSet(elements) : emptySet();
  }
  function emptySet() {
    return EmptySet_getInstance();
  }
  function optimizeReadOnlySet(_this_) {
    var tmp0_subject = _this_._get_size__0_k$();
    switch (tmp0_subject) {
      case 0:
        return emptySet();
      case 1:
        return setOf_0(_this_.iterator_0_k$().next_0_k$());
      default:return _this_;
    }
  }
  function EmptySet() {
    EmptySet_instance = this;
    this._serialVersionUID_0 = new Long(1993859828, 793161749);
  }
  EmptySet.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Set) : false) {
      tmp = other.isEmpty_0_k$();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  EmptySet.prototype.hashCode = function () {
    return 0;
  };
  EmptySet.prototype.toString = function () {
    return '[]';
  };
  EmptySet.prototype._get_size__0_k$ = function () {
    return 0;
  };
  EmptySet.prototype.isEmpty_0_k$ = function () {
    return true;
  };
  EmptySet.prototype.contains_5jd3j5_k$ = function (element) {
    return false;
  };
  EmptySet.prototype.contains_2bq_k$ = function (element) {
    if (!false)
      return false;
    else {
    }
    var tmp;
    if (false) {
      tmp = element;
    } else {
      {
        tmp = THROW_CCE();
      }
    }
    return this.contains_5jd3j5_k$(tmp);
  };
  EmptySet.prototype.containsAll_lwol4p_k$ = function (elements) {
    return elements.isEmpty_0_k$();
  };
  EmptySet.prototype.containsAll_dxd4eo_k$ = function (elements) {
    return this.containsAll_lwol4p_k$(elements);
  };
  EmptySet.prototype.iterator_0_k$ = function () {
    return EmptyIterator_getInstance();
  };
  EmptySet.$metadata$ = {
    simpleName: 'EmptySet',
    kind: 'object',
    interfaces: [Set, Serializable]
  };
  var EmptySet_instance;
  function EmptySet_getInstance() {
    if (EmptySet_instance == null)
      new EmptySet();
    return EmptySet_instance;
  }
  function hashSetOf(elements) {
    return toCollection(elements, HashSet_init_$Create$(mapCapacity(elements.length)));
  }
  function Continuation() {
  }
  Continuation.$metadata$ = {
    simpleName: 'Continuation',
    kind: 'interface',
    interfaces: []
  };
  function startCoroutine(_this_, receiver, completion) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_resume_0 = intercepted(createCoroutineUnintercepted(_this_, receiver, completion));
      var tmp$ret$0;
      $l$block: {
        var tmp0_success_0_1 = Companion_getInstance_2();
        tmp$ret$0 = _Result___init__impl_(Unit_getInstance());
        break $l$block;
      }
      tmp$ret$1 = tmp0_resume_0.resumeWith_bnunh2_k$(tmp$ret$0);
      break $l$block_0;
    }
  }
  function Key() {
    Key_instance = this;
  }
  Key.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance;
  function Key_getInstance() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function ContinuationInterceptor() {
  }
  ContinuationInterceptor.prototype.releaseInterceptedContinuation_h7c6yl_k$ = function (continuation) {
  };
  ContinuationInterceptor.prototype.get_9uvjra_k$ = function (key) {
    if (key instanceof AbstractCoroutineContextKey) {
      var tmp;
      if (key.isSubKey_djuxjq_k$(this._get_key__0_k$())) {
        var tmp_0 = key.tryCast_k332zt_k$(this);
        tmp = (!(tmp_0 == null) ? isInterface(tmp_0, Element_0) : false) ? tmp_0 : null;
      } else {
        tmp = null;
      }
      return tmp;
    } else {
    }
    var tmp_1;
    if (Key_getInstance() === key) {
      tmp_1 = isInterface(this, Element_0) ? this : THROW_CCE();
    } else {
      tmp_1 = null;
    }
    return tmp_1;
  };
  ContinuationInterceptor.prototype.minusKey_djuxjq_k$ = function (key) {
    if (key instanceof AbstractCoroutineContextKey) {
      return (key.isSubKey_djuxjq_k$(this._get_key__0_k$()) ? !(key.tryCast_k332zt_k$(this) == null) : false) ? EmptyCoroutineContext_getInstance() : this;
    } else {
    }
    return Key_getInstance() === key ? EmptyCoroutineContext_getInstance() : this;
  };
  ContinuationInterceptor.$metadata$ = {
    simpleName: 'ContinuationInterceptor',
    kind: 'interface',
    interfaces: [Element_0]
  };
  function Key_0() {
  }
  Key_0.$metadata$ = {
    simpleName: 'Key',
    kind: 'interface',
    interfaces: []
  };
  function Element_0() {
  }
  Element_0.prototype.get_9uvjra_k$ = function (key) {
    var tmp;
    if (equals_1(this._get_key__0_k$(), key)) {
      tmp = isInterface(this, Element_0) ? this : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  Element_0.prototype.fold_cq605b_k$ = function (initial, operation) {
    return operation(initial, this);
  };
  Element_0.prototype.minusKey_djuxjq_k$ = function (key) {
    return equals_1(this._get_key__0_k$(), key) ? EmptyCoroutineContext_getInstance() : this;
  };
  Element_0.$metadata$ = {
    simpleName: 'Element',
    kind: 'interface',
    interfaces: [CoroutineContext]
  };
  function _no_name_provided__5() {
  }
  _no_name_provided__5.prototype.invoke_2v6pkd_k$ = function (acc, element) {
    var removed = acc.minusKey_djuxjq_k$(element._get_key__0_k$());
    var tmp;
    if (removed === EmptyCoroutineContext_getInstance()) {
      tmp = element;
    } else {
      var interceptor = removed.get_9uvjra_k$(Key_getInstance());
      var tmp_0;
      if (interceptor == null) {
        tmp_0 = new CombinedContext(removed, element);
      } else {
        var left = removed.minusKey_djuxjq_k$(Key_getInstance());
        tmp_0 = left === EmptyCoroutineContext_getInstance() ? new CombinedContext(element, interceptor) : new CombinedContext(new CombinedContext(left, element), interceptor);
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  _no_name_provided__5.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineContext) : false) ? p1 : THROW_CCE();
    return this.invoke_2v6pkd_k$(tmp, (!(p2 == null) ? isInterface(p2, Element_0) : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__5.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function CoroutineContext() {
  }
  CoroutineContext.prototype.plus_d7pszg_k$ = function (context) {
    var tmp;
    if (context === EmptyCoroutineContext_getInstance()) {
      tmp = this;
    } else {
      tmp = context.fold_cq605b_k$(this, _no_name_provided_$factory_2());
    }
    return tmp;
  };
  CoroutineContext.$metadata$ = {
    simpleName: 'CoroutineContext',
    kind: 'interface',
    interfaces: []
  };
  function _no_name_provided_$factory_2() {
    var i = new _no_name_provided__5();
    return function (p1, p2) {
      return i.invoke_2v6pkd_k$(p1, p2);
    };
  }
  function EmptyCoroutineContext() {
    EmptyCoroutineContext_instance = this;
    this._serialVersionUID_1 = new Long(0, 0);
  }
  EmptyCoroutineContext.prototype.get_9uvjra_k$ = function (key) {
    return null;
  };
  EmptyCoroutineContext.prototype.fold_cq605b_k$ = function (initial, operation) {
    return initial;
  };
  EmptyCoroutineContext.prototype.plus_d7pszg_k$ = function (context) {
    return context;
  };
  EmptyCoroutineContext.prototype.minusKey_djuxjq_k$ = function (key) {
    return this;
  };
  EmptyCoroutineContext.prototype.hashCode = function () {
    return 0;
  };
  EmptyCoroutineContext.prototype.toString = function () {
    return 'EmptyCoroutineContext';
  };
  EmptyCoroutineContext.$metadata$ = {
    simpleName: 'EmptyCoroutineContext',
    kind: 'object',
    interfaces: [CoroutineContext, Serializable]
  };
  var EmptyCoroutineContext_instance;
  function EmptyCoroutineContext_getInstance() {
    if (EmptyCoroutineContext_instance == null)
      new EmptyCoroutineContext();
    return EmptyCoroutineContext_instance;
  }
  function size($this) {
    var cur = $this;
    var size_0 = 2;
    while (true) {
      var tmp = cur._left;
      var tmp0_elvis_lhs = tmp instanceof CombinedContext ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return size_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      cur = tmp_0;
      var tmp1 = size_0;
      size_0 = tmp1 + 1 | 0;
      Unit_getInstance();
    }
  }
  function contains_0($this, element) {
    return equals_1($this.get_9uvjra_k$(element._get_key__0_k$()), element);
  }
  function containsAll($this, context) {
    var cur = context;
    while (true) {
      if (!contains_0($this, cur._element))
        return false;
      var next = cur._left;
      if (next instanceof CombinedContext) {
        cur = next;
      } else {
        {
          return contains_0($this, isInterface(next, Element_0) ? next : THROW_CCE());
        }
      }
    }
  }
  function _no_name_provided__6() {
  }
  _no_name_provided__6.prototype.invoke_mz4o2y_k$ = function (acc, element) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = charSequenceLength(acc) === 0;
      break $l$block;
    }
    if (tmp$ret$0) {
      tmp = toString_1(element);
    } else {
      {
        tmp = '' + acc + ', ' + element;
      }
    }
    return tmp;
  };
  _no_name_provided__6.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE();
    return this.invoke_mz4o2y_k$(tmp, (!(p2 == null) ? isInterface(p2, Element_0) : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__6.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function CombinedContext(left, element) {
    this._left = left;
    this._element = element;
  }
  CombinedContext.prototype.get_9uvjra_k$ = function (key) {
    var cur = this;
    while (true) {
      var tmp0_safe_receiver = cur._element.get_9uvjra_k$(key);
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        {
          {
          }
          return tmp0_safe_receiver;
        }
      }
      Unit_getInstance();
      var next = cur._left;
      if (next instanceof CombinedContext) {
        cur = next;
      } else {
        {
          return next.get_9uvjra_k$(key);
        }
      }
    }
  };
  CombinedContext.prototype.fold_cq605b_k$ = function (initial, operation) {
    return operation(this._left.fold_cq605b_k$(initial, operation), this._element);
  };
  CombinedContext.prototype.minusKey_djuxjq_k$ = function (key) {
    var tmp0_safe_receiver = this._element.get_9uvjra_k$(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        return this._left;
      }
    }
    Unit_getInstance();
    var newLeft = this._left.minusKey_djuxjq_k$(key);
    return newLeft === this._left ? this : newLeft === EmptyCoroutineContext_getInstance() ? this._element : new CombinedContext(newLeft, this._element);
  };
  CombinedContext.prototype.equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (other instanceof CombinedContext) {
        tmp_1 = size(other) === size(this);
      } else {
        {
          tmp_1 = false;
        }
      }
      if (tmp_1) {
        tmp_0 = containsAll(other, this);
      } else {
        {
          tmp_0 = false;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CombinedContext.prototype.hashCode = function () {
    return hashCode(this._left) + hashCode(this._element) | 0;
  };
  CombinedContext.prototype.toString = function () {
    return '[' + this.fold_cq605b_k$('', _no_name_provided_$factory_3()) + ']';
  };
  CombinedContext.$metadata$ = {
    simpleName: 'CombinedContext',
    kind: 'class',
    interfaces: [CoroutineContext, Serializable]
  };
  function AbstractCoroutineContextKey(baseKey, safeCast) {
    this._safeCast = safeCast;
    var tmp = this;
    var tmp_0;
    if (baseKey instanceof AbstractCoroutineContextKey) {
      tmp_0 = baseKey._topmostKey;
    } else {
      {
        tmp_0 = baseKey;
      }
    }
    tmp._topmostKey = tmp_0;
  }
  AbstractCoroutineContextKey.prototype.tryCast_k332zt_k$ = function (element) {
    return this._safeCast(element);
  };
  AbstractCoroutineContextKey.prototype.isSubKey_djuxjq_k$ = function (key) {
    return key === this ? true : this._topmostKey === key;
  };
  AbstractCoroutineContextKey.$metadata$ = {
    simpleName: 'AbstractCoroutineContextKey',
    kind: 'class',
    interfaces: [Key_0]
  };
  function AbstractCoroutineContextElement(key) {
    this._key = key;
  }
  AbstractCoroutineContextElement.prototype._get_key__0_k$ = function () {
    return this._key;
  };
  AbstractCoroutineContextElement.$metadata$ = {
    simpleName: 'AbstractCoroutineContextElement',
    kind: 'class',
    interfaces: [Element_0]
  };
  function _no_name_provided_$factory_3() {
    var i = new _no_name_provided__6();
    return function (p1, p2) {
      return i.invoke_mz4o2y_k$(p1, p2);
    };
  }
  function _get_COROUTINE_SUSPENDED_() {
    return CoroutineSingletons_COROUTINE_SUSPENDED_getInstance();
  }
  var CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  var CoroutineSingletons_UNDECIDED_instance;
  var CoroutineSingletons_RESUMED_instance;
  var CoroutineSingletons_entriesInitialized;
  function CoroutineSingletons_initEntries() {
    if (CoroutineSingletons_entriesInitialized)
      return Unit_getInstance();
    CoroutineSingletons_entriesInitialized = true;
    CoroutineSingletons_COROUTINE_SUSPENDED_instance = new CoroutineSingletons('COROUTINE_SUSPENDED', 0);
    CoroutineSingletons_UNDECIDED_instance = new CoroutineSingletons('UNDECIDED', 1);
    CoroutineSingletons_RESUMED_instance = new CoroutineSingletons('RESUMED', 2);
  }
  function CoroutineSingletons(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CoroutineSingletons.$metadata$ = {
    simpleName: 'CoroutineSingletons',
    kind: 'class',
    interfaces: []
  };
  function CoroutineSingletons_COROUTINE_SUSPENDED_getInstance() {
    CoroutineSingletons_initEntries();
    return CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  }
  function ReadWriteProperty() {
  }
  ReadWriteProperty.$metadata$ = {
    simpleName: 'ReadWriteProperty',
    kind: 'interface',
    interfaces: [ReadOnlyProperty]
  };
  function ReadOnlyProperty() {
  }
  ReadOnlyProperty.$metadata$ = {
    simpleName: 'ReadOnlyProperty',
    kind: 'interface',
    interfaces: []
  };
  function ClosedFloatingPointRange() {
  }
  ClosedFloatingPointRange.prototype.contains_2c5_k$ = function (value) {
    return this.lessThanOrEquals_1qgdm_k$(this._get_start__0_k$(), value) ? this.lessThanOrEquals_1qgdm_k$(value, this._get_endInclusive__0_k$()) : false;
  };
  ClosedFloatingPointRange.$metadata$ = {
    simpleName: 'ClosedFloatingPointRange',
    kind: 'interface',
    interfaces: [ClosedRange]
  };
  function rangeTo(_this_, that) {
    return new ClosedDoubleRange(_this_, that);
  }
  function ClosedDoubleRange(start, endInclusive) {
    this.__start = start;
    this.__endInclusive = endInclusive;
  }
  ClosedDoubleRange.prototype._get_start__0_k$ = function () {
    return this.__start;
  };
  ClosedDoubleRange.prototype._get_endInclusive__0_k$ = function () {
    return this.__endInclusive;
  };
  ClosedDoubleRange.prototype.lessThanOrEquals_ngl742_k$ = function (a, b) {
    return a <= b;
  };
  ClosedDoubleRange.prototype.lessThanOrEquals_1qgdm_k$ = function (a, b) {
    var tmp = typeof a === 'number' ? a : THROW_CCE();
    return this.lessThanOrEquals_ngl742_k$(tmp, typeof b === 'number' ? b : THROW_CCE());
  };
  ClosedDoubleRange.prototype.contains_e2tf9d_k$ = function (value) {
    return value >= this.__start ? value <= this.__endInclusive : false;
  };
  ClosedDoubleRange.prototype.contains_2c5_k$ = function (value) {
    return this.contains_e2tf9d_k$(typeof value === 'number' ? value : THROW_CCE());
  };
  ClosedDoubleRange.prototype.isEmpty_0_k$ = function () {
    return !(this.__start <= this.__endInclusive);
  };
  ClosedDoubleRange.prototype.equals = function (other) {
    var tmp;
    if (other instanceof ClosedDoubleRange) {
      tmp = (this.isEmpty_0_k$() ? other.isEmpty_0_k$() : false) ? true : this.__start === other.__start ? this.__endInclusive === other.__endInclusive : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  ClosedDoubleRange.prototype.hashCode = function () {
    return this.isEmpty_0_k$() ? -1 : imul(31, getNumberHashCode(this.__start)) + getNumberHashCode(this.__endInclusive) | 0;
  };
  ClosedDoubleRange.prototype.toString = function () {
    return '' + this.__start + '..' + this.__endInclusive;
  };
  ClosedDoubleRange.$metadata$ = {
    simpleName: 'ClosedDoubleRange',
    kind: 'class',
    interfaces: [ClosedFloatingPointRange]
  };
  function KClassifier() {
  }
  KClassifier.$metadata$ = {
    simpleName: 'KClassifier',
    kind: 'interface',
    interfaces: []
  };
  function appendElement(_this_, element, transform) {
    if (!(transform == null)) {
      _this_.append_v1o70a_k$(transform(element));
      Unit_getInstance();
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this_.append_v1o70a_k$(element);
        Unit_getInstance();
      } else {
        if (element instanceof Char) {
          _this_.append_wi8o78_k$(element);
          Unit_getInstance();
        } else {
          {
            _this_.append_v1o70a_k$(toString_0(element));
            Unit_getInstance();
          }
        }
      }
    }
  }
  function equals(_this_, other, ignoreCase) {
    if (_this_.equals(other))
      return true;
    if (!ignoreCase)
      return false;
    var thisUpper = uppercaseChar(_this_);
    var otherUpper = uppercaseChar(other);
    var tmp;
    if (thisUpper.equals(otherUpper)) {
      tmp = true;
    } else {
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$1;
          $l$block_0: {
            var tmp$ret$0;
            $l$block: {
              var tmp0_asDynamic_0 = thisUpper.toString();
              tmp$ret$0 = tmp0_asDynamic_0;
              break $l$block;
            }
            var tmp1_unsafeCast_0 = tmp$ret$0.toLowerCase();
            tmp$ret$1 = tmp1_unsafeCast_0;
            break $l$block_0;
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block_1;
        }
        tmp$ret$3 = charSequenceGet(tmp$ret$2, 0);
        break $l$block_2;
      }
      var tmp_0 = tmp$ret$3;
      var tmp$ret$7;
      $l$block_6: {
        var tmp$ret$6;
        $l$block_5: {
          var tmp$ret$5;
          $l$block_4: {
            var tmp$ret$4;
            $l$block_3: {
              var tmp2_asDynamic_0 = otherUpper.toString();
              tmp$ret$4 = tmp2_asDynamic_0;
              break $l$block_3;
            }
            var tmp3_unsafeCast_0 = tmp$ret$4.toLowerCase();
            tmp$ret$5 = tmp3_unsafeCast_0;
            break $l$block_4;
          }
          tmp$ret$6 = tmp$ret$5;
          break $l$block_5;
        }
        tmp$ret$7 = charSequenceGet(tmp$ret$6, 0);
        break $l$block_6;
      }
      tmp = tmp_0.equals(tmp$ret$7);
    }
    return tmp;
  }
  function indexOf_0(_this_, char, startIndex, ignoreCase) {
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this_ === 'string');
    }
    if (tmp_0) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = charArrayOf([char]);
        break $l$block;
      }
      tmp = indexOfAny(_this_, tmp$ret$0, startIndex, ignoreCase);
    } else {
      {
        var tmp$ret$3;
        $l$block_2: {
          var tmp1_nativeIndexOf_0 = _this_;
          var tmp$ret$2;
          $l$block_1: {
            var tmp0_nativeIndexOf_0 = char.toString();
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = tmp1_nativeIndexOf_0;
              break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1.indexOf(tmp0_nativeIndexOf_0, startIndex);
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }
        tmp = tmp$ret$3;
      }
    }
    return tmp;
  }
  function indexOf$default(_this_, char, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return indexOf_0(_this_, char, startIndex, ignoreCase);
  }
  function removePrefix(_this_, prefix) {
    if (startsWith$default(_this_, prefix, false, 2, null)) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_substring_0 = charSequenceLength(prefix);
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _this_;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0.substring(tmp0_substring_0);
        break $l$block_0;
      }
      return tmp$ret$1;
    } else {
    }
    return _this_;
  }
  function lineSequence(_this_) {
    return splitToSequence$default(_this_, ['\r\n', '\n', '\r'], false, 0, 6, null);
  }
  function contains_1(_this_, char, ignoreCase) {
    return indexOf$default(_this_, char, 0, ignoreCase, 2, null) >= 0;
  }
  function contains$default(_this_, char, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ignoreCase = false;
    return contains_1(_this_, char, ignoreCase);
  }
  function _get_lastIndex__0(_this_) {
    return charSequenceLength(_this_) - 1 | 0;
  }
  function _get_indices_(_this_) {
    return numberRangeToNumber(0, charSequenceLength(_this_) - 1 | 0);
  }
  function trim(_this_) {
    var tmp$ret$0;
    $l$block: {
      var startIndex_1 = 0;
      var endIndex_2 = charSequenceLength(_this_) - 1 | 0;
      var startFound_3 = false;
      $l$break: while (startIndex_1 <= endIndex_2) {
        var index_4 = !startFound_3 ? startIndex_1 : endIndex_2;
        var match_5 = isWhitespace(charSequenceGet(_this_, index_4));
        if (!startFound_3) {
          if (!match_5)
            startFound_3 = true;
          else
            startIndex_1 = startIndex_1 + 1 | 0;
        } else {
          if (!match_5)
            break $l$break;
          else
            endIndex_2 = endIndex_2 - 1 | 0;
        }
      }
      tmp$ret$0 = charSequenceSubSequence(_this_, startIndex_1, endIndex_2 + 1 | 0);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function indexOfAny(_this_, chars, startIndex, ignoreCase) {
    var tmp;
    if (!ignoreCase ? chars.length === 1 : false) {
      tmp = typeof _this_ === 'string';
    } else {
      tmp = false;
    }
    if (tmp) {
      var char = single(chars);
      var tmp$ret$2;
      $l$block_1: {
        var tmp1_nativeIndexOf_0 = _this_;
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_nativeIndexOf_0 = char.toString();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp1_nativeIndexOf_0;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0.indexOf(tmp0_nativeIndexOf_0, startIndex);
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_1;
      }
      return tmp$ret$2;
    } else {
    }
    var inductionVariable = coerceAtLeast(startIndex, 0);
    var last_0 = _get_lastIndex__0(_this_);
    if (inductionVariable <= last_0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var charAtIndex = charSequenceGet(_this_, index);
        var tmp$ret$4;
        $l$block_4: {
          var indexedObject = chars;
          var inductionVariable_0 = 0;
          var last_1 = indexedObject.length;
          while (inductionVariable_0 < last_1) {
            var element_2 = indexedObject[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp$ret$3;
            $l$block_2: {
              tmp$ret$3 = equals(element_2, charAtIndex, ignoreCase);
              break $l$block_2;
            }
            if (tmp$ret$3) {
              tmp$ret$4 = true;
              break $l$block_4;
            } else {
            }
          }
          tmp$ret$4 = false;
          break $l$block_4;
        }
        if (tmp$ret$4)
          return index;
        else {
        }
      }
       while (!(index === last_0));
    return -1;
  }
  function startsWith(_this_, prefix, ignoreCase) {
    var tmp;
    var tmp_0;
    if (!ignoreCase) {
      tmp_0 = typeof _this_ === 'string';
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = typeof prefix === 'string';
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      return startsWith$default_0(_this_, prefix, false, 2, null);
    } else {
      return regionMatchesImpl(_this_, 0, prefix, 0, charSequenceLength(prefix), ignoreCase);
    }
  }
  function startsWith$default(_this_, prefix, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ignoreCase = false;
    return startsWith(_this_, prefix, ignoreCase);
  }
  function splitToSequence(_this_, delimiters, ignoreCase, limit) {
    var tmp = rangesDelimitedBy$default(_this_, delimiters, 0, ignoreCase, limit, 2, null);
    return map(tmp, _no_name_provided_$factory_4(_this_));
  }
  function splitToSequence$default(_this_, delimiters, ignoreCase, limit, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ignoreCase = false;
    if (!(($mask0 & 4) === 0))
      limit = 0;
    return splitToSequence(_this_, delimiters, ignoreCase, limit);
  }
  function regionMatchesImpl(_this_, thisOffset, other, otherOffset, length, ignoreCase) {
    if (((otherOffset < 0 ? true : thisOffset < 0) ? true : thisOffset > (charSequenceLength(_this_) - length | 0)) ? true : otherOffset > (charSequenceLength(other) - length | 0)) {
      return false;
    }var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(charSequenceGet(_this_, thisOffset + index | 0), charSequenceGet(other, otherOffset + index | 0), ignoreCase))
          return false;
      }
       while (inductionVariable < length);
    return true;
  }
  function substring(_this_, range) {
    return toString_1(charSequenceSubSequence(_this_, range._get_start__0_k$(), range._get_endInclusive__0_k$() + 1 | 0));
  }
  function rangesDelimitedBy(_this_, delimiters, startIndex, ignoreCase, limit) {
    requireNonNegativeLimit(limit);
    var delimitersList = asList(delimiters);
    return new DelimitedRangesSequence(_this_, startIndex, limit, _no_name_provided_$factory_5(delimitersList, ignoreCase));
  }
  function rangesDelimitedBy$default(_this_, delimiters, startIndex, ignoreCase, limit, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    if (!(($mask0 & 8) === 0))
      limit = 0;
    return rangesDelimitedBy(_this_, delimiters, startIndex, ignoreCase, limit);
  }
  function requireNonNegativeLimit(limit) {
    var tmp0_require_0 = limit >= 0;
    {
    }
    var tmp;
    if (!tmp0_require_0) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = '' + 'Limit must be non-negative, but was ' + limit;
        break $l$block;
      }
      var message_2 = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_1(message_2));
    }return tmp;
  }
  function calcNext_0($this) {
    if ($this._nextSearchIndex < 0) {
      $this._nextState_0 = 0;
      $this._nextItem_0 = null;
    } else {
      var tmp;
      var tmp_0;
      if ($this._this$0_3._limit > 0) {
        var tmp0_this = $this;
        tmp0_this._counter = tmp0_this._counter + 1 | 0;
        tmp_0 = tmp0_this._counter >= $this._this$0_3._limit;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = true;
      } else {
        {
          tmp = $this._nextSearchIndex > charSequenceLength($this._this$0_3._input);
        }
      }
      if (tmp) {
        $this._nextItem_0 = numberRangeToNumber($this._currentStartIndex, _get_lastIndex__0($this._this$0_3._input));
        $this._nextSearchIndex = -1;
      } else {
        {
          var match = $this._this$0_3._getNextMatch($this._this$0_3._input, $this._nextSearchIndex);
          if (match == null) {
            $this._nextItem_0 = numberRangeToNumber($this._currentStartIndex, _get_lastIndex__0($this._this$0_3._input));
            $this._nextSearchIndex = -1;
          } else {
            var tmp1_container = match;
            var index = tmp1_container.component1_0_k$();
            var length = tmp1_container.component2_0_k$();
            $this._nextItem_0 = until($this._currentStartIndex, index);
            $this._currentStartIndex = index + length | 0;
            $this._nextSearchIndex = $this._currentStartIndex + (length === 0 ? 1 : 0) | 0;
          }
        }
      }
      $this._nextState_0 = 1;
    }
  }
  function _no_name_provided__7(this$0) {
    this._this$0_3 = this$0;
    this._nextState_0 = -1;
    this._currentStartIndex = coerceIn(this._this$0_3._startIndex, 0, charSequenceLength(this._this$0_3._input));
    this._nextSearchIndex = this._currentStartIndex;
    this._nextItem_0 = null;
    this._counter = 0;
  }
  _no_name_provided__7.prototype.next_0_k$ = function () {
    if (this._nextState_0 === -1)
      calcNext_0(this);
    if (this._nextState_0 === 0)
      throw NoSuchElementException_init_$Create$();
    var tmp = this._nextItem_0;
    var result = tmp instanceof IntRange ? tmp : THROW_CCE();
    this._nextItem_0 = null;
    this._nextState_0 = -1;
    return result;
  };
  _no_name_provided__7.prototype.hasNext_0_k$ = function () {
    if (this._nextState_0 === -1)
      calcNext_0(this);
    return this._nextState_0 === 1;
  };
  _no_name_provided__7.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function DelimitedRangesSequence(input, startIndex, limit, getNextMatch) {
    this._input = input;
    this._startIndex = startIndex;
    this._limit = limit;
    this._getNextMatch = getNextMatch;
  }
  DelimitedRangesSequence.prototype.iterator_0_k$ = function () {
    return new _no_name_provided__7(this);
  };
  DelimitedRangesSequence.$metadata$ = {
    simpleName: 'DelimitedRangesSequence',
    kind: 'class',
    interfaces: [Sequence]
  };
  function findAnyOf(_this_, strings, startIndex, ignoreCase, last_0) {
    if (!ignoreCase ? strings._get_size__0_k$() === 1 : false) {
      var string = single_1(strings);
      var tmp;
      if (!last_0) {
        tmp = indexOf$default_0(_this_, string, startIndex, false, 4, null);
      } else {
        tmp = lastIndexOf$default(_this_, string, startIndex, false, 4, null);
      }
      var index = tmp;
      return index < 0 ? null : to(index, string);
    }var indices = !last_0 ? numberRangeToNumber(coerceAtLeast(startIndex, 0), charSequenceLength(_this_)) : downTo(coerceAtMost(startIndex, _get_lastIndex__0(_this_)), 0);
    if (typeof _this_ === 'string') {
      var inductionVariable = indices._first_0;
      var last_1 = indices._last;
      var step = indices._step_1;
      if ((step > 0 ? inductionVariable <= last_1 : false) ? true : step < 0 ? last_1 <= inductionVariable : false)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + step | 0;
          var tmp$ret$1;
          $l$block_1: {
            var tmp0_iterator_1 = strings.iterator_0_k$();
            while (tmp0_iterator_1.hasNext_0_k$()) {
              var element_2 = tmp0_iterator_1.next_0_k$();
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = regionMatches(element_2, 0, _this_, index_0, element_2.length, ignoreCase);
                break $l$block;
              }
              if (tmp$ret$0) {
                tmp$ret$1 = element_2;
                break $l$block_1;
              } else {
              }
            }
            tmp$ret$1 = null;
            break $l$block_1;
          }
          var matchingString = tmp$ret$1;
          if (!(matchingString == null))
            return to(index_0, matchingString);
        }
         while (!(index_0 === last_1));
    } else {
      {
        var inductionVariable_0 = indices._first_0;
        var last_2 = indices._last;
        var step_0 = indices._step_1;
        if ((step_0 > 0 ? inductionVariable_0 <= last_2 : false) ? true : step_0 < 0 ? last_2 <= inductionVariable_0 : false)
          do {
            var index_1 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + step_0 | 0;
            var tmp$ret$3;
            $l$block_4: {
              var tmp0_iterator_1_0 = strings.iterator_0_k$();
              while (tmp0_iterator_1_0.hasNext_0_k$()) {
                var element_2_0 = tmp0_iterator_1_0.next_0_k$();
                var tmp$ret$2;
                $l$block_2: {
                  tmp$ret$2 = regionMatchesImpl(element_2_0, 0, _this_, index_1, element_2_0.length, ignoreCase);
                  break $l$block_2;
                }
                if (tmp$ret$2) {
                  tmp$ret$3 = element_2_0;
                  break $l$block_4;
                } else {
                }
              }
              tmp$ret$3 = null;
              break $l$block_4;
            }
            var matchingString_0 = tmp$ret$3;
            if (!(matchingString_0 == null))
              return to(index_1, matchingString_0);
          }
           while (!(index_1 === last_2));
      }
    }
    return null;
  }
  function indexOf_1(_this_, string, startIndex, ignoreCase) {
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this_ === 'string');
    }
    if (tmp_0) {
      var tmp_1 = charSequenceLength(_this_);
      tmp = indexOf$default_1(_this_, string, startIndex, tmp_1, ignoreCase, false, 16, null);
    } else {
      {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_nativeIndexOf_0 = _this_;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_nativeIndexOf_0;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0.indexOf(string, startIndex);
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
    }
    return tmp;
  }
  function indexOf$default_0(_this_, string, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return indexOf_1(_this_, string, startIndex, ignoreCase);
  }
  function lastIndexOf(_this_, string, startIndex, ignoreCase) {
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this_ === 'string');
    }
    if (tmp_0) {
      tmp = indexOf_2(_this_, string, startIndex, 0, ignoreCase, true);
    } else {
      {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_nativeLastIndexOf_0 = _this_;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_nativeLastIndexOf_0;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0.lastIndexOf(string, startIndex);
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
    }
    return tmp;
  }
  function lastIndexOf$default(_this_, string, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = _get_lastIndex__0(_this_);
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return lastIndexOf(_this_, string, startIndex, ignoreCase);
  }
  function indexOf_2(_this_, other, startIndex, endIndex, ignoreCase, last_0) {
    var indices = !last_0 ? numberRangeToNumber(coerceAtLeast(startIndex, 0), coerceAtMost(endIndex, charSequenceLength(_this_))) : downTo(coerceAtMost(startIndex, _get_lastIndex__0(_this_)), coerceAtLeast(endIndex, 0));
    var tmp;
    if (typeof _this_ === 'string') {
      tmp = typeof other === 'string';
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      var inductionVariable = indices._first_0;
      var last_1 = indices._last;
      var step = indices._step_1;
      if ((step > 0 ? inductionVariable <= last_1 : false) ? true : step < 0 ? last_1 <= inductionVariable : false)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + step | 0;
          if (regionMatches(other, 0, _this_, index, charSequenceLength(other), ignoreCase))
            return index;
        }
         while (!(index === last_1));
    } else {
      {
        var inductionVariable_0 = indices._first_0;
        var last_2 = indices._last;
        var step_0 = indices._step_1;
        if ((step_0 > 0 ? inductionVariable_0 <= last_2 : false) ? true : step_0 < 0 ? last_2 <= inductionVariable_0 : false)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + step_0 | 0;
            if (regionMatchesImpl(other, 0, _this_, index_0, charSequenceLength(other), ignoreCase))
              return index_0;
          }
           while (!(index_0 === last_2));
      }
    }
    return -1;
  }
  function indexOf$default_1(_this_, other, startIndex, endIndex, ignoreCase, last_0, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      last_0 = false;
    return indexOf_2(_this_, other, startIndex, endIndex, ignoreCase, last_0);
  }
  function _no_name_provided__8($this_splitToSequence) {
    this._$this_splitToSequence = $this_splitToSequence;
  }
  _no_name_provided__8.prototype.invoke_em8bnc_k$ = function (it) {
    return substring(this._$this_splitToSequence, it);
  };
  _no_name_provided__8.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_em8bnc_k$(p1 instanceof IntRange ? p1 : THROW_CCE());
  };
  _no_name_provided__8.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__9($delimitersList, $ignoreCase) {
    this._$delimitersList = $delimitersList;
    this._$ignoreCase = $ignoreCase;
  }
  _no_name_provided__9.prototype.invoke_w2qdfo_k$ = function ($this$$receiver, currentIndex) {
    var tmp0_safe_receiver = findAnyOf($this$$receiver, this._$delimitersList, currentIndex, this._$ignoreCase, false);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = to(tmp0_safe_receiver._first, tmp0_safe_receiver._second.length);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  _no_name_provided__9.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isCharSequence(p1) : false) ? p1 : THROW_CCE();
    return this.invoke_w2qdfo_k$(tmp, (!(p2 == null) ? typeof p2 === 'number' : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__9.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_4($this_splitToSequence) {
    var i = new _no_name_provided__8($this_splitToSequence);
    return function (p1) {
      return i.invoke_em8bnc_k$(p1);
    };
  }
  function _no_name_provided_$factory_5($delimitersList, $ignoreCase) {
    var i = new _no_name_provided__9($delimitersList, $ignoreCase);
    return function (p1, p2) {
      return i.invoke_w2qdfo_k$(p1, p2);
    };
  }
  function Lazy() {
  }
  Lazy.$metadata$ = {
    simpleName: 'Lazy',
    kind: 'interface',
    interfaces: []
  };
  var LazyThreadSafetyMode_SYNCHRONIZED_instance;
  var LazyThreadSafetyMode_PUBLICATION_instance;
  var LazyThreadSafetyMode_NONE_instance;
  var LazyThreadSafetyMode_entriesInitialized;
  function LazyThreadSafetyMode_initEntries() {
    if (LazyThreadSafetyMode_entriesInitialized)
      return Unit_getInstance();
    LazyThreadSafetyMode_entriesInitialized = true;
    LazyThreadSafetyMode_SYNCHRONIZED_instance = new LazyThreadSafetyMode('SYNCHRONIZED', 0);
    LazyThreadSafetyMode_PUBLICATION_instance = new LazyThreadSafetyMode('PUBLICATION', 1);
    LazyThreadSafetyMode_NONE_instance = new LazyThreadSafetyMode('NONE', 2);
  }
  function LazyThreadSafetyMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  LazyThreadSafetyMode.$metadata$ = {
    simpleName: 'LazyThreadSafetyMode',
    kind: 'class',
    interfaces: []
  };
  function UnsafeLazyImpl(initializer) {
    this._initializer = initializer;
    this.__value = UNINITIALIZED_VALUE_getInstance();
  }
  UnsafeLazyImpl.prototype._get_value__0_k$ = function () {
    if (this.__value === UNINITIALIZED_VALUE_getInstance()) {
      this.__value = ensureNotNull(this._initializer)();
      this._initializer = null;
    }var tmp = this.__value;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  UnsafeLazyImpl.prototype.isInitialized_0_k$ = function () {
    return !(this.__value === UNINITIALIZED_VALUE_getInstance());
  };
  UnsafeLazyImpl.prototype.toString = function () {
    return this.isInitialized_0_k$() ? toString_0(this._get_value__0_k$()) : 'Lazy value not initialized yet.';
  };
  UnsafeLazyImpl.$metadata$ = {
    simpleName: 'UnsafeLazyImpl',
    kind: 'class',
    interfaces: [Lazy, Serializable]
  };
  function UNINITIALIZED_VALUE() {
    UNINITIALIZED_VALUE_instance = this;
  }
  UNINITIALIZED_VALUE.$metadata$ = {
    simpleName: 'UNINITIALIZED_VALUE',
    kind: 'object',
    interfaces: []
  };
  var UNINITIALIZED_VALUE_instance;
  function UNINITIALIZED_VALUE_getInstance() {
    if (UNINITIALIZED_VALUE_instance == null)
      new UNINITIALIZED_VALUE();
    return UNINITIALIZED_VALUE_instance;
  }
  function LazyThreadSafetyMode_NONE_getInstance() {
    LazyThreadSafetyMode_initEntries();
    return LazyThreadSafetyMode_NONE_instance;
  }
  function _Result___init__impl_(value) {
    return value;
  }
  function _Result___get_value__impl_(this_0) {
    return this_0;
  }
  function _Result___get_isFailure__impl_(this_0) {
    var tmp = _Result___get_value__impl_(this_0);
    return tmp instanceof Failure;
  }
  function Result__exceptionOrNull_impl(this_0) {
    var tmp0_subject = _Result___get_value__impl_(this_0);
    var tmp;
    if (tmp0_subject instanceof Failure) {
      tmp = _Result___get_value__impl_(this_0)._exception;
    } else {
      {
        tmp = null;
      }
    }
    return tmp;
  }
  function Companion_3() {
    Companion_instance_2 = this;
  }
  Companion_3.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_3();
    return Companion_instance_2;
  }
  function Failure(exception) {
    this._exception = exception;
  }
  Failure.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Failure) {
      tmp = equals_1(this._exception, other._exception);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Failure.prototype.hashCode = function () {
    return hashCode(this._exception);
  };
  Failure.prototype.toString = function () {
    return '' + 'Failure(' + this._exception + ')';
  };
  Failure.$metadata$ = {
    simpleName: 'Failure',
    kind: 'class',
    interfaces: [Serializable]
  };
  function createFailure(exception) {
    return new Failure(exception);
  }
  function NotImplementedError(message) {
    Error_init_$Init$(message, this);
    captureStack(this, NotImplementedError);
  }
  NotImplementedError.$metadata$ = {
    simpleName: 'NotImplementedError',
    kind: 'class',
    interfaces: []
  };
  function Pair(first_0, second) {
    this._first = first_0;
    this._second = second;
  }
  Pair.prototype.toString = function () {
    return '' + '(' + this._first + ', ' + this._second + ')';
  };
  Pair.prototype.component1_0_k$ = function () {
    return this._first;
  };
  Pair.prototype.component2_0_k$ = function () {
    return this._second;
  };
  Pair.prototype.hashCode = function () {
    var result = this._first == null ? 0 : hashCode(this._first);
    result = imul(result, 31) + (this._second == null ? 0 : hashCode(this._second)) | 0;
    return result;
  };
  Pair.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Pair))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Pair ? other : THROW_CCE();
    if (!equals_1(this._first, tmp0_other_with_cast._first))
      return false;
    if (!equals_1(this._second, tmp0_other_with_cast._second))
      return false;
    return true;
  };
  Pair.$metadata$ = {
    simpleName: 'Pair',
    kind: 'class',
    interfaces: [Serializable]
  };
  function to(_this_, that) {
    return new Pair(_this_, that);
  }
  function _UShort___init__impl_(data) {
    return data;
  }
  function _UShort___get_data__impl_(this_0) {
    return this_0;
  }
  function Companion_4() {
    Companion_instance_3 = this;
    this._MIN_VALUE = _UShort___init__impl_(0);
    this._MAX_VALUE = _UShort___init__impl_(-1);
    this._SIZE_BYTES = 2;
    this._SIZE_BITS = 16;
  }
  Companion_4.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_4();
    return Companion_instance_3;
  }
  function CharSequence() {
  }
  CharSequence.$metadata$ = {
    simpleName: 'CharSequence',
    kind: 'interface',
    interfaces: []
  };
  function Comparable() {
  }
  Comparable.$metadata$ = {
    simpleName: 'Comparable',
    kind: 'interface',
    interfaces: []
  };
  function Iterator() {
  }
  Iterator.$metadata$ = {
    simpleName: 'Iterator',
    kind: 'interface',
    interfaces: []
  };
  function MutableIterator() {
  }
  MutableIterator.$metadata$ = {
    simpleName: 'MutableIterator',
    kind: 'interface',
    interfaces: [Iterator]
  };
  function ListIterator() {
  }
  ListIterator.$metadata$ = {
    simpleName: 'ListIterator',
    kind: 'interface',
    interfaces: [Iterator]
  };
  function Number_0() {
  }
  Number_0.$metadata$ = {
    simpleName: 'Number',
    kind: 'class',
    interfaces: []
  };
  function IntIterator() {
  }
  IntIterator.prototype.next_0_k$ = function () {
    return this.nextInt_0_k$();
  };
  IntIterator.$metadata$ = {
    simpleName: 'IntIterator',
    kind: 'class',
    interfaces: [Iterator]
  };
  function CharIterator() {
  }
  CharIterator.prototype.next_0_k$ = function () {
    return this.nextChar_0_k$();
  };
  CharIterator.$metadata$ = {
    simpleName: 'CharIterator',
    kind: 'class',
    interfaces: [Iterator]
  };
  function IntProgressionIterator(first_0, last_0, step) {
    IntIterator.call(this);
    this._step = step;
    this._finalElement = last_0;
    this._hasNext = this._step > 0 ? first_0 <= last_0 : first_0 >= last_0;
    this._next_0 = this._hasNext ? first_0 : this._finalElement;
  }
  IntProgressionIterator.prototype.hasNext_0_k$ = function () {
    return this._hasNext;
  };
  IntProgressionIterator.prototype.nextInt_0_k$ = function () {
    var value = this._next_0;
    if (value === this._finalElement) {
      if (!this._hasNext)
        throw NoSuchElementException_init_$Create$();
      this._hasNext = false;
    } else {
      var tmp0_this = this;
      tmp0_this._next_0 = tmp0_this._next_0 + this._step | 0;
    }
    return value;
  };
  IntProgressionIterator.$metadata$ = {
    simpleName: 'IntProgressionIterator',
    kind: 'class',
    interfaces: []
  };
  function CharProgressionIterator(first_0, last_0, step) {
    CharIterator.call(this);
    this._step_0 = step;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = last_0.toInt_0_k$();
      break $l$block;
    }
    tmp._finalElement_0 = tmp$ret$0;
    this._hasNext_0 = this._step_0 > 0 ? first_0.compareTo_wi8o78_k$(last_0) <= 0 : first_0.compareTo_wi8o78_k$(last_0) >= 0;
    var tmp_0 = this;
    var tmp_1;
    if (this._hasNext_0) {
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = first_0.toInt_0_k$();
        break $l$block_0;
      }
      tmp_1 = tmp$ret$1;
    } else {
      tmp_1 = this._finalElement_0;
    }
    tmp_0._next_1 = tmp_1;
  }
  CharProgressionIterator.prototype.hasNext_0_k$ = function () {
    return this._hasNext_0;
  };
  CharProgressionIterator.prototype.nextChar_0_k$ = function () {
    var value = this._next_1;
    if (value === this._finalElement_0) {
      if (!this._hasNext_0)
        throw NoSuchElementException_init_$Create$();
      this._hasNext_0 = false;
    } else {
      var tmp0_this = this;
      tmp0_this._next_1 = tmp0_this._next_1 + this._step_0 | 0;
    }
    return numberToChar(value);
  };
  CharProgressionIterator.$metadata$ = {
    simpleName: 'CharProgressionIterator',
    kind: 'class',
    interfaces: []
  };
  function Companion_5() {
    Companion_instance_4 = this;
  }
  Companion_5.prototype.fromClosedRange_fcwjfj_k$ = function (rangeStart, rangeEnd, step) {
    return new IntProgression(rangeStart, rangeEnd, step);
  };
  Companion_5.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_5();
    return Companion_instance_4;
  }
  function IntProgression(start, endInclusive, step) {
    Companion_getInstance_4();
    if (step === 0)
      throw IllegalArgumentException_init_$Create$('Step must be non-zero.');
    if (step === IntCompanionObject_getInstance()._MIN_VALUE_0)
      throw IllegalArgumentException_init_$Create$('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this._first_0 = start;
    this._last = getProgressionLastElement(start, endInclusive, step);
    this._step_1 = step;
  }
  IntProgression.prototype._get_first__0_k$ = function () {
    return this._first_0;
  };
  IntProgression.prototype._get_last__0_k$ = function () {
    return this._last;
  };
  IntProgression.prototype.iterator_0_k$ = function () {
    return new IntProgressionIterator(this._first_0, this._last, this._step_1);
  };
  IntProgression.prototype.isEmpty_0_k$ = function () {
    return this._step_1 > 0 ? this._first_0 > this._last : this._first_0 < this._last;
  };
  IntProgression.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntProgression) {
      tmp = (this.isEmpty_0_k$() ? other.isEmpty_0_k$() : false) ? true : (this._first_0 === other._first_0 ? this._last === other._last : false) ? this._step_1 === other._step_1 : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  IntProgression.prototype.hashCode = function () {
    return this.isEmpty_0_k$() ? -1 : imul(31, imul(31, this._first_0) + this._last | 0) + this._step_1 | 0;
  };
  IntProgression.prototype.toString = function () {
    return this._step_1 > 0 ? '' + this._first_0 + '..' + this._last + ' step ' + this._step_1 : '' + this._first_0 + ' downTo ' + this._last + ' step ' + (-this._step_1 | 0);
  };
  IntProgression.$metadata$ = {
    simpleName: 'IntProgression',
    kind: 'class',
    interfaces: [Iterable]
  };
  function Companion_6() {
    Companion_instance_5 = this;
  }
  Companion_6.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_6();
    return Companion_instance_5;
  }
  function CharProgression(start, endInclusive, step) {
    Companion_getInstance_5();
    if (step === 0)
      throw IllegalArgumentException_init_$Create$('Step must be non-zero.');
    if (step === IntCompanionObject_getInstance()._MIN_VALUE_0)
      throw IllegalArgumentException_init_$Create$('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this._first_1 = start;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = start.toInt_0_k$();
      break $l$block;
    }
    var tmp_0 = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = endInclusive.toInt_0_k$();
      break $l$block_0;
    }
    tmp._last_0 = numberToChar(getProgressionLastElement(tmp_0, tmp$ret$1, step));
    this._step_2 = step;
  }
  CharProgression.prototype._get_first__0_k$ = function () {
    return this._first_1;
  };
  CharProgression.prototype._get_last__0_k$ = function () {
    return this._last_0;
  };
  CharProgression.prototype.iterator_0_k$ = function () {
    return new CharProgressionIterator(this._first_1, this._last_0, this._step_2);
  };
  CharProgression.prototype.isEmpty_0_k$ = function () {
    return this._step_2 > 0 ? this._first_1.compareTo_wi8o78_k$(this._last_0) > 0 : this._first_1.compareTo_wi8o78_k$(this._last_0) < 0;
  };
  CharProgression.prototype.equals = function (other) {
    var tmp;
    if (other instanceof CharProgression) {
      tmp = (this.isEmpty_0_k$() ? other.isEmpty_0_k$() : false) ? true : (this._first_1.equals(other._first_1) ? this._last_0.equals(other._last_0) : false) ? this._step_2 === other._step_2 : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  CharProgression.prototype.hashCode = function () {
    var tmp;
    if (this.isEmpty_0_k$()) {
      tmp = -1;
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0__get_code__0 = this._first_1;
        tmp$ret$0 = tmp0__get_code__0.toInt_0_k$();
        break $l$block;
      }
      var tmp_0 = imul(31, tmp$ret$0);
      var tmp$ret$1;
      $l$block_0: {
        var tmp1__get_code__0 = this._last_0;
        tmp$ret$1 = tmp1__get_code__0.toInt_0_k$();
        break $l$block_0;
      }
      tmp = imul(31, tmp_0 + tmp$ret$1 | 0) + this._step_2 | 0;
    }
    return tmp;
  };
  CharProgression.prototype.toString = function () {
    return this._step_2 > 0 ? '' + this._first_1 + '..' + this._last_0 + ' step ' + this._step_2 : '' + this._first_1 + ' downTo ' + this._last_0 + ' step ' + (-this._step_2 | 0);
  };
  CharProgression.$metadata$ = {
    simpleName: 'CharProgression',
    kind: 'class',
    interfaces: [Iterable]
  };
  function ClosedRange() {
  }
  ClosedRange.$metadata$ = {
    simpleName: 'ClosedRange',
    kind: 'interface',
    interfaces: []
  };
  function Companion_7() {
    Companion_instance_6 = this;
    this._EMPTY = new IntRange(1, 0);
  }
  Companion_7.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_7();
    return Companion_instance_6;
  }
  function IntRange(start, endInclusive) {
    Companion_getInstance_6();
    IntProgression.call(this, start, endInclusive, 1);
  }
  IntRange.prototype._get_start__0_k$ = function () {
    return this._get_first__0_k$();
  };
  IntRange.prototype._get_endInclusive__0_k$ = function () {
    return this._get_last__0_k$();
  };
  IntRange.prototype.isEmpty_0_k$ = function () {
    return this._get_first__0_k$() > this._get_last__0_k$();
  };
  IntRange.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntRange) {
      tmp = (this.isEmpty_0_k$() ? other.isEmpty_0_k$() : false) ? true : this._get_first__0_k$() === other._get_first__0_k$() ? this._get_last__0_k$() === other._get_last__0_k$() : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  IntRange.prototype.hashCode = function () {
    return this.isEmpty_0_k$() ? -1 : imul(31, this._get_first__0_k$()) + this._get_last__0_k$() | 0;
  };
  IntRange.prototype.toString = function () {
    return '' + this._get_first__0_k$() + '..' + this._get_last__0_k$();
  };
  IntRange.$metadata$ = {
    simpleName: 'IntRange',
    kind: 'class',
    interfaces: [ClosedRange]
  };
  function Companion_8() {
    Companion_instance_7 = this;
    this._EMPTY_0 = new CharRange(new Char(1), new Char(0));
  }
  Companion_8.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_8();
    return Companion_instance_7;
  }
  function CharRange(start, endInclusive) {
    Companion_getInstance_7();
    CharProgression.call(this, start, endInclusive, 1);
  }
  CharRange.prototype.isEmpty_0_k$ = function () {
    return this._get_first__0_k$().compareTo_wi8o78_k$(this._get_last__0_k$()) > 0;
  };
  CharRange.prototype.equals = function (other) {
    var tmp;
    if (other instanceof CharRange) {
      tmp = (this.isEmpty_0_k$() ? other.isEmpty_0_k$() : false) ? true : this._get_first__0_k$().equals(other._get_first__0_k$()) ? this._get_last__0_k$().equals(other._get_last__0_k$()) : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  CharRange.prototype.hashCode = function () {
    var tmp;
    if (this.isEmpty_0_k$()) {
      tmp = -1;
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0__get_code__0 = this._get_first__0_k$();
        tmp$ret$0 = tmp0__get_code__0.toInt_0_k$();
        break $l$block;
      }
      var tmp_0 = imul(31, tmp$ret$0);
      var tmp$ret$1;
      $l$block_0: {
        var tmp1__get_code__0 = this._get_last__0_k$();
        tmp$ret$1 = tmp1__get_code__0.toInt_0_k$();
        break $l$block_0;
      }
      tmp = tmp_0 + tmp$ret$1 | 0;
    }
    return tmp;
  };
  CharRange.prototype.toString = function () {
    return '' + this._get_first__0_k$() + '..' + this._get_last__0_k$();
  };
  CharRange.$metadata$ = {
    simpleName: 'CharRange',
    kind: 'class',
    interfaces: [ClosedRange]
  };
  function Unit() {
    Unit_instance = this;
  }
  Unit.prototype.toString = function () {
    return 'kotlin.Unit';
  };
  Unit.$metadata$ = {
    simpleName: 'Unit',
    kind: 'object',
    interfaces: []
  };
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  function getProgressionLastElement(start, end, step) {
    var tmp;
    if (step > 0) {
      tmp = start >= end ? end : end - differenceModulo(end, start, step) | 0;
    } else if (step < 0) {
      tmp = start <= end ? end : end + differenceModulo(start, end, -step | 0) | 0;
    } else {
      throw IllegalArgumentException_init_$Create$('Step is zero.');
    }
    return tmp;
  }
  function differenceModulo(a, b, c) {
    return mod(mod(a, c) - mod(b, c) | 0, c);
  }
  function mod(a, b) {
    var mod_0 = a % b;
    return mod_0 >= 0 ? mod_0 : mod_0 + b | 0;
  }
  function IntCompanionObject_0() {
    IntCompanionObject_instance = this;
    this._MIN_VALUE_0 = -2147483648;
    this._MAX_VALUE_0 = 2147483647;
    this._SIZE_BYTES_0 = 4;
    this._SIZE_BITS_0 = 32;
  }
  IntCompanionObject_0.prototype._get_MIN_VALUE__0_k$ = function () {
    return this._MIN_VALUE_0;
  };
  IntCompanionObject_0.prototype._get_MAX_VALUE__0_k$ = function () {
    return this._MAX_VALUE_0;
  };
  IntCompanionObject_0.prototype._get_SIZE_BYTES__0_k$ = function () {
    return this._SIZE_BYTES_0;
  };
  IntCompanionObject_0.prototype._get_SIZE_BITS__0_k$ = function () {
    return this._SIZE_BITS_0;
  };
  IntCompanionObject_0.$metadata$ = {
    simpleName: 'IntCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(IntCompanionObject_0.prototype, 'MIN_VALUE', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_MIN_VALUE__0_k$
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'MAX_VALUE', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_MAX_VALUE__0_k$
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_SIZE_BYTES__0_k$
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'SIZE_BITS', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_SIZE_BITS__0_k$
  });
  var IntCompanionObject_instance;
  function IntCompanionObject_getInstance() {
    if (IntCompanionObject_instance == null)
      new IntCompanionObject_0();
    return IntCompanionObject_instance;
  }
  function setOf_0(element) {
    return hashSetOf([element]);
  }
  function mapCapacity(expectedSize) {
    return expectedSize;
  }
  function checkIndexOverflow(index) {
    if (index < 0) {
      throwIndexOverflow();
    }return index;
  }
  function listOf_0(element) {
    return arrayListOf([element]);
  }
  function arrayCopy_0(source, destination, destinationOffset, startIndex, endIndex) {
    Companion_getInstance().checkRangeIndexes_zd700_k$(startIndex, endIndex, source.length);
    var rangeSize = endIndex - startIndex | 0;
    Companion_getInstance().checkRangeIndexes_zd700_k$(destinationOffset, destinationOffset + rangeSize | 0, destination.length);
    if (ArrayBuffer.isView(destination) && ArrayBuffer.isView(source)) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = source;
        break $l$block;
      }
      var subrange = tmp$ret$0.subarray(startIndex, endIndex);
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = destination;
        break $l$block_0;
      }
      tmp$ret$1.set(subrange, destinationOffset);
    } else {
      if (!(source === destination) ? true : destinationOffset <= startIndex) {
        var inductionVariable = 0;
        if (inductionVariable < rangeSize)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            destination[destinationOffset + index | 0] = source[startIndex + index | 0];
          }
           while (inductionVariable < rangeSize);
      } else {
        var inductionVariable_0 = rangeSize - 1 | 0;
        if (0 <= inductionVariable_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + -1 | 0;
            destination[destinationOffset + index_0 | 0] = source[startIndex + index_0 | 0];
          }
           while (0 <= inductionVariable_0);
      }
    }
  }
  function copyToArray_0(collection) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = collection;
      break $l$block;
    }
    if (tmp$ret$0.toArray !== undefined) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = collection;
          break $l$block_0;
        }
        var tmp0_unsafeCast_0 = tmp$ret$1.toArray();
        tmp$ret$2 = tmp0_unsafeCast_0;
        break $l$block_1;
      }
      tmp = tmp$ret$2;
    } else {
      {
        var tmp$ret$4;
        $l$block_3: {
          var tmp1_unsafeCast_0 = copyToArrayImpl_0(collection);
          var tmp$ret$3;
          $l$block_2: {
            tmp$ret$3 = tmp1_unsafeCast_0;
            break $l$block_2;
          }
          tmp$ret$4 = tmp$ret$3;
          break $l$block_3;
        }
        tmp = tmp$ret$4;
      }
    }
    return tmp;
  }
  function copyToArrayImpl_0(collection) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = [];
      break $l$block;
    }
    var array = tmp$ret$0;
    var iterator = collection.iterator_0_k$();
    while (iterator.hasNext_0_k$()) {
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = array;
        break $l$block_0;
      }
      tmp$ret$1.push(iterator.next_0_k$());
    }
    return array;
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  AbstractMutableCollection.prototype.addAll_dxd4eo_k$ = function (elements) {
    this.checkIsMutable_sv8swh_k$();
    var modified = false;
    var tmp0_iterator = elements.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var element = tmp0_iterator.next_0_k$();
      if (this.add_2bq_k$(element))
        modified = true;
    }
    return modified;
  };
  AbstractMutableCollection.prototype.toJSON = function () {
    return this.toArray();
  };
  AbstractMutableCollection.prototype.checkIsMutable_sv8swh_k$ = function () {
  };
  AbstractMutableCollection.$metadata$ = {
    simpleName: 'AbstractMutableCollection',
    kind: 'class',
    interfaces: [MutableCollection]
  };
  function IteratorImpl($outer) {
    this._$this = $outer;
    this._index = 0;
    this._last_1 = -1;
  }
  IteratorImpl.prototype.hasNext_0_k$ = function () {
    return this._index < this._$this._get_size__0_k$();
  };
  IteratorImpl.prototype.next_0_k$ = function () {
    if (!this.hasNext_0_k$())
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp0_this = this;
    var tmp1 = tmp0_this._index;
    tmp0_this._index = tmp1 + 1 | 0;
    tmp._last_1 = tmp1;
    return this._$this.get_ha5a7z_k$(this._last_1);
  };
  IteratorImpl.$metadata$ = {
    simpleName: 'IteratorImpl',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function AbstractMutableList() {
    AbstractMutableCollection.call(this);
    this._modCount = 0;
  }
  AbstractMutableList.prototype._set_modCount__majfzk_k$ = function (_set___) {
    this._modCount = _set___;
  };
  AbstractMutableList.prototype._get_modCount__0_k$ = function () {
    return this._modCount;
  };
  AbstractMutableList.prototype.add_2bq_k$ = function (element) {
    this.checkIsMutable_sv8swh_k$();
    this.add_vz2mgm_k$(this._get_size__0_k$(), element);
    return true;
  };
  AbstractMutableList.prototype.iterator_0_k$ = function () {
    return new IteratorImpl(this);
  };
  AbstractMutableList.prototype.contains_2bq_k$ = function (element) {
    return this.indexOf_2bq_k$(element) >= 0;
  };
  AbstractMutableList.prototype.indexOf_2bq_k$ = function (element) {
    var inductionVariable = 0;
    var last_0 = _get_lastIndex_(this);
    if (inductionVariable <= last_0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals_1(this.get_ha5a7z_k$(index), element)) {
          return index;
        }}
       while (!(index === last_0));
    return -1;
  };
  AbstractMutableList.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, List) : false))
      return false;
    else {
    }
    return Companion_getInstance().orderedEquals_tuq55s_k$(this, other);
  };
  AbstractMutableList.prototype.hashCode = function () {
    return Companion_getInstance().orderedHashCode_dxd51x_k$(this);
  };
  AbstractMutableList.$metadata$ = {
    simpleName: 'AbstractMutableList',
    kind: 'class',
    interfaces: [MutableList]
  };
  function _no_name_provided__10($entryIterator) {
    this._$entryIterator = $entryIterator;
  }
  _no_name_provided__10.prototype.hasNext_0_k$ = function () {
    return this._$entryIterator.hasNext_0_k$();
  };
  _no_name_provided__10.prototype.next_0_k$ = function () {
    return this._$entryIterator.next_0_k$()._get_key__0_k$();
  };
  _no_name_provided__10.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function SimpleEntry(key, value) {
    this._key_0 = key;
    this.__value_0 = value;
  }
  SimpleEntry.prototype._get_key__0_k$ = function () {
    return this._key_0;
  };
  SimpleEntry.prototype._get_value__0_k$ = function () {
    return this.__value_0;
  };
  SimpleEntry.prototype.setValue_2c7_k$ = function (newValue) {
    var oldValue = this.__value_0;
    this.__value_0 = newValue;
    return oldValue;
  };
  SimpleEntry.prototype.hashCode = function () {
    return Companion_getInstance_0().entryHashCode_4vm2wp_k$(this);
  };
  SimpleEntry.prototype.toString = function () {
    return Companion_getInstance_0().entryToString_4vm2wp_k$(this);
  };
  SimpleEntry.prototype.equals = function (other) {
    return Companion_getInstance_0().entryEquals_caydzc_k$(this, other);
  };
  SimpleEntry.$metadata$ = {
    simpleName: 'SimpleEntry',
    kind: 'class',
    interfaces: [MutableEntry]
  };
  function AbstractEntrySet() {
    AbstractMutableSet.call(this);
  }
  AbstractEntrySet.prototype.contains_2bq_k$ = function (element) {
    return this.containsEntry_4v0zae_k$(element);
  };
  AbstractEntrySet.$metadata$ = {
    simpleName: 'AbstractEntrySet',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__11(this$0) {
    this._this$0_4 = this$0;
    AbstractMutableSet.call(this);
  }
  _no_name_provided__11.prototype.add_2bw_k$ = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on keys');
  };
  _no_name_provided__11.prototype.add_2bq_k$ = function (element) {
    return this.add_2bw_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__11.prototype.contains_2bw_k$ = function (element) {
    return this._this$0_4.containsKey_2bw_k$(element);
  };
  _no_name_provided__11.prototype.contains_2bq_k$ = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.contains_2bw_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__11.prototype.iterator_0_k$ = function () {
    var entryIterator = this._this$0_4._get_entries__0_k$().iterator_0_k$();
    return new _no_name_provided__10(entryIterator);
  };
  _no_name_provided__11.prototype._get_size__0_k$ = function () {
    return this._this$0_4._get_size__0_k$();
  };
  _no_name_provided__11.prototype.checkIsMutable_sv8swh_k$ = function () {
    return this._this$0_4.checkIsMutable_sv8swh_k$();
  };
  _no_name_provided__11.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMutableMap() {
    AbstractMap.call(this);
    this.__keys_0 = null;
    this.__values_0 = null;
  }
  AbstractMutableMap.prototype._get_keys__0_k$ = function () {
    if (this.__keys_0 == null) {
      var tmp = this;
      tmp.__keys_0 = new _no_name_provided__11(this);
    }return ensureNotNull(this.__keys_0);
  };
  AbstractMutableMap.prototype.putAll_nn707j_k$ = function (from) {
    this.checkIsMutable_sv8swh_k$();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = from._get_entries__0_k$().iterator_0_k$();
      break $l$block;
    }
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.hasNext_0_k$()) {
      var tmp1_loop_parameter = tmp0_iterator.next_0_k$();
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = tmp1_loop_parameter._get_key__0_k$();
        break $l$block_0;
      }
      var key = tmp$ret$1;
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = tmp1_loop_parameter._get_value__0_k$();
        break $l$block_1;
      }
      var value = tmp$ret$2;
      this.put_1q9pf_k$(key, value);
      Unit_getInstance();
    }
  };
  AbstractMutableMap.prototype.checkIsMutable_sv8swh_k$ = function () {
  };
  AbstractMutableMap.$metadata$ = {
    simpleName: 'AbstractMutableMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function AbstractMutableSet() {
    AbstractMutableCollection.call(this);
  }
  AbstractMutableSet.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    else {
    }
    return Companion_getInstance_1().setEquals_qlktm2_k$(this, other);
  };
  AbstractMutableSet.prototype.hashCode = function () {
    return Companion_getInstance_1().unorderedHashCode_dxd51x_k$(this);
  };
  AbstractMutableSet.$metadata$ = {
    simpleName: 'AbstractMutableSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function ArrayList_init_$Init$($this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = [];
      break $l$block;
    }
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$() {
    return ArrayList_init_$Init$(Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_0(initialCapacity, $this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = [];
      break $l$block;
    }
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$_0(initialCapacity) {
    return ArrayList_init_$Init$_0(initialCapacity, Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_1(elements, $this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = copyToArray_0(elements);
      break $l$block;
    }
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$_1(elements) {
    return ArrayList_init_$Init$_1(elements, Object.create(ArrayList.prototype));
  }
  function rangeCheck($this, index) {
    var tmp$ret$0;
    $l$block: {
      {
      }
      {
        Companion_getInstance().checkElementIndex_rvwcgf_k$(index, $this._get_size__0_k$());
      }
      tmp$ret$0 = index;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function insertionRangeCheck($this, index) {
    var tmp$ret$0;
    $l$block: {
      {
      }
      {
        Companion_getInstance().checkPositionIndex_rvwcgf_k$(index, $this._get_size__0_k$());
      }
      tmp$ret$0 = index;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function ArrayList(array) {
    AbstractMutableList.call(this);
    this._array = array;
    this._isReadOnly = false;
  }
  ArrayList.prototype.trimToSize_sv8swh_k$ = function () {
  };
  ArrayList.prototype._get_size__0_k$ = function () {
    return this._array.length;
  };
  ArrayList.prototype.get_ha5a7z_k$ = function (index) {
    var tmp = this._array[rangeCheck(this, index)];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  ArrayList.prototype.add_2bq_k$ = function (element) {
    this.checkIsMutable_sv8swh_k$();
    var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = this._array;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    tmp$ret$0.push(element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0_k$();
    tmp0_this._set_modCount__majfzk_k$(tmp1 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.add_vz2mgm_k$ = function (index, element) {
    this.checkIsMutable_sv8swh_k$();
    var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = this._array;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    tmp$ret$0.splice(insertionRangeCheck(this, index), 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0_k$();
    tmp0_this._set_modCount__majfzk_k$(tmp1 + 1 | 0);
    Unit_getInstance();
  };
  ArrayList.prototype.addAll_dxd4eo_k$ = function (elements) {
    this.checkIsMutable_sv8swh_k$();
    if (elements.isEmpty_0_k$())
      return false;
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_plus_0 = tmp0_this._array;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = copyToArray_0(elements);
        break $l$block;
      }
      var tmp1_plus_0 = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = tmp0_plus_0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1.concat(tmp1_plus_0);
      break $l$block_1;
    }
    tmp._array = tmp$ret$2;
    var tmp1_this = this;
    var tmp2 = tmp1_this._get_modCount__0_k$();
    tmp1_this._set_modCount__majfzk_k$(tmp2 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.indexOf_2bq_k$ = function (element) {
    return indexOf(this._array, element);
  };
  ArrayList.prototype.toString = function () {
    return arrayToString(this._array);
  };
  ArrayList.prototype.toArray_0_k$ = function () {
    return [].slice.call(this._array);
  };
  ArrayList.prototype.toArray = function () {
    return this.toArray_0_k$();
  };
  ArrayList.prototype.checkIsMutable_sv8swh_k$ = function () {
    if (this._isReadOnly)
      throw UnsupportedOperationException_init_$Create$();
  };
  ArrayList.$metadata$ = {
    simpleName: 'ArrayList',
    kind: 'class',
    interfaces: [MutableList, RandomAccess]
  };
  function HashCode() {
    HashCode_instance = this;
  }
  HashCode.prototype.equals_rvz98i_k$ = function (value1, value2) {
    return equals_1(value1, value2);
  };
  HashCode.prototype.getHashCode_wi7j7l_k$ = function (value) {
    var tmp0_safe_receiver = value;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  HashCode.$metadata$ = {
    simpleName: 'HashCode',
    kind: 'object',
    interfaces: [EqualityComparator]
  };
  var HashCode_instance;
  function HashCode_getInstance() {
    if (HashCode_instance == null)
      new HashCode();
    return HashCode_instance;
  }
  function EqualityComparator() {
  }
  EqualityComparator.$metadata$ = {
    simpleName: 'EqualityComparator',
    kind: 'interface',
    interfaces: []
  };
  function EntrySet($outer) {
    this._$this_0 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet.prototype.add_qbahou_k$ = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet.prototype.add_2bq_k$ = function (element) {
    return this.add_qbahou_k$((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet.prototype.containsEntry_4v0zae_k$ = function (element) {
    return this._$this_0.containsEntry_7gsh9e_k$(element);
  };
  EntrySet.prototype.iterator_0_k$ = function () {
    return this._$this_0._internalMap.iterator_0_k$();
  };
  EntrySet.prototype._get_size__0_k$ = function () {
    return this._$this_0._get_size__0_k$();
  };
  EntrySet.$metadata$ = {
    simpleName: 'EntrySet',
    kind: 'class',
    interfaces: []
  };
  function HashMap_init_$Init$(internalMap, $this) {
    AbstractMutableMap.call($this);
    HashMap.call($this);
    $this._internalMap = internalMap;
    $this._equality = internalMap._get_equality__0_k$();
    return $this;
  }
  function HashMap_init_$Init$_0($this) {
    HashMap_init_$Init$(new InternalHashCodeMap(HashCode_getInstance()), $this);
    return $this;
  }
  function HashMap_init_$Create$() {
    return HashMap_init_$Init$_0(Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_0($this);
    {
      var tmp0_require_0 = initialCapacity >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = '' + 'Negative initial capacity: ' + initialCapacity;
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_1(message_1));
      }}
    {
      var tmp1_require_0 = loadFactor >= 0;
      {
      }
      if (!tmp1_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = '' + 'Non-positive load factor: ' + loadFactor;
          break $l$block_0;
        }
        var message_1_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString_1(message_1_0));
      }}
    return $this;
  }
  function HashMap_init_$Create$_0(initialCapacity, loadFactor) {
    return HashMap_init_$Init$_1(initialCapacity, loadFactor, Object.create(HashMap.prototype));
  }
  HashMap.prototype.containsKey_2bw_k$ = function (key) {
    return this._internalMap.contains_2bw_k$(key);
  };
  HashMap.prototype._get_entries__0_k$ = function () {
    if (this.__entries == null) {
      this.__entries = this.createEntrySet_0_k$();
    }return ensureNotNull(this.__entries);
  };
  HashMap.prototype.createEntrySet_0_k$ = function () {
    return new EntrySet(this);
  };
  HashMap.prototype.get_2bw_k$ = function (key) {
    return this._internalMap.get_2bw_k$(key);
  };
  HashMap.prototype.put_1q9pf_k$ = function (key, value) {
    return this._internalMap.put_1q9pf_k$(key, value);
  };
  HashMap.prototype._get_size__0_k$ = function () {
    return this._internalMap._get_size__0_k$();
  };
  function HashMap() {
    this.__entries = null;
  }
  HashMap.$metadata$ = {
    simpleName: 'HashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function HashSet_init_$Init$(initialCapacity, loadFactor, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this._map = HashMap_init_$Create$_0(initialCapacity, loadFactor);
    return $this;
  }
  function HashSet_init_$Init$_0(initialCapacity, $this) {
    HashSet_init_$Init$(initialCapacity, 0.0, $this);
    return $this;
  }
  function HashSet_init_$Create$(initialCapacity) {
    return HashSet_init_$Init$_0(initialCapacity, Object.create(HashSet.prototype));
  }
  function HashSet_init_$Init$_1(map_0, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this._map = map_0;
    return $this;
  }
  HashSet.prototype._get_map__0_k$ = function () {
    return this._map;
  };
  HashSet.prototype.add_2bq_k$ = function (element) {
    var old = this._map.put_1q9pf_k$(element, this);
    return old == null;
  };
  HashSet.prototype.contains_2bq_k$ = function (element) {
    return this._map.containsKey_2bw_k$(element);
  };
  HashSet.prototype.isEmpty_0_k$ = function () {
    return this._map.isEmpty_0_k$();
  };
  HashSet.prototype.iterator_0_k$ = function () {
    return this._map._get_keys__0_k$().iterator_0_k$();
  };
  HashSet.prototype._get_size__0_k$ = function () {
    return this._map._get_size__0_k$();
  };
  function HashSet() {
  }
  HashSet.$metadata$ = {
    simpleName: 'HashSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function computeNext($this) {
    if ($this._chainOrEntry != null ? $this._isChain : false) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = $this._chainOrEntry;
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      var chainSize = tmp$ret$0.length;
      var tmp0_this = $this;
      tmp0_this._itemIndex = tmp0_this._itemIndex + 1 | 0;
      if (tmp0_this._itemIndex < chainSize)
        return 0;
      else {
      }
    }var tmp1_this = $this;
    tmp1_this._keyIndex = tmp1_this._keyIndex + 1 | 0;
    if (tmp1_this._keyIndex < $this._keys.length) {
      $this._chainOrEntry = $this._this$0_5._backingMap[$this._keys[$this._keyIndex]];
      var tmp = $this;
      var tmp_0 = $this._chainOrEntry;
      tmp._isChain = !(tmp_0 == null) ? isArray(tmp_0) : false;
      $this._itemIndex = 0;
      return 0;
    } else {
      {
        $this._chainOrEntry = null;
        return 1;
      }
    }
  }
  function getEntry($this, key) {
    var tmp0_elvis_lhs = getChainOrEntryOrNull($this, $this._equality_0.getHashCode_wi7j7l_k$(key));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var chainOrEntry = tmp;
    if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
      var entry = chainOrEntry;
      if ($this._equality_0.equals_rvz98i_k$(entry._get_key__0_k$(), key)) {
        return entry;
      } else {
        return null;
      }
    } else {
      {
        var chain = chainOrEntry;
        return findEntryInChain(chain, $this, key);
      }
    }
  }
  function findEntryInChain(_this_, $this, key) {
    var tmp$ret$1;
    $l$block_1: {
      var indexedObject = _this_;
      var inductionVariable = 0;
      var last_0 = indexedObject.length;
      while (inductionVariable < last_0) {
        var element_2 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = $this._equality_0.equals_rvz98i_k$(element_2._get_key__0_k$(), key);
          break $l$block;
        }
        if (tmp$ret$0) {
          tmp$ret$1 = element_2;
          break $l$block_1;
        } else {
        }
      }
      tmp$ret$1 = null;
      break $l$block_1;
    }
    return tmp$ret$1;
  }
  function getChainOrEntryOrNull($this, hashCode_1) {
    var chainOrEntry = $this._backingMap[hashCode_1];
    return chainOrEntry === undefined ? null : chainOrEntry;
  }
  function _no_name_provided__12(this$0) {
    this._this$0_5 = this$0;
    this._state = -1;
    this._keys = Object.keys(this._this$0_5._backingMap);
    this._keyIndex = -1;
    this._chainOrEntry = null;
    this._isChain = false;
    this._itemIndex = -1;
    this._lastEntry = null;
  }
  _no_name_provided__12.prototype.hasNext_0_k$ = function () {
    if (this._state === -1)
      this._state = computeNext(this);
    return this._state === 0;
  };
  _no_name_provided__12.prototype.next_0_k$ = function () {
    if (!this.hasNext_0_k$())
      throw NoSuchElementException_init_$Create$();
    var tmp;
    if (this._isChain) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = this._chainOrEntry;
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp = tmp$ret$0[this._itemIndex];
    } else {
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_unsafeCast_0 = this._chainOrEntry;
        tmp$ret$1 = tmp1_unsafeCast_0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var lastEntry = tmp;
    this._lastEntry = lastEntry;
    this._state = -1;
    return lastEntry;
  };
  _no_name_provided__12.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function InternalHashCodeMap(equality) {
    this._equality_0 = equality;
    this._backingMap = this.createJsMap_0_k$();
    this._size_0 = 0;
  }
  InternalHashCodeMap.prototype._get_equality__0_k$ = function () {
    return this._equality_0;
  };
  InternalHashCodeMap.prototype._get_size__0_k$ = function () {
    return this._size_0;
  };
  InternalHashCodeMap.prototype.put_1q9pf_k$ = function (key, value) {
    var hashCode_1 = this._equality_0.getHashCode_wi7j7l_k$(key);
    var chainOrEntry = getChainOrEntryOrNull(this, hashCode_1);
    if (chainOrEntry == null) {
      this._backingMap[hashCode_1] = new SimpleEntry(key, value);
    } else {
      if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
        var entry = chainOrEntry;
        if (this._equality_0.equals_rvz98i_k$(entry._get_key__0_k$(), key)) {
          return entry.setValue_2c7_k$(value);
        } else {
          var tmp$ret$2;
          $l$block_1: {
            var tmp0_arrayOf_0 = [entry, new SimpleEntry(key, value)];
            var tmp$ret$1;
            $l$block_0: {
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = tmp0_arrayOf_0;
                break $l$block;
              }
              tmp$ret$1 = tmp$ret$0;
              break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
          }
          this._backingMap[hashCode_1] = tmp$ret$2;
          var tmp0_this = this;
          var tmp1 = tmp0_this._size_0;
          tmp0_this._size_0 = tmp1 + 1 | 0;
          Unit_getInstance();
          return null;
        }
      } else {
        {
          var chain = chainOrEntry;
          var entry_0 = findEntryInChain(chain, this, key);
          if (!(entry_0 == null)) {
            return entry_0.setValue_2c7_k$(value);
          }var tmp$ret$3;
          $l$block_2: {
            tmp$ret$3 = chain;
            break $l$block_2;
          }
          tmp$ret$3.push(new SimpleEntry(key, value));
        }
      }
    }
    var tmp2_this = this;
    var tmp3 = tmp2_this._size_0;
    tmp2_this._size_0 = tmp3 + 1 | 0;
    Unit_getInstance();
    return null;
  };
  InternalHashCodeMap.prototype.contains_2bw_k$ = function (key) {
    return !(getEntry(this, key) == null);
  };
  InternalHashCodeMap.prototype.get_2bw_k$ = function (key) {
    var tmp0_safe_receiver = getEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__0_k$();
  };
  InternalHashCodeMap.prototype.iterator_0_k$ = function () {
    return new _no_name_provided__12(this);
  };
  InternalHashCodeMap.$metadata$ = {
    simpleName: 'InternalHashCodeMap',
    kind: 'class',
    interfaces: [InternalMap]
  };
  function InternalMap() {
  }
  InternalMap.prototype.createJsMap_0_k$ = function () {
    var result = Object.create(null);
    result['foo'] = 1;
    jsDeleteProperty(result, 'foo');
    return result;
  };
  InternalMap.$metadata$ = {
    simpleName: 'InternalMap',
    kind: 'interface',
    interfaces: [MutableIterable]
  };
  function EntryIterator($outer) {
    this._$this_1 = $outer;
    this._last_2 = null;
    this._next_2 = null;
    this._next_2 = this._$this_1._$this_3._head;
  }
  EntryIterator.prototype.hasNext_0_k$ = function () {
    return !(this._next_2 === null);
  };
  EntryIterator.prototype.next_0_k$ = function () {
    if (!this.hasNext_0_k$())
      throw NoSuchElementException_init_$Create$();
    var current = ensureNotNull(this._next_2);
    this._last_2 = current;
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_takeIf_0 = current._next_3;
      {
      }
      var tmp_0;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = !(tmp0_takeIf_0 === this._$this_1._$this_3._head);
        break $l$block;
      }
      if (tmp$ret$0) {
        tmp_0 = tmp0_takeIf_0;
      } else {
        {
          tmp_0 = null;
        }
      }
      tmp$ret$1 = tmp_0;
      break $l$block_0;
    }
    tmp._next_2 = tmp$ret$1;
    return current;
  };
  EntryIterator.$metadata$ = {
    simpleName: 'EntryIterator',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function ChainEntry($outer, key, value) {
    this._$this_2 = $outer;
    SimpleEntry.call(this, key, value);
    this._next_3 = null;
    this._prev = null;
  }
  ChainEntry.prototype.setValue_2c7_k$ = function (newValue) {
    this._$this_2.checkIsMutable_sv8swh_k$();
    return SimpleEntry.prototype.setValue_2c7_k$.call(this, newValue);
  };
  ChainEntry.$metadata$ = {
    simpleName: 'ChainEntry',
    kind: 'class',
    interfaces: []
  };
  function EntrySet_0($outer) {
    this._$this_3 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet_0.prototype.add_qbahou_k$ = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet_0.prototype.add_2bq_k$ = function (element) {
    return this.add_qbahou_k$((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet_0.prototype.containsEntry_4v0zae_k$ = function (element) {
    return this._$this_3.containsEntry_7gsh9e_k$(element);
  };
  EntrySet_0.prototype.iterator_0_k$ = function () {
    return new EntryIterator(this);
  };
  EntrySet_0.prototype._get_size__0_k$ = function () {
    return this._$this_3._get_size__0_k$();
  };
  EntrySet_0.prototype.checkIsMutable_sv8swh_k$ = function () {
    return this._$this_3.checkIsMutable_sv8swh_k$();
  };
  EntrySet_0.$metadata$ = {
    simpleName: 'EntrySet',
    kind: 'class',
    interfaces: []
  };
  function addToEnd(_this_, $this) {
    {
      var tmp0_check_0 = _this_._next_3 == null ? _this_._prev == null : false;
      {
      }
      {
        {
        }
        if (!tmp0_check_0) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'Check failed.';
            break $l$block;
          }
          var message_2_1 = tmp$ret$0;
          throw IllegalStateException_init_$Create$(toString_1(message_2_1));
        }}
    }
    var _head = $this._head;
    if (_head == null) {
      $this._head = _this_;
      _this_._next_3 = _this_;
      _this_._prev = _this_;
    } else {
      var tmp$ret$3;
      $l$block_2: {
        var tmp1_checkNotNull_0 = _head._prev;
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          {
          }
          if (tmp1_checkNotNull_0 == null) {
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = 'Required value was null.';
              break $l$block_0;
            }
            var message_2_1_0 = tmp$ret$1;
            throw IllegalStateException_init_$Create$(toString_1(message_2_1_0));
          } else {
            tmp$ret$2 = tmp1_checkNotNull_0;
            break $l$block_1;
          }
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      var _tail = tmp$ret$3;
      _this_._prev = _tail;
      _this_._next_3 = _head;
      _head._prev = _this_;
      _tail._next_3 = _this_;
    }
  }
  function LinkedHashMap_init_$Init$($this) {
    HashMap_init_$Init$_0($this);
    LinkedHashMap.call($this);
    $this._map_0 = HashMap_init_$Create$();
    return $this;
  }
  function LinkedHashMap_init_$Create$() {
    return LinkedHashMap_init_$Init$(Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_0(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_1(initialCapacity, loadFactor, $this);
    LinkedHashMap.call($this);
    $this._map_0 = HashMap_init_$Create$();
    return $this;
  }
  function LinkedHashMap_init_$Create$_0(initialCapacity, loadFactor) {
    return LinkedHashMap_init_$Init$_0(initialCapacity, loadFactor, Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_1(initialCapacity, $this) {
    LinkedHashMap_init_$Init$_0(initialCapacity, 0.0, $this);
    return $this;
  }
  function LinkedHashMap_init_$Create$_1(initialCapacity) {
    return LinkedHashMap_init_$Init$_1(initialCapacity, Object.create(LinkedHashMap.prototype));
  }
  LinkedHashMap.prototype.containsKey_2bw_k$ = function (key) {
    return this._map_0.containsKey_2bw_k$(key);
  };
  LinkedHashMap.prototype.createEntrySet_0_k$ = function () {
    return new EntrySet_0(this);
  };
  LinkedHashMap.prototype.get_2bw_k$ = function (key) {
    var tmp0_safe_receiver = this._map_0.get_2bw_k$(key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__0_k$();
  };
  LinkedHashMap.prototype.put_1q9pf_k$ = function (key, value) {
    this.checkIsMutable_sv8swh_k$();
    var old = this._map_0.get_2bw_k$(key);
    if (old == null) {
      var newEntry = new ChainEntry(this, key, value);
      this._map_0.put_1q9pf_k$(key, newEntry);
      Unit_getInstance();
      addToEnd(newEntry, this);
      return null;
    } else {
      return old.setValue_2c7_k$(value);
    }
  };
  LinkedHashMap.prototype._get_size__0_k$ = function () {
    return this._map_0._get_size__0_k$();
  };
  LinkedHashMap.prototype.checkIsMutable_sv8swh_k$ = function () {
    if (this._isReadOnly_0)
      throw UnsupportedOperationException_init_$Create$();
  };
  function LinkedHashMap() {
    this._head = null;
    this._isReadOnly_0 = false;
  }
  LinkedHashMap.$metadata$ = {
    simpleName: 'LinkedHashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function LinkedHashSet_init_$Init$($this) {
    HashSet_init_$Init$_1(LinkedHashMap_init_$Create$(), $this);
    LinkedHashSet.call($this);
    return $this;
  }
  function LinkedHashSet_init_$Create$() {
    return LinkedHashSet_init_$Init$(Object.create(LinkedHashSet.prototype));
  }
  function LinkedHashSet_init_$Init$_0(initialCapacity, loadFactor, $this) {
    HashSet_init_$Init$_1(LinkedHashMap_init_$Create$_0(initialCapacity, loadFactor), $this);
    LinkedHashSet.call($this);
    return $this;
  }
  function LinkedHashSet_init_$Init$_1(initialCapacity, $this) {
    LinkedHashSet_init_$Init$_0(initialCapacity, 0.0, $this);
    return $this;
  }
  function LinkedHashSet_init_$Create$_0(initialCapacity) {
    return LinkedHashSet_init_$Init$_1(initialCapacity, Object.create(LinkedHashSet.prototype));
  }
  LinkedHashSet.prototype.checkIsMutable_sv8swh_k$ = function () {
    return this._get_map__0_k$().checkIsMutable_sv8swh_k$();
  };
  function LinkedHashSet() {
  }
  LinkedHashSet.$metadata$ = {
    simpleName: 'LinkedHashSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function RandomAccess() {
  }
  RandomAccess.$metadata$ = {
    simpleName: 'RandomAccess',
    kind: 'interface',
    interfaces: []
  };
  function CancellationException_init_$Init$(message, $this) {
    IllegalStateException_init_$Init$(message, $this);
    CancellationException.call($this);
    return $this;
  }
  function CancellationException_init_$Create$(message) {
    var tmp = CancellationException_init_$Init$(message, Object.create(CancellationException.prototype));
    captureStack(tmp, CancellationException_init_$Create$);
    return tmp;
  }
  function CancellationException_init_$Init$_0(message, cause, $this) {
    IllegalStateException_init_$Init$_0(message, cause, $this);
    CancellationException.call($this);
    return $this;
  }
  function CancellationException() {
    captureStack(this, CancellationException);
  }
  CancellationException.$metadata$ = {
    simpleName: 'CancellationException',
    kind: 'class',
    interfaces: []
  };
  function Serializable() {
  }
  Serializable.$metadata$ = {
    simpleName: 'Serializable',
    kind: 'interface',
    interfaces: []
  };
  function isNaN_0(_this_) {
    return !(_this_ === _this_);
  }
  function _get_js_(_this_) {
    return (_this_ instanceof KClassImpl ? _this_ : THROW_CCE())._get_jClass__0_k$();
  }
  function KCallable() {
  }
  KCallable.$metadata$ = {
    simpleName: 'KCallable',
    kind: 'interface',
    interfaces: []
  };
  function KClass() {
  }
  KClass.$metadata$ = {
    simpleName: 'KClass',
    kind: 'interface',
    interfaces: [KClassifier]
  };
  function KClassImpl(jClass) {
    this._jClass = jClass;
  }
  KClassImpl.prototype._get_jClass__0_k$ = function () {
    return this._jClass;
  };
  KClassImpl.prototype.equals = function (other) {
    var tmp;
    if (other instanceof KClassImpl) {
      tmp = equals_1(this._get_jClass__0_k$(), other._get_jClass__0_k$());
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  KClassImpl.prototype.hashCode = function () {
    var tmp0_safe_receiver = this._get_simpleName__0_k$();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  KClassImpl.prototype.toString = function () {
    return '' + 'class ' + this._get_simpleName__0_k$();
  };
  KClassImpl.$metadata$ = {
    simpleName: 'KClassImpl',
    kind: 'class',
    interfaces: [KClass]
  };
  function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
    KClassImpl.call(this, jClass);
    this._givenSimpleName = givenSimpleName;
    this._isInstanceFunction = isInstanceFunction;
  }
  PrimitiveKClassImpl.prototype.equals = function (other) {
    if (!(other instanceof PrimitiveKClassImpl))
      return false;
    else {
    }
    return KClassImpl.prototype.equals.call(this, other) ? this._givenSimpleName === other._givenSimpleName : false;
  };
  PrimitiveKClassImpl.prototype._get_simpleName__0_k$ = function () {
    return this._givenSimpleName;
  };
  PrimitiveKClassImpl.$metadata$ = {
    simpleName: 'PrimitiveKClassImpl',
    kind: 'class',
    interfaces: []
  };
  function NothingKClassImpl() {
    NothingKClassImpl_instance = this;
    KClassImpl.call(this, Object);
    this._simpleName = 'Nothing';
  }
  NothingKClassImpl.prototype._get_simpleName__0_k$ = function () {
    return this._simpleName;
  };
  NothingKClassImpl.prototype._get_jClass__0_k$ = function () {
    throw UnsupportedOperationException_init_$Create$_0("There's no native JS class for Nothing type");
  };
  NothingKClassImpl.prototype.equals = function (other) {
    return other === this;
  };
  NothingKClassImpl.prototype.hashCode = function () {
    return 0;
  };
  NothingKClassImpl.$metadata$ = {
    simpleName: 'NothingKClassImpl',
    kind: 'object',
    interfaces: []
  };
  var NothingKClassImpl_instance;
  function NothingKClassImpl_getInstance() {
    if (NothingKClassImpl_instance == null)
      new NothingKClassImpl();
    return NothingKClassImpl_instance;
  }
  function ErrorKClass() {
  }
  ErrorKClass.prototype._get_simpleName__0_k$ = function () {
    throw IllegalStateException_init_$Create$('Unknown simpleName for ErrorKClass');
  };
  ErrorKClass.prototype.equals = function (other) {
    return other === this;
  };
  ErrorKClass.prototype.hashCode = function () {
    return 0;
  };
  ErrorKClass.$metadata$ = {
    simpleName: 'ErrorKClass',
    kind: 'class',
    interfaces: [KClass]
  };
  function SimpleKClassImpl(jClass) {
    KClassImpl.call(this, jClass);
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = jClass;
        break $l$block;
      }
      var tmp0_safe_receiver = tmp$ret$0.$metadata$;
      var tmp0_unsafeCast_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName;
      tmp$ret$1 = tmp0_unsafeCast_0;
      break $l$block_0;
    }
    tmp._simpleName_0 = tmp$ret$1;
  }
  SimpleKClassImpl.prototype._get_simpleName__0_k$ = function () {
    return this._simpleName_0;
  };
  SimpleKClassImpl.$metadata$ = {
    simpleName: 'SimpleKClassImpl',
    kind: 'class',
    interfaces: []
  };
  function KMutableProperty1() {
  }
  KMutableProperty1.$metadata$ = {
    simpleName: 'KMutableProperty1',
    kind: 'interface',
    interfaces: [KProperty1, KMutableProperty]
  };
  function KProperty() {
  }
  KProperty.$metadata$ = {
    simpleName: 'KProperty',
    kind: 'interface',
    interfaces: [KCallable]
  };
  function KProperty0() {
  }
  KProperty0.$metadata$ = {
    simpleName: 'KProperty0',
    kind: 'interface',
    interfaces: [KProperty]
  };
  function KProperty1() {
  }
  KProperty1.$metadata$ = {
    simpleName: 'KProperty1',
    kind: 'interface',
    interfaces: [KProperty]
  };
  function KMutableProperty() {
  }
  KMutableProperty.$metadata$ = {
    simpleName: 'KMutableProperty',
    kind: 'interface',
    interfaces: [KProperty]
  };
  var functionClasses;
  function _no_name_provided__13() {
  }
  _no_name_provided__13.prototype.invoke_wi7j7l_k$ = function (it) {
    return isObject(it);
  };
  _no_name_provided__13.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__13.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__14() {
  }
  _no_name_provided__14.prototype.invoke_wi7j7l_k$ = function (it) {
    return isNumber(it);
  };
  _no_name_provided__14.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__14.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__15() {
  }
  _no_name_provided__15.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'boolean' : false;
  };
  _no_name_provided__15.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__15.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__16() {
  }
  _no_name_provided__16.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__16.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__16.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__17() {
  }
  _no_name_provided__17.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__17.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__17.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__18() {
  }
  _no_name_provided__18.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__18.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__18.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__19() {
  }
  _no_name_provided__19.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__19.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__19.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__20() {
  }
  _no_name_provided__20.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__20.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__20.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__21() {
  }
  _no_name_provided__21.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isArray(it) : false;
  };
  _no_name_provided__21.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__21.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__22() {
  }
  _no_name_provided__22.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'string' : false;
  };
  _no_name_provided__22.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__22.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__23() {
  }
  _no_name_provided__23.prototype.invoke_wi7j7l_k$ = function (it) {
    return it instanceof Error;
  };
  _no_name_provided__23.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__23.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__24() {
  }
  _no_name_provided__24.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isBooleanArray(it) : false;
  };
  _no_name_provided__24.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__24.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__25() {
  }
  _no_name_provided__25.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isCharArray(it) : false;
  };
  _no_name_provided__25.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__25.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__26() {
  }
  _no_name_provided__26.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isByteArray(it) : false;
  };
  _no_name_provided__26.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__26.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__27() {
  }
  _no_name_provided__27.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isShortArray(it) : false;
  };
  _no_name_provided__27.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__27.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__28() {
  }
  _no_name_provided__28.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isIntArray(it) : false;
  };
  _no_name_provided__28.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__28.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__29() {
  }
  _no_name_provided__29.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isLongArray(it) : false;
  };
  _no_name_provided__29.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__29.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__30() {
  }
  _no_name_provided__30.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isFloatArray(it) : false;
  };
  _no_name_provided__30.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__30.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__31() {
  }
  _no_name_provided__31.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isDoubleArray(it) : false;
  };
  _no_name_provided__31.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__31.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__32($arity) {
    this._$arity = $arity;
  }
  _no_name_provided__32.prototype.invoke_wi7j7l_k$ = function (it) {
    var tmp;
    if (typeof it === 'function') {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = it;
        break $l$block;
      }
      tmp = tmp$ret$0.length === this._$arity;
    } else {
      tmp = false;
    }
    return tmp;
  };
  _no_name_provided__32.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__32.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function PrimitiveClasses_0() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Object;
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    var tmp_0 = tmp$ret$0;
    tmp._anyClass = new PrimitiveKClassImpl(tmp_0, 'Any', _no_name_provided_$factory_6());
    var tmp_1 = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unsafeCast_0_0 = Number;
      tmp$ret$1 = tmp0_unsafeCast_0_0;
      break $l$block_0;
    }
    var tmp_2 = tmp$ret$1;
    tmp_1._numberClass = new PrimitiveKClassImpl(tmp_2, 'Number', _no_name_provided_$factory_7());
    this._nothingClass = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_unsafeCast_0_1 = Boolean;
      tmp$ret$2 = tmp0_unsafeCast_0_1;
      break $l$block_1;
    }
    var tmp_4 = tmp$ret$2;
    tmp_3._booleanClass = new PrimitiveKClassImpl(tmp_4, 'Boolean', _no_name_provided_$factory_8());
    var tmp_5 = this;
    var tmp$ret$3;
    $l$block_2: {
      var tmp0_unsafeCast_0_2 = Number;
      tmp$ret$3 = tmp0_unsafeCast_0_2;
      break $l$block_2;
    }
    var tmp_6 = tmp$ret$3;
    tmp_5._byteClass = new PrimitiveKClassImpl(tmp_6, 'Byte', _no_name_provided_$factory_9());
    var tmp_7 = this;
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_unsafeCast_0_3 = Number;
      tmp$ret$4 = tmp0_unsafeCast_0_3;
      break $l$block_3;
    }
    var tmp_8 = tmp$ret$4;
    tmp_7._shortClass = new PrimitiveKClassImpl(tmp_8, 'Short', _no_name_provided_$factory_10());
    var tmp_9 = this;
    var tmp$ret$5;
    $l$block_4: {
      var tmp0_unsafeCast_0_4 = Number;
      tmp$ret$5 = tmp0_unsafeCast_0_4;
      break $l$block_4;
    }
    var tmp_10 = tmp$ret$5;
    tmp_9._intClass = new PrimitiveKClassImpl(tmp_10, 'Int', _no_name_provided_$factory_11());
    var tmp_11 = this;
    var tmp$ret$6;
    $l$block_5: {
      var tmp0_unsafeCast_0_5 = Number;
      tmp$ret$6 = tmp0_unsafeCast_0_5;
      break $l$block_5;
    }
    var tmp_12 = tmp$ret$6;
    tmp_11._floatClass = new PrimitiveKClassImpl(tmp_12, 'Float', _no_name_provided_$factory_12());
    var tmp_13 = this;
    var tmp$ret$7;
    $l$block_6: {
      var tmp0_unsafeCast_0_6 = Number;
      tmp$ret$7 = tmp0_unsafeCast_0_6;
      break $l$block_6;
    }
    var tmp_14 = tmp$ret$7;
    tmp_13._doubleClass = new PrimitiveKClassImpl(tmp_14, 'Double', _no_name_provided_$factory_13());
    var tmp_15 = this;
    var tmp$ret$8;
    $l$block_7: {
      var tmp0_unsafeCast_0_7 = Array;
      tmp$ret$8 = tmp0_unsafeCast_0_7;
      break $l$block_7;
    }
    var tmp_16 = tmp$ret$8;
    tmp_15._arrayClass = new PrimitiveKClassImpl(tmp_16, 'Array', _no_name_provided_$factory_14());
    var tmp_17 = this;
    var tmp$ret$9;
    $l$block_8: {
      var tmp0_unsafeCast_0_8 = String;
      tmp$ret$9 = tmp0_unsafeCast_0_8;
      break $l$block_8;
    }
    var tmp_18 = tmp$ret$9;
    tmp_17._stringClass = new PrimitiveKClassImpl(tmp_18, 'String', _no_name_provided_$factory_15());
    var tmp_19 = this;
    var tmp$ret$10;
    $l$block_9: {
      var tmp0_unsafeCast_0_9 = Error;
      tmp$ret$10 = tmp0_unsafeCast_0_9;
      break $l$block_9;
    }
    var tmp_20 = tmp$ret$10;
    tmp_19._throwableClass = new PrimitiveKClassImpl(tmp_20, 'Throwable', _no_name_provided_$factory_16());
    var tmp_21 = this;
    var tmp$ret$11;
    $l$block_10: {
      var tmp0_unsafeCast_0_10 = Array;
      tmp$ret$11 = tmp0_unsafeCast_0_10;
      break $l$block_10;
    }
    var tmp_22 = tmp$ret$11;
    tmp_21._booleanArrayClass = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', _no_name_provided_$factory_17());
    var tmp_23 = this;
    var tmp$ret$12;
    $l$block_11: {
      var tmp0_unsafeCast_0_11 = Uint16Array;
      tmp$ret$12 = tmp0_unsafeCast_0_11;
      break $l$block_11;
    }
    var tmp_24 = tmp$ret$12;
    tmp_23._charArrayClass = new PrimitiveKClassImpl(tmp_24, 'CharArray', _no_name_provided_$factory_18());
    var tmp_25 = this;
    var tmp$ret$13;
    $l$block_12: {
      var tmp0_unsafeCast_0_12 = Int8Array;
      tmp$ret$13 = tmp0_unsafeCast_0_12;
      break $l$block_12;
    }
    var tmp_26 = tmp$ret$13;
    tmp_25._byteArrayClass = new PrimitiveKClassImpl(tmp_26, 'ByteArray', _no_name_provided_$factory_19());
    var tmp_27 = this;
    var tmp$ret$14;
    $l$block_13: {
      var tmp0_unsafeCast_0_13 = Int16Array;
      tmp$ret$14 = tmp0_unsafeCast_0_13;
      break $l$block_13;
    }
    var tmp_28 = tmp$ret$14;
    tmp_27._shortArrayClass = new PrimitiveKClassImpl(tmp_28, 'ShortArray', _no_name_provided_$factory_20());
    var tmp_29 = this;
    var tmp$ret$15;
    $l$block_14: {
      var tmp0_unsafeCast_0_14 = Int32Array;
      tmp$ret$15 = tmp0_unsafeCast_0_14;
      break $l$block_14;
    }
    var tmp_30 = tmp$ret$15;
    tmp_29._intArrayClass = new PrimitiveKClassImpl(tmp_30, 'IntArray', _no_name_provided_$factory_21());
    var tmp_31 = this;
    var tmp$ret$16;
    $l$block_15: {
      var tmp0_unsafeCast_0_15 = Array;
      tmp$ret$16 = tmp0_unsafeCast_0_15;
      break $l$block_15;
    }
    var tmp_32 = tmp$ret$16;
    tmp_31._longArrayClass = new PrimitiveKClassImpl(tmp_32, 'LongArray', _no_name_provided_$factory_22());
    var tmp_33 = this;
    var tmp$ret$17;
    $l$block_16: {
      var tmp0_unsafeCast_0_16 = Float32Array;
      tmp$ret$17 = tmp0_unsafeCast_0_16;
      break $l$block_16;
    }
    var tmp_34 = tmp$ret$17;
    tmp_33._floatArrayClass = new PrimitiveKClassImpl(tmp_34, 'FloatArray', _no_name_provided_$factory_23());
    var tmp_35 = this;
    var tmp$ret$18;
    $l$block_17: {
      var tmp0_unsafeCast_0_17 = Float64Array;
      tmp$ret$18 = tmp0_unsafeCast_0_17;
      break $l$block_17;
    }
    var tmp_36 = tmp$ret$18;
    tmp_35._doubleArrayClass = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', _no_name_provided_$factory_24());
  }
  PrimitiveClasses_0.prototype._get_anyClass__0_k$ = function () {
    return this._anyClass;
  };
  PrimitiveClasses_0.prototype._get_numberClass__0_k$ = function () {
    return this._numberClass;
  };
  PrimitiveClasses_0.prototype._get_nothingClass__0_k$ = function () {
    return this._nothingClass;
  };
  PrimitiveClasses_0.prototype._get_booleanClass__0_k$ = function () {
    return this._booleanClass;
  };
  PrimitiveClasses_0.prototype._get_byteClass__0_k$ = function () {
    return this._byteClass;
  };
  PrimitiveClasses_0.prototype._get_shortClass__0_k$ = function () {
    return this._shortClass;
  };
  PrimitiveClasses_0.prototype._get_intClass__0_k$ = function () {
    return this._intClass;
  };
  PrimitiveClasses_0.prototype._get_floatClass__0_k$ = function () {
    return this._floatClass;
  };
  PrimitiveClasses_0.prototype._get_doubleClass__0_k$ = function () {
    return this._doubleClass;
  };
  PrimitiveClasses_0.prototype._get_arrayClass__0_k$ = function () {
    return this._arrayClass;
  };
  PrimitiveClasses_0.prototype._get_stringClass__0_k$ = function () {
    return this._stringClass;
  };
  PrimitiveClasses_0.prototype._get_throwableClass__0_k$ = function () {
    return this._throwableClass;
  };
  PrimitiveClasses_0.prototype._get_booleanArrayClass__0_k$ = function () {
    return this._booleanArrayClass;
  };
  PrimitiveClasses_0.prototype._get_charArrayClass__0_k$ = function () {
    return this._charArrayClass;
  };
  PrimitiveClasses_0.prototype._get_byteArrayClass__0_k$ = function () {
    return this._byteArrayClass;
  };
  PrimitiveClasses_0.prototype._get_shortArrayClass__0_k$ = function () {
    return this._shortArrayClass;
  };
  PrimitiveClasses_0.prototype._get_intArrayClass__0_k$ = function () {
    return this._intArrayClass;
  };
  PrimitiveClasses_0.prototype._get_longArrayClass__0_k$ = function () {
    return this._longArrayClass;
  };
  PrimitiveClasses_0.prototype._get_floatArrayClass__0_k$ = function () {
    return this._floatArrayClass;
  };
  PrimitiveClasses_0.prototype._get_doubleArrayClass__0_k$ = function () {
    return this._doubleArrayClass;
  };
  PrimitiveClasses_0.prototype.functionClass = function (arity) {
    var tmp0_elvis_lhs = functionClasses[arity];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$3;
      $l$block_2: {
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$0;
          $l$block: {
            var tmp0_unsafeCast_0_3 = Function;
            tmp$ret$0 = tmp0_unsafeCast_0_3;
            break $l$block;
          }
          var tmp_0 = tmp$ret$0;
          var tmp_1 = '' + 'Function' + arity;
          var result_2 = new PrimitiveKClassImpl(tmp_0, tmp_1, _no_name_provided_$factory_25(arity));
          var tmp$ret$1;
          $l$block_0: {
            var tmp1_asDynamic_0_5 = functionClasses;
            tmp$ret$1 = tmp1_asDynamic_0_5;
            break $l$block_0;
          }
          tmp$ret$1[arity] = result_2;
          tmp$ret$2 = result_2;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      tmp = tmp$ret$3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PrimitiveClasses_0.$metadata$ = {
    simpleName: 'PrimitiveClasses',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(PrimitiveClasses_0.prototype, 'anyClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_anyClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'numberClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_numberClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'nothingClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_nothingClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'arrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_arrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'stringClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_stringClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'throwableClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_throwableClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'charArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_charArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'longArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_longArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleArrayClass__0_k$
  });
  var PrimitiveClasses_instance;
  function PrimitiveClasses_getInstance() {
    if (PrimitiveClasses_instance == null)
      new PrimitiveClasses_0();
    return PrimitiveClasses_instance;
  }
  function _no_name_provided_$factory_6() {
    var i = new _no_name_provided__13();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_7() {
    var i = new _no_name_provided__14();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_8() {
    var i = new _no_name_provided__15();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_9() {
    var i = new _no_name_provided__16();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_10() {
    var i = new _no_name_provided__17();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_11() {
    var i = new _no_name_provided__18();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_12() {
    var i = new _no_name_provided__19();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_13() {
    var i = new _no_name_provided__20();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_14() {
    var i = new _no_name_provided__21();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_15() {
    var i = new _no_name_provided__22();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_16() {
    var i = new _no_name_provided__23();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_17() {
    var i = new _no_name_provided__24();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_18() {
    var i = new _no_name_provided__25();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_19() {
    var i = new _no_name_provided__26();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_20() {
    var i = new _no_name_provided__27();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_21() {
    var i = new _no_name_provided__28();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_22() {
    var i = new _no_name_provided__29();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_23() {
    var i = new _no_name_provided__30();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_24() {
    var i = new _no_name_provided__31();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_25($arity) {
    var i = new _no_name_provided__32($arity);
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function functionClasses$init$() {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(0), null);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function getKClass_0(jClass) {
    var tmp;
    if (Array.isArray(jClass)) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = jClass;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = getKClassM_0(tmp$ret$1);
    } else {
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = jClass;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      tmp = getKClass1_0(tmp$ret$3);
    }
    return tmp;
  }
  function getKClassM_0(jClasses) {
    var tmp0_subject = jClasses.length;
    var tmp;
    switch (tmp0_subject) {
      case 1:
        tmp = getKClass1_0(jClasses[0]);
        break;
      case 0:
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_unsafeCast_0 = NothingKClassImpl_getInstance();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_unsafeCast_0;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }

        tmp = tmp$ret$1;
        break;
      default:var tmp$ret$3;
        $l$block_2: {
          var tmp1_unsafeCast_0 = new ErrorKClass();
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = tmp1_unsafeCast_0;
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }

        tmp = tmp$ret$3;
        break;
    }
    return tmp;
  }
  function getKClass1_0(jClass) {
    if (jClass === String) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_unsafeCast_0 = PrimitiveClasses_getInstance()._stringClass;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_unsafeCast_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      return tmp$ret$1;
    }var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = jClass;
      break $l$block_1;
    }
    var metadata = tmp$ret$2.$metadata$;
    var tmp;
    if (metadata != null) {
      var tmp_0;
      if (metadata.$kClass$ == null) {
        var kClass = new SimpleKClassImpl(jClass);
        metadata.$kClass$ = kClass;
        tmp_0 = kClass;
      } else {
        tmp_0 = metadata.$kClass$;
      }
      tmp = tmp_0;
    } else {
      tmp = new SimpleKClassImpl(jClass);
    }
    return tmp;
  }
  function getKClassFromExpression_0(e) {
    var tmp$ret$3;
    $l$block_2: {
      var tmp0_subject = typeof e;
      var tmp;
      switch (tmp0_subject) {
        case 'string':
          tmp = PrimitiveClasses_getInstance()._stringClass;
          break;
        case 'number':
          var tmp_0;
          var tmp$ret$0;
          $l$block: {
            var tmp0_asDynamic_0 = jsBitwiseOr(e, 0);
            tmp$ret$0 = tmp0_asDynamic_0;
            break $l$block;
          }

          if (tmp$ret$0 === e) {
            tmp_0 = PrimitiveClasses_getInstance()._intClass;
          } else {
            {
              tmp_0 = PrimitiveClasses_getInstance()._doubleClass;
            }
          }

          tmp = tmp_0;
          break;
        case 'boolean':
          tmp = PrimitiveClasses_getInstance()._booleanClass;
          break;
        case 'function':
          var tmp_1 = PrimitiveClasses_getInstance();
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = e;
            break $l$block_0;
          }

          tmp = tmp_1.functionClass(tmp$ret$1.length);
          break;
        default:var tmp_2;
          if (isBooleanArray(e)) {
            tmp_2 = PrimitiveClasses_getInstance()._booleanArrayClass;
          } else {
            if (isCharArray(e)) {
              tmp_2 = PrimitiveClasses_getInstance()._charArrayClass;
            } else {
              if (isByteArray(e)) {
                tmp_2 = PrimitiveClasses_getInstance()._byteArrayClass;
              } else {
                if (isShortArray(e)) {
                  tmp_2 = PrimitiveClasses_getInstance()._shortArrayClass;
                } else {
                  if (isIntArray(e)) {
                    tmp_2 = PrimitiveClasses_getInstance()._intArrayClass;
                  } else {
                    if (isLongArray(e)) {
                      tmp_2 = PrimitiveClasses_getInstance()._longArrayClass;
                    } else {
                      if (isFloatArray(e)) {
                        tmp_2 = PrimitiveClasses_getInstance()._floatArrayClass;
                      } else {
                        if (isDoubleArray(e)) {
                          tmp_2 = PrimitiveClasses_getInstance()._doubleArrayClass;
                        } else {
                          if (isInterface(e, KClass)) {
                            tmp_2 = getKClass_0(KClass);
                          } else {
                            if (isArray(e)) {
                              tmp_2 = PrimitiveClasses_getInstance()._arrayClass;
                            } else {
                              {
                                var constructor = Object.getPrototypeOf(e).constructor;
                                var tmp_3;
                                if (constructor === Object) {
                                  tmp_3 = PrimitiveClasses_getInstance()._anyClass;
                                } else if (constructor === Error) {
                                  tmp_3 = PrimitiveClasses_getInstance()._throwableClass;
                                } else {
                                  var jsClass = constructor;
                                  tmp_3 = getKClass1_0(jsClass);
                                }
                                tmp_2 = tmp_3;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          tmp = tmp_2;
          break;
      }
      var tmp1_unsafeCast_0 = tmp;
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = tmp1_unsafeCast_0;
        break $l$block_1;
      }
      tmp$ret$3 = tmp$ret$2;
      break $l$block_2;
    }
    return tmp$ret$3;
  }
  function Appendable() {
  }
  Appendable.$metadata$ = {
    simpleName: 'Appendable',
    kind: 'interface',
    interfaces: []
  };
  function StringBuilder_init_$Init$(capacity, $this) {
    StringBuilder_init_$Init$_0($this);
    return $this;
  }
  function StringBuilder_init_$Create$(capacity) {
    return StringBuilder_init_$Init$(capacity, Object.create(StringBuilder.prototype));
  }
  function StringBuilder_init_$Init$_0($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$_0() {
    return StringBuilder_init_$Init$_0(Object.create(StringBuilder.prototype));
  }
  function StringBuilder(content) {
    this._string = !(content === undefined) ? content : '';
  }
  StringBuilder.prototype._get_length__0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = this._string;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    return tmp$ret$0.length;
  };
  StringBuilder.prototype.get_ha5a7z_k$ = function (index) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getOrElse_0 = this._string;
      var tmp;
      if (index >= 0 ? index <= _get_lastIndex__0(tmp0_getOrElse_0) : false) {
        tmp = charSequenceGet(tmp0_getOrElse_0, index);
      } else {
        throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', length: ' + this._get_length__0_k$() + '}');
      }
      tmp$ret$0 = tmp;
      break $l$block;
    }
    return tmp$ret$0;
  };
  StringBuilder.prototype.subSequence_27zxwg_k$ = function (startIndex, endIndex) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_substring_0 = this._string;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_substring_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.substring(startIndex, endIndex);
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  StringBuilder.prototype.append_wi8o78_k$ = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + value;
    return this;
  };
  StringBuilder.prototype.append_v1o70a_k$ = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + toString_0(value);
    return this;
  };
  StringBuilder.prototype.append_n5ylwa_k$ = function (value, startIndex, endIndex) {
    var tmp0_elvis_lhs = value;
    return this.appendRange_icedxh_k$(tmp0_elvis_lhs == null ? 'null' : tmp0_elvis_lhs, startIndex, endIndex);
  };
  StringBuilder.prototype.append_wi7j7l_k$ = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + toString_0(value);
    return this;
  };
  StringBuilder.prototype.append_uch40_k$ = function (value) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this._string;
    var tmp1_elvis_lhs = value;
    tmp._string = tmp_0 + (tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs);
    return this;
  };
  StringBuilder.prototype.toString = function () {
    return this._string;
  };
  StringBuilder.prototype.clear_0_k$ = function () {
    this._string = '';
    return this;
  };
  StringBuilder.prototype.appendRange_icedxh_k$ = function (value, startIndex, endIndex) {
    var stringCsq = toString_1(value);
    Companion_getInstance().checkBoundsIndexes_zd700_k$(startIndex, endIndex, stringCsq.length);
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this._string;
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = stringCsq;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.substring(startIndex, endIndex);
      break $l$block_0;
    }
    tmp._string = tmp_0 + tmp$ret$1;
    return this;
  };
  StringBuilder.$metadata$ = {
    simpleName: 'StringBuilder',
    kind: 'class',
    interfaces: [Appendable, CharSequence]
  };
  function uppercaseChar(_this_) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_asDynamic_0 = _this_.toString();
          tmp$ret$0 = tmp0_asDynamic_0;
          break $l$block;
        }
        var tmp1_unsafeCast_0 = tmp$ret$0.toUpperCase();
        tmp$ret$1 = tmp1_unsafeCast_0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    var uppercase = tmp$ret$2;
    return uppercase.length > 1 ? _this_ : charSequenceGet(uppercase, 0);
  }
  function isHighSurrogate(_this_) {
    Companion_getInstance_9();
    var containsLower = new Char(55296);
    var tmp;
    Companion_getInstance_9();
    if (_this_ <= new Char(56319)) {
      tmp = containsLower <= _this_;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  }
  function isLowSurrogate(_this_) {
    Companion_getInstance_9();
    var containsLower = new Char(56320);
    var tmp;
    Companion_getInstance_9();
    if (_this_ <= new Char(57343)) {
      tmp = containsLower <= _this_;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  }
  function isWhitespace(_this_) {
    return isWhitespaceImpl(_this_);
  }
  function toDoubleOrNull(_this_) {
    var tmp$ret$3;
    $l$block_2: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _this_;
          break $l$block;
        }
        var tmp0_unsafeCast_0 = +tmp$ret$0;
        tmp$ret$1 = tmp0_unsafeCast_0;
        break $l$block_0;
      }
      var tmp1_takeIf_0 = tmp$ret$1;
      {
      }
      var tmp;
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = !((isNaN_0(tmp1_takeIf_0) ? !isNaN_1(_this_) : false) ? true : tmp1_takeIf_0 === 0.0 ? isBlank(_this_) : false);
        break $l$block_1;
      }
      if (tmp$ret$2) {
        tmp = tmp1_takeIf_0;
      } else {
        {
          tmp = null;
        }
      }
      tmp$ret$3 = tmp;
      break $l$block_2;
    }
    return tmp$ret$3;
  }
  function isNaN_1(_this_) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _this_;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.toLowerCase();
      break $l$block_0;
    }
    var tmp0_subject = tmp$ret$1;
    switch (tmp0_subject) {
      case 'nan':
      case '+nan':
      case '-nan':
        return true;
      default:return false;
    }
  }
  function Regex_init_$Init$(pattern, $this) {
    Regex.call($this, pattern, emptySet());
    return $this;
  }
  function Regex_init_$Create$(pattern) {
    return Regex_init_$Init$(pattern, Object.create(Regex.prototype));
  }
  function Companion_9() {
    Companion_instance_8 = this;
    this._patternEscape = new RegExp('[\\\\^$*+?.()|[\\]{}]', 'g');
    this._replacementEscape = new RegExp('[\\\\$]', 'g');
    this._nativeReplacementEscape = new RegExp('\\$', 'g');
  }
  Companion_9.prototype.escape_6wfw3l_k$ = function (literal) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_nativeReplace_0 = this._patternEscape;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = literal;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.replace(tmp0_nativeReplace_0, '\\$&');
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  Companion_9.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_9();
    return Companion_instance_8;
  }
  function Regex(pattern, options) {
    Companion_getInstance_8();
    this._pattern = pattern;
    this._options = toSet_0(options);
    this._nativePattern = new RegExp(pattern, toFlags(options, 'gu'));
    this._nativeStickyPattern = null;
    this._nativeMatchesEntirePattern = null;
  }
  Regex.prototype.toString = function () {
    return this._nativePattern.toString();
  };
  Regex.$metadata$ = {
    simpleName: 'Regex',
    kind: 'class',
    interfaces: []
  };
  function RegexOption() {
  }
  RegexOption.$metadata$ = {
    simpleName: 'RegexOption',
    kind: 'class',
    interfaces: []
  };
  function toFlags(_this_, prepend) {
    return joinToString$default_0(_this_, '', prepend, null, 0, null, _no_name_provided_$factory_26(), 28, null);
  }
  function _no_name_provided__33() {
  }
  _no_name_provided__33.prototype.invoke_ot21mf_k$ = function (it) {
    return it._value;
  };
  _no_name_provided__33.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_ot21mf_k$(p1 instanceof RegexOption ? p1 : THROW_CCE());
  };
  _no_name_provided__33.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_26() {
    var i = new _no_name_provided__33();
    return function (p1) {
      return i.invoke_ot21mf_k$(p1);
    };
  }
  function equals_0(_this_, other, ignoreCase) {
    if (_this_ == null)
      return other == null;
    if (other == null)
      return false;
    if (!ignoreCase)
      return _this_ == other;
    if (!(_this_.length === other.length))
      return false;
    var inductionVariable = 0;
    var last_0 = _this_.length;
    if (inductionVariable < last_0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var thisChar = charSequenceGet(_this_, index);
        var otherChar = charSequenceGet(other, index);
        if (!equals(thisChar, otherChar, ignoreCase)) {
          return false;
        }}
       while (inductionVariable < last_0);
    return true;
  }
  function isBlank(_this_) {
    var tmp;
    if (charSequenceLength(_this_) === 0) {
      tmp = true;
    } else {
      var tmp$ret$0;
      $l$block_2: {
        var tmp0_all_0 = _get_indices_(_this_);
        var tmp_0;
        if (isInterface(tmp0_all_0, Collection)) {
          tmp_0 = tmp0_all_0.isEmpty_0_k$();
        } else {
          {
            tmp_0 = false;
          }
        }
        if (tmp_0) {
          tmp$ret$0 = true;
          break $l$block_2;
        } else {
        }
        var inductionVariable = tmp0_all_0._get_first__0_k$();
        var last_0 = tmp0_all_0._get_last__0_k$();
        if (inductionVariable <= last_0)
          do {
            var element_2 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = isWhitespace(charSequenceGet(_this_, element_2));
              break $l$block_0;
            }
            if (!tmp$ret$1) {
              tmp$ret$0 = false;
              break $l$block_2;
            } else {
            }
          }
           while (!(element_2 === last_0));
        tmp$ret$0 = true;
        break $l$block_2;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function startsWith_0(_this_, prefix, ignoreCase) {
    if (!ignoreCase) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _this_;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0.startsWith(prefix, 0);
        break $l$block_0;
      }
      return tmp$ret$1;
    } else
      return regionMatches(_this_, 0, prefix, 0, prefix.length, ignoreCase);
  }
  function startsWith$default_0(_this_, prefix, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ignoreCase = false;
    return startsWith_0(_this_, prefix, ignoreCase);
  }
  function regionMatches(_this_, thisOffset, other, otherOffset, length, ignoreCase) {
    return regionMatchesImpl(_this_, thisOffset, other, otherOffset, length, ignoreCase);
  }
  function Companion_10() {
    Companion_instance_9 = this;
    this._MIN_VALUE_1 = new Char(0);
    this._MAX_VALUE_1 = new Char(65535);
    this._MIN_HIGH_SURROGATE = new Char(55296);
    this._MAX_HIGH_SURROGATE = new Char(56319);
    this._MIN_LOW_SURROGATE = new Char(56320);
    this._MAX_LOW_SURROGATE = new Char(57343);
    this._MIN_SURROGATE = new Char(55296);
    this._MAX_SURROGATE = new Char(57343);
    this._SIZE_BYTES_1 = 2;
    this._SIZE_BITS_1 = 16;
  }
  Companion_10.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_10();
    return Companion_instance_9;
  }
  function Char(code) {
    Companion_getInstance_9();
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _UShort___get_data__impl_(code) & 65535;
      break $l$block;
    }
    tmp._value_0 = tmp$ret$0;
  }
  Char.prototype.compareTo_wi8o78_k$ = function (other) {
    return this._value_0 - other._value_0 | 0;
  };
  Char.prototype.compareTo_2c5_k$ = function (other) {
    return this.compareTo_wi8o78_k$(other instanceof Char ? other : THROW_CCE());
  };
  Char.prototype.plus_ha5a7z_k$ = function (other) {
    return numberToChar(this._value_0 + other | 0);
  };
  Char.prototype.minus_ha5a7z_k$ = function (other) {
    return numberToChar(this._value_0 - other | 0);
  };
  Char.prototype.rangeTo_wi8o78_k$ = function (other) {
    return new CharRange(this, other);
  };
  Char.prototype.toByte_0_k$ = function () {
    return toByte(this._value_0);
  };
  Char.prototype.toInt_0_k$ = function () {
    return this._value_0;
  };
  Char.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Char))
      return false;
    else {
    }
    return this._value_0 === other._value_0;
  };
  Char.prototype.hashCode = function () {
    return this._value_0;
  };
  Char.prototype.toString = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = String.fromCharCode(this._value_0);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Char.$metadata$ = {
    simpleName: 'Char',
    kind: 'class',
    interfaces: [Comparable]
  };
  function Iterable() {
  }
  Iterable.$metadata$ = {
    simpleName: 'Iterable',
    kind: 'interface',
    interfaces: []
  };
  function List() {
  }
  List.$metadata$ = {
    simpleName: 'List',
    kind: 'interface',
    interfaces: [Collection]
  };
  function MutableSet() {
  }
  MutableSet.$metadata$ = {
    simpleName: 'MutableSet',
    kind: 'interface',
    interfaces: [Set, MutableCollection]
  };
  function Set() {
  }
  Set.$metadata$ = {
    simpleName: 'Set',
    kind: 'interface',
    interfaces: [Collection]
  };
  function Entry() {
  }
  Entry.$metadata$ = {
    simpleName: 'Entry',
    kind: 'interface',
    interfaces: []
  };
  function Map_0() {
  }
  Map_0.$metadata$ = {
    simpleName: 'Map',
    kind: 'interface',
    interfaces: []
  };
  function MutableEntry() {
  }
  MutableEntry.$metadata$ = {
    simpleName: 'MutableEntry',
    kind: 'interface',
    interfaces: [Entry]
  };
  function MutableMap() {
  }
  MutableMap.$metadata$ = {
    simpleName: 'MutableMap',
    kind: 'interface',
    interfaces: [Map_0]
  };
  function MutableList() {
  }
  MutableList.$metadata$ = {
    simpleName: 'MutableList',
    kind: 'interface',
    interfaces: [List, MutableCollection]
  };
  function MutableCollection() {
  }
  MutableCollection.$metadata$ = {
    simpleName: 'MutableCollection',
    kind: 'interface',
    interfaces: [Collection, MutableIterable]
  };
  function Collection() {
  }
  Collection.$metadata$ = {
    simpleName: 'Collection',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function MutableIterable() {
  }
  MutableIterable.$metadata$ = {
    simpleName: 'MutableIterable',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function Companion_11() {
    Companion_instance_10 = this;
  }
  Companion_11.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_11();
    return Companion_instance_10;
  }
  function Enum(name, ordinal) {
    Companion_getInstance_10();
    this._name = name;
    this._ordinal = ordinal;
  }
  Enum.prototype.compareTo_2bq_k$ = function (other) {
    return compareTo(this._ordinal, other._ordinal);
  };
  Enum.prototype.compareTo_2c5_k$ = function (other) {
    return this.compareTo_2bq_k$(other instanceof Enum ? other : THROW_CCE());
  };
  Enum.prototype.equals = function (other) {
    return this === other;
  };
  Enum.prototype.hashCode = function () {
    return identityHashCode(this);
  };
  Enum.prototype.toString = function () {
    return this._name;
  };
  Enum.$metadata$ = {
    simpleName: 'Enum',
    kind: 'class',
    interfaces: [Comparable]
  };
  function toString_0(_this_) {
    var tmp0_safe_receiver = _this_;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_1(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function fillArrayVal(array, initValue) {
    var inductionVariable = 0;
    var last_0 = array.length - 1 | 0;
    if (inductionVariable <= last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = initValue;
      }
       while (!(i === last_0));
    return array;
  }
  function arrayIterator(array) {
    return new _no_name_provided__34(array);
  }
  function charArray(size_0) {
    var tmp$ret$4;
    $l$block_3: {
      var tmp$ret$3;
      $l$block_2: {
        var tmp = Array(size_0);
        var tmp$ret$2;
        $l$block_1: {
          var tmp_0;
          var tmp$ret$0;
          $l$block: {
            Companion_getInstance_9();
            var tmp0__get_code__0_1 = new Char(0);
            tmp$ret$0 = tmp0__get_code__0_1.toInt_0_k$();
            break $l$block;
          }
          if (0 < tmp$ret$0) {
            tmp_0 = true;
          } else {
            {
              var tmp$ret$1;
              $l$block_0: {
                Companion_getInstance_9();
                var tmp1__get_code__0_2 = new Char(65535);
                tmp$ret$1 = tmp1__get_code__0_2.toInt_0_k$();
                break $l$block_0;
              }
              tmp_0 = 0 > tmp$ret$1;
            }
          }
          if (tmp_0) {
            throw IllegalArgumentException_init_$Create$('Invalid Char code: 0');
          } else {
          }
          tmp$ret$2 = new Char(0);
          break $l$block_1;
        }
        var tmp0_withType_0 = fillArrayVal(tmp, tmp$ret$2);
        tmp0_withType_0.$type$ = 'CharArray';
        tmp$ret$3 = tmp0_withType_0;
        break $l$block_2;
      }
      var tmp1_unsafeCast_0 = tmp$ret$3;
      tmp$ret$4 = tmp1_unsafeCast_0;
      break $l$block_3;
    }
    return tmp$ret$4;
  }
  function longArray(size_0) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_withType_0 = fillArrayVal(Array(size_0), new Long(0, 0));
        tmp0_withType_0.$type$ = 'LongArray';
        tmp$ret$0 = tmp0_withType_0;
        break $l$block;
      }
      var tmp1_unsafeCast_0 = tmp$ret$0;
      tmp$ret$1 = tmp1_unsafeCast_0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function charArrayOf(arr) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = arr;
          break $l$block;
        }
        var tmp0_withType_0 = tmp$ret$0.slice();
        tmp0_withType_0.$type$ = 'CharArray';
        tmp$ret$1 = tmp0_withType_0;
        break $l$block_0;
      }
      var tmp1_unsafeCast_0 = tmp$ret$1;
      tmp$ret$2 = tmp1_unsafeCast_0;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function _no_name_provided__34($array) {
    this._$array = $array;
    this._index_0 = 0;
  }
  _no_name_provided__34.prototype.hasNext_0_k$ = function () {
    return !(this._index_0 === this._$array.length);
  };
  _no_name_provided__34.prototype.next_0_k$ = function () {
    var tmp;
    if (!(this._index_0 === this._$array.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_0;
      tmp0_this._index_0 = tmp1 + 1 | 0;
      tmp = this._$array[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_0);
    }
    return tmp;
  };
  _no_name_provided__34.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  var buf;
  var bufFloat64;
  var bufInt32;
  var lowIndex;
  var highIndex;
  function getNumberHashCode(obj) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unsafeCast_0 = jsBitwiseOr(obj, 0);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    if (tmp$ret$1 === obj) {
      return numberToInt(obj);
    } else {
    }
    bufFloat64[0] = obj;
    return imul(bufInt32[highIndex], 31) + bufInt32[lowIndex] | 0;
  }
  function bufFloat64$init$() {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unsafeCast_0 = new Float64Array(buf);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function bufInt32$init$() {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unsafeCast_0 = new Int32Array(buf);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function lowIndex$init$() {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        bufFloat64[0] = -1.0;
        tmp$ret$0 = !(bufInt32[0] === 0) ? 1 : 0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function charSequenceGet(a, index) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$4;
      $l$block_3: {
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = a;
            break $l$block;
          }
          var tmp0_unsafeCast_0 = tmp$ret$0.charCodeAt(index);
          tmp$ret$1 = tmp0_unsafeCast_0;
          break $l$block_0;
        }
        var tmp1_Char_0 = tmp$ret$1;
        var tmp_0;
        var tmp$ret$2;
        $l$block_1: {
          Companion_getInstance_9();
          var tmp0__get_code__0_1 = new Char(0);
          tmp$ret$2 = tmp0__get_code__0_1.toInt_0_k$();
          break $l$block_1;
        }
        if (tmp1_Char_0 < tmp$ret$2) {
          tmp_0 = true;
        } else {
          {
            var tmp$ret$3;
            $l$block_2: {
              Companion_getInstance_9();
              var tmp1__get_code__0_2 = new Char(65535);
              tmp$ret$3 = tmp1__get_code__0_2.toInt_0_k$();
              break $l$block_2;
            }
            tmp_0 = tmp1_Char_0 > tmp$ret$3;
          }
        }
        if (tmp_0) {
          throw IllegalArgumentException_init_$Create$('' + 'Invalid Char code: ' + tmp1_Char_0);
        } else {
        }
        tmp$ret$4 = numberToChar(tmp1_Char_0);
        break $l$block_3;
      }
      tmp = tmp$ret$4;
    } else {
      tmp = a.get_ha5a7z_k$(index);
    }
    return tmp;
  }
  function isString(a) {
    return typeof a === 'string';
  }
  function charSequenceLength(a) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = a;
          break $l$block;
        }
        var tmp0_unsafeCast_0 = tmp$ret$0.length;
        tmp$ret$1 = tmp0_unsafeCast_0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = a._get_length__0_k$();
    }
    return tmp;
  }
  function charSequenceSubSequence(a, startIndex, endIndex) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = a;
          break $l$block;
        }
        var tmp0_unsafeCast_0 = tmp$ret$0.substring(startIndex, endIndex);
        tmp$ret$1 = tmp0_unsafeCast_0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = a.subSequence_27zxwg_k$(startIndex, endIndex);
    }
    return tmp;
  }
  function arrayToString(array) {
    return joinToString$default(array, ', ', '[', ']', 0, null, _no_name_provided_$factory_27(), 24, null);
  }
  function _no_name_provided__35() {
  }
  _no_name_provided__35.prototype.invoke_wi7j7l_k$ = function (it) {
    return toString_1(it);
  };
  _no_name_provided__35.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__35.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_27() {
    var i = new _no_name_provided__35();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function compareTo(a, b) {
    var tmp0_subject = typeof a;
    var tmp;
    switch (tmp0_subject) {
      case 'number':
        var tmp_0;
        if (typeof b === 'number') {
          tmp_0 = doubleCompareTo(a, b);
        } else {
          if (b instanceof Long) {
            tmp_0 = doubleCompareTo(a, b.toDouble_0_k$());
          } else {
            {
              tmp_0 = primitiveCompareTo(a, b);
            }
          }
        }

        tmp = tmp_0;
        break;
      case 'string':
      case 'boolean':
        tmp = primitiveCompareTo(a, b);
        break;
      default:tmp = compareToDoNotIntrinsicify(a, b);
        break;
    }
    return tmp;
  }
  function doubleCompareTo(a, b) {
    var tmp;
    if (a < b) {
      tmp = -1;
    } else if (a > b) {
      tmp = 1;
    } else if (a === b) {
      var tmp_0;
      if (a !== 0) {
        tmp_0 = 0;
      } else {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 1;
          break $l$block;
        }
        var ia = tmp$ret$0 / a;
        var tmp_1;
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 1;
          break $l$block_0;
        }
        if (ia === tmp$ret$1 / b) {
          tmp_1 = 0;
        } else {
          if (ia < 0) {
            tmp_1 = -1;
          } else {
            {
              tmp_1 = 1;
            }
          }
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else if (a !== a) {
      tmp = b !== b ? 0 : 1;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  function primitiveCompareTo(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function compareToDoNotIntrinsicify(a, b) {
    return a.compareTo_2c5_k$(b);
  }
  function identityHashCode(obj) {
    return getObjectHashCode(obj);
  }
  function getObjectHashCode(obj) {
    if (!jsIn('kotlinHashCodeValue$', obj)) {
      var hash = jsBitwiseOr(Math.random() * 4.294967296E9, 0);
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = obj['kotlinHashCodeValue$'];
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function toString_1(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = o.toString();
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function hashCode(obj) {
    if (obj == null)
      return 0;
    var tmp0_subject = typeof obj;
    var tmp;
    switch (tmp0_subject) {
      case 'object':
        tmp = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
        break;
      case 'function':
        tmp = getObjectHashCode(obj);
        break;
      case 'number':
        tmp = getNumberHashCode(obj);
        break;
      case 'boolean':
        var tmp_0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = obj;
          break $l$block;
        }

        if (tmp$ret$0) {
          tmp_0 = 1;
        } else {
          {
            tmp_0 = 0;
          }
        }

        tmp = tmp_0;
        break;
      default:tmp = getStringHashCode(String(obj));
        break;
    }
    return tmp;
  }
  function getStringHashCode(str) {
    var hash = 0;
    var length = str.length;
    var inductionVariable = 0;
    var last_0 = length - 1 | 0;
    if (inductionVariable <= last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = str;
          break $l$block;
        }
        var code = tmp$ret$0.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last_0));
    return hash;
  }
  function anyToString(o) {
    return Object.prototype.toString.call(o);
  }
  function equals_1(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null;
    }if (obj2 == null) {
      return false;
    }if (typeof obj1 === 'object' ? typeof obj1.equals === 'function' : false) {
      return obj1.equals(obj2);
    }if (obj1 !== obj1) {
      return obj2 !== obj2;
    }if (typeof obj1 === 'number' ? typeof obj2 === 'number' : false) {
      var tmp;
      if (obj1 === obj2) {
        var tmp_0;
        if (obj1 !== 0) {
          tmp_0 = true;
        } else {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 1;
            break $l$block;
          }
          var tmp_1 = tmp$ret$0 / obj1;
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = 1;
            break $l$block_0;
          }
          tmp_0 = tmp_1 === tmp$ret$1 / obj2;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }return obj1 === obj2;
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = instance;
        break $l$block;
      }
      tmp$ret$0.stack = (new Error()).stack;
    }
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    if (!hasOwnPrototypeProperty(this_, 'message')) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp0_safe_receiver = cause;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
          tmp_0 = tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs;
        } else {
          tmp_0 = undefined;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    }if (!hasOwnPrototypeProperty(this_, 'cause')) {
      this_.cause = cause;
    }this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Object.getPrototypeOf(o).hasOwnProperty(name);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function getContinuation() {
    throw Exception_init_$Create$('Implemented as intrinsic');
  }
  function ensureNotNull(v) {
    var tmp;
    if (v == null) {
      THROW_NPE();
    } else {
      tmp = v;
    }
    return tmp;
  }
  function THROW_NPE() {
    throw NullPointerException_init_$Create$();
  }
  function noWhenBranchMatchedException() {
    throw NoWhenBranchMatchedException_init_$Create$();
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function throwUninitializedPropertyAccessException(name) {
    throw UninitializedPropertyAccessException_init_$Create$('' + 'lateinit property ' + name + ' has not been initialized');
  }
  function lazy(initializer) {
    return new UnsafeLazyImpl(initializer);
  }
  function lazy_0(mode, initializer) {
    return new UnsafeLazyImpl(initializer);
  }
  function Companion_12() {
    Companion_instance_11 = this;
    this._MIN_VALUE_2 = new Long(0, -2147483648);
    this._MAX_VALUE_2 = new Long(-1, 2147483647);
    this._SIZE_BYTES_2 = 8;
    this._SIZE_BITS_2 = 64;
  }
  Companion_12.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_12();
    return Companion_instance_11;
  }
  function Long(low, high) {
    Companion_getInstance_11();
    Number_0.call(this);
    this._low = low;
    this._high = high;
  }
  Long.prototype.compareTo_wiekkq_k$ = function (other) {
    return compare(this, other);
  };
  Long.prototype.compareTo_2c5_k$ = function (other) {
    return this.compareTo_wiekkq_k$(other instanceof Long ? other : THROW_CCE());
  };
  Long.prototype.plus_wiekkq_k$ = function (other) {
    return add(this, other);
  };
  Long.prototype.minus_wiekkq_k$ = function (other) {
    return subtract(this, other);
  };
  Long.prototype.div_wiekkq_k$ = function (other) {
    return divide(this, other);
  };
  Long.prototype.inc_0_k$ = function () {
    return this.plus_wiekkq_k$(new Long(1, 0));
  };
  Long.prototype.dec_0_k$ = function () {
    return this.minus_wiekkq_k$(new Long(1, 0));
  };
  Long.prototype.unaryMinus_0_k$ = function () {
    return this.inv_0_k$().plus_wiekkq_k$(new Long(1, 0));
  };
  Long.prototype.inv_0_k$ = function () {
    return new Long(~this._low, ~this._high);
  };
  Long.prototype.toInt_0_k$ = function () {
    return this._low;
  };
  Long.prototype.toDouble_0_k$ = function () {
    return toNumber(this);
  };
  Long.prototype.valueOf = function () {
    return this.toDouble_0_k$();
  };
  Long.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Long) {
      tmp = equalsLong(this, other);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Long.prototype.hashCode = function () {
    return hashCode_0(this);
  };
  Long.prototype.toString = function () {
    return toStringImpl(this, 10);
  };
  Long.$metadata$ = {
    simpleName: 'Long',
    kind: 'class',
    interfaces: [Comparable]
  };
  var ZERO;
  var ONE;
  var NEG_ONE;
  var MAX_VALUE;
  var MIN_VALUE;
  var TWO_PWR_24_;
  function compare(_this_, other) {
    if (equalsLong(_this_, other)) {
      return 0;
    }var thisNeg = isNegative(_this_);
    var otherNeg = isNegative(other);
    return (thisNeg ? !otherNeg : false) ? -1 : (!thisNeg ? otherNeg : false) ? 1 : isNegative(subtract(_this_, other)) ? -1 : 1;
  }
  function add(_this_, other) {
    var a48 = _this_._high >>> 16;
    var a32 = _this_._high & 65535;
    var a16 = _this_._low >>> 16;
    var a00 = _this_._low & 65535;
    var b48 = other._high >>> 16;
    var b32 = other._high & 65535;
    var b16 = other._low >>> 16;
    var b00 = other._low & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + (a00 + b00 | 0) | 0;
    c16 = c16 + (c00 >>> 16) | 0;
    c00 = c00 & 65535;
    c16 = c16 + (a16 + b16 | 0) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c32 = c32 + (a32 + b32 | 0) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (a48 + b48 | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function subtract(_this_, other) {
    return add(_this_, other.unaryMinus_0_k$());
  }
  function multiply(_this_, other) {
    if (isZero(_this_)) {
      return ZERO;
    } else if (isZero(other)) {
      return ZERO;
    }if (equalsLong(_this_, MIN_VALUE)) {
      return isOdd(other) ? MIN_VALUE : ZERO;
    } else if (equalsLong(other, MIN_VALUE)) {
      return isOdd(_this_) ? MIN_VALUE : ZERO;
    }if (isNegative(_this_)) {
      var tmp;
      if (isNegative(other)) {
        tmp = multiply(negate(_this_), negate(other));
      } else {
        tmp = negate(multiply(negate(_this_), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(multiply(_this_, negate(other)));
    }if (lessThan(_this_, TWO_PWR_24_) ? lessThan(other, TWO_PWR_24_) : false) {
      return fromNumber(toNumber(_this_) * toNumber(other));
    }var a48 = _this_._high >>> 16;
    var a32 = _this_._high & 65535;
    var a16 = _this_._low >>> 16;
    var a00 = _this_._low & 65535;
    var b48 = other._high >>> 16;
    var b32 = other._high & 65535;
    var b16 = other._low >>> 16;
    var b00 = other._low & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + imul(a00, b00) | 0;
    c16 = c16 + (c00 >>> 16) | 0;
    c00 = c00 & 65535;
    c16 = c16 + imul(a16, b00) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c16 = c16 + imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c32 = c32 + imul(a32, b00) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a00, b32) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function divide(_this_, other) {
    if (isZero(other)) {
      throw Exception_init_$Create$('division by zero');
    } else if (isZero(_this_)) {
      return ZERO;
    }if (equalsLong(_this_, MIN_VALUE)) {
      if (equalsLong(other, ONE) ? true : equalsLong(other, NEG_ONE)) {
        return MIN_VALUE;
      } else if (equalsLong(other, MIN_VALUE)) {
        return ONE;
      } else {
        var halfThis = shiftRight(_this_, 1);
        var approx = shiftLeft(halfThis.div_wiekkq_k$(other), 1);
        if (equalsLong(approx, ZERO)) {
          return isNegative(other) ? ONE : NEG_ONE;
        } else {
          var rem = subtract(_this_, multiply(other, approx));
          return add(approx, rem.div_wiekkq_k$(other));
        }
      }
    } else if (equalsLong(other, MIN_VALUE)) {
      return ZERO;
    }if (isNegative(_this_)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this_).div_wiekkq_k$(negate(other));
      } else {
        tmp = negate(negate(_this_).div_wiekkq_k$(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this_.div_wiekkq_k$(negate(other)));
    }var res = ZERO;
    var rem_0 = _this_;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = Math.max(1.0, Math.floor(approxDouble));
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta_0 = log2 <= 48.0 ? 1.0 : Math.pow(2.0, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) ? true : greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta_0;
        approxRes = fromNumber(approx2);
        approxRem = multiply(approxRes, other);
      }
      if (isZero(approxRes)) {
        approxRes = ONE;
      }res = add(res, approxRes);
      rem_0 = subtract(rem_0, approxRem);
    }
    return res;
  }
  function shiftLeft(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low << numBits_0, _this_._high << numBits_0 | _this_._low >>> (32 - numBits_0 | 0));
      } else {
        return new Long(0, _this_._low << (numBits_0 - 32 | 0));
      }
    }
  }
  function shiftRight(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low >>> numBits_0 | _this_._high << (32 - numBits_0 | 0), _this_._high >> numBits_0);
      } else {
        return new Long(_this_._high >> (numBits_0 - 32 | 0), _this_._high >= 0 ? 0 : -1);
      }
    }
  }
  function toNumber(_this_) {
    return _this_._high * 4.294967296E9 + getLowBitsUnsigned(_this_);
  }
  function equalsLong(_this_, other) {
    return _this_._high === other._high ? _this_._low === other._low : false;
  }
  function hashCode_0(l) {
    return l._low ^ l._high;
  }
  function toStringImpl(_this_, radix) {
    if (radix < 2 ? true : 36 < radix) {
      throw Exception_init_$Create$('' + 'radix out of range: ' + radix);
    }if (isZero(_this_)) {
      return '0';
    }if (isNegative(_this_)) {
      if (equalsLong(_this_, MIN_VALUE)) {
        var radixLong = fromInt(radix);
        var div = _this_.div_wiekkq_k$(radixLong);
        var rem = subtract(multiply(div, radixLong), _this_).toInt_0_k$();
        var tmp = toStringImpl(div, radix);
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = rem;
            break $l$block;
          }
          var tmp0_unsafeCast_0 = tmp$ret$0.toString(radix);
          tmp$ret$1 = tmp0_unsafeCast_0;
          break $l$block_0;
        }
        return tmp + tmp$ret$1;
      } else {
        return '' + '-' + toStringImpl(negate(_this_), radix);
      }
    }var radixToPower = fromNumber(Math.pow(radix, 6.0));
    var rem_0 = _this_;
    var result = '';
    while (true) {
      var remDiv = rem_0.div_wiekkq_k$(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).toInt_0_k$();
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = intval;
          break $l$block_1;
        }
        var tmp1_unsafeCast_0 = tmp$ret$2.toString(radix);
        tmp$ret$3 = tmp1_unsafeCast_0;
        break $l$block_2;
      }
      var digits_0 = tmp$ret$3;
      rem_0 = remDiv;
      if (isZero(rem_0)) {
        return digits_0 + result;
      } else {
        while (digits_0.length < 6) {
          digits_0 = '0' + digits_0;
        }
        result = digits_0 + result;
      }
    }
  }
  function fromInt(value) {
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this_) {
    return _this_._high < 0;
  }
  function isZero(_this_) {
    return _this_._high === 0 ? _this_._low === 0 : false;
  }
  function isOdd(_this_) {
    return (_this_._low & 1) === 1;
  }
  function negate(_this_) {
    return _this_.unaryMinus_0_k$();
  }
  function lessThan(_this_, other) {
    return compare(_this_, other) < 0;
  }
  function fromNumber(value) {
    if (isNaN_0(value)) {
      return ZERO;
    } else if (value <= -9.223372036854776E18) {
      return MIN_VALUE;
    } else if (value + 1 >= 9.223372036854776E18) {
      return MAX_VALUE;
    } else if (value < 0.0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      return new Long(jsBitwiseOr(value % twoPwr32, 0), jsBitwiseOr(value / twoPwr32, 0));
    }
  }
  function greaterThan(_this_, other) {
    return compare(_this_, other) > 0;
  }
  function greaterThanOrEqual(_this_, other) {
    return compare(_this_, other) >= 0;
  }
  function getLowBitsUnsigned(_this_) {
    return _this_._low >= 0 ? _this_._low : 4.294967296E9 + _this_._low;
  }
  function imul(a_local, b_local) {
    var lhs = jsBitwiseAnd(a_local, 4.29490176E9) * jsBitwiseAnd(b_local, 65535);
    var rhs = jsBitwiseAnd(a_local, 65535) * b_local;
    return jsBitwiseOr(lhs + rhs, 0);
  }
  function toByte(a) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = toByte$outlinedJsCode$(a);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a.toInt_0_k$();
    } else {
      {
        tmp = doubleToInt(a);
      }
    }
    return tmp;
  }
  function doubleToInt(a) {
    return a > 2.147483647E9 ? 2147483647 : a < -2.147483648E9 ? -2147483648 : jsBitwiseOr(a, 0);
  }
  function toShort(a) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = toShort$outlinedJsCode$(a);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function numberToLong(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a;
    } else {
      {
        tmp = fromNumber(a);
      }
    }
    return tmp;
  }
  function numberToChar(a) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_toUShort_0 = numberToInt(a);
      tmp$ret$0 = _UShort___init__impl_(toShort(tmp0_toUShort_0));
      break $l$block;
    }
    return new Char(tmp$ret$0);
  }
  function toLong(a) {
    return fromInt(a);
  }
  function toByte$outlinedJsCode$(a) {
    return a << 24 >> 24;
  }
  function toShort$outlinedJsCode$(a) {
    return a << 16 >> 16;
  }
  function numberRangeToNumber(start, endInclusive) {
    return new IntRange(start, endInclusive);
  }
  var propertyRefClassMetadataCache;
  function getPropertyCallableRef(name, paramCount, type, getter, setter) {
    getter.get = getter;
    getter.set = setter;
    getter.callableName = name;
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = getPropertyRefClass(getter, getKPropMetadata(paramCount, setter, type));
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function getPropertyRefClass(obj, metadata) {
    obj.$metadata$ = metadata;
    obj.constructor = obj;
    return obj;
  }
  function getKPropMetadata(paramCount, setter, type) {
    var mdata = propertyRefClassMetadataCache[paramCount][setter == null ? 0 : 1];
    if (mdata.interfaces.length == 0) {
      mdata.interfaces.push(type);
    }return mdata;
  }
  function propertyRefClassMetadataCache$init$() {
    var tmp$ret$17;
    $l$block_16: {
      var tmp$ret$4;
      $l$block_3: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = {kind: 'class', interfaces: []};
          break $l$block;
        }
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = {kind: 'class', interfaces: []};
          break $l$block_0;
        }
        var tmp0_arrayOf_0 = [tmp, tmp$ret$1];
        var tmp$ret$3;
        $l$block_2: {
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = tmp0_arrayOf_0;
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }
        tmp$ret$4 = tmp$ret$3;
        break $l$block_3;
      }
      var tmp_0 = tmp$ret$4;
      var tmp$ret$9;
      $l$block_8: {
        var tmp$ret$5;
        $l$block_4: {
          tmp$ret$5 = {kind: 'class', interfaces: []};
          break $l$block_4;
        }
        var tmp_1 = tmp$ret$5;
        var tmp$ret$6;
        $l$block_5: {
          tmp$ret$6 = {kind: 'class', interfaces: []};
          break $l$block_5;
        }
        var tmp1_arrayOf_0 = [tmp_1, tmp$ret$6];
        var tmp$ret$8;
        $l$block_7: {
          var tmp$ret$7;
          $l$block_6: {
            tmp$ret$7 = tmp1_arrayOf_0;
            break $l$block_6;
          }
          tmp$ret$8 = tmp$ret$7;
          break $l$block_7;
        }
        tmp$ret$9 = tmp$ret$8;
        break $l$block_8;
      }
      var tmp_2 = tmp$ret$9;
      var tmp$ret$14;
      $l$block_13: {
        var tmp$ret$10;
        $l$block_9: {
          tmp$ret$10 = {kind: 'class', interfaces: []};
          break $l$block_9;
        }
        var tmp_3 = tmp$ret$10;
        var tmp$ret$11;
        $l$block_10: {
          tmp$ret$11 = {kind: 'class', interfaces: []};
          break $l$block_10;
        }
        var tmp2_arrayOf_0 = [tmp_3, tmp$ret$11];
        var tmp$ret$13;
        $l$block_12: {
          var tmp$ret$12;
          $l$block_11: {
            tmp$ret$12 = tmp2_arrayOf_0;
            break $l$block_11;
          }
          tmp$ret$13 = tmp$ret$12;
          break $l$block_12;
        }
        tmp$ret$14 = tmp$ret$13;
        break $l$block_13;
      }
      var tmp3_arrayOf_0 = [tmp_0, tmp_2, tmp$ret$14];
      var tmp$ret$16;
      $l$block_15: {
        var tmp$ret$15;
        $l$block_14: {
          tmp$ret$15 = tmp3_arrayOf_0;
          break $l$block_14;
        }
        tmp$ret$16 = tmp$ret$15;
        break $l$block_15;
      }
      tmp$ret$17 = tmp$ret$16;
      break $l$block_16;
    }
    return tmp$ret$17;
  }
  function isArrayish(o) {
    var tmp;
    if (isJsArray(o)) {
      tmp = true;
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = ArrayBuffer.isView(o);
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function isJsArray(obj) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Array.isArray(obj);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function isInterface(obj, iface) {
    var tmp0_elvis_lhs = obj.constructor;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var ctor = tmp;
    return isInterfaceImpl(ctor, iface);
  }
  function isInterfaceImpl(ctor, iface) {
    if (ctor === iface)
      return true;
    var metadata = ctor.$metadata$;
    if (!(metadata == null)) {
      var interfaces = metadata.interfaces;
      var indexedObject = interfaces;
      var inductionVariable = 0;
      var last_0 = indexedObject.length;
      while (inductionVariable < last_0) {
        var i = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (isInterfaceImpl(i, iface)) {
          return true;
        }}
    }var superPrototype = !(ctor.prototype == null) ? Object.getPrototypeOf(ctor.prototype) : null;
    var superConstructor = superPrototype != null ? superPrototype.constructor : null;
    return !(superConstructor == null) ? isInterfaceImpl(superConstructor, iface) : false;
  }
  function isArray(obj) {
    var tmp;
    if (isJsArray(obj)) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = obj;
        break $l$block;
      }
      tmp = !tmp$ret$0.$type$;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isObject(obj) {
    var objTypeOf = typeof obj;
    var tmp0_subject = objTypeOf;
    switch (tmp0_subject) {
      case 'string':
        return true;
      case 'number':
        return true;
      case 'boolean':
        return true;
      case 'function':
        return true;
      default:return jsInstanceOf(obj, Object);
    }
  }
  function isNumber(a) {
    var tmp;
    if (typeof a === 'number') {
      tmp = true;
    } else {
      tmp = a instanceof Long;
    }
    return tmp;
  }
  function isCharSequence(value) {
    return typeof value === 'string' ? true : isInterface(value, _get_js_(getKClass_0(CharSequence)));
  }
  function isBooleanArray(a) {
    return isJsArray(a) ? a.$type$ === 'BooleanArray' : false;
  }
  function isByteArray(a) {
    return jsInstanceOf(a, Int8Array);
  }
  function isShortArray(a) {
    return jsInstanceOf(a, Int16Array);
  }
  function isCharArray(a) {
    return isJsArray(a) ? a.$type$ === 'CharArray' : false;
  }
  function isIntArray(a) {
    return jsInstanceOf(a, Int32Array);
  }
  function isFloatArray(a) {
    return jsInstanceOf(a, Float32Array);
  }
  function isLongArray(a) {
    return isJsArray(a) ? a.$type$ === 'LongArray' : false;
  }
  function isDoubleArray(a) {
    return jsInstanceOf(a, Float64Array);
  }
  function asList(_this_) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _this_;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return new ArrayList(tmp$ret$1);
  }
  function isWhitespaceImpl(_this_) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this_.toInt_0_k$();
      break $l$block;
    }
    var ch = tmp$ret$0;
    return (((9 <= ch ? ch <= 13 : false) ? true : 28 <= ch ? ch <= 32 : false) ? true : ch === 160) ? true : ch > 4096 ? (((((ch === 5760 ? true : 8192 <= ch ? ch <= 8202 : false) ? true : ch === 8232) ? true : ch === 8233) ? true : ch === 8239) ? true : ch === 8287) ? true : ch === 12288 : false;
  }
  function releaseIntercepted($this) {
    var intercepted_0 = $this._intercepted_;
    if (!(intercepted_0 == null) ? !(intercepted_0 === $this) : false) {
      ensureNotNull($this._get_context__0_k$().get_9uvjra_k$(Key_getInstance())).releaseInterceptedContinuation_h7c6yl_k$(intercepted_0);
    }$this._intercepted_ = CompletedContinuation_getInstance();
  }
  function CoroutineImpl_0(resultContinuation) {
    this._resultContinuation = resultContinuation;
    this._state_0 = 0;
    this._exceptionState = 0;
    this._result = null;
    this._exception_0 = null;
    this._finallyPath = null;
    var tmp = this;
    var tmp0_safe_receiver = this._resultContinuation;
    tmp.__context = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_context__0_k$();
    this._intercepted_ = null;
  }
  CoroutineImpl_0.prototype._get_exception__0_k$ = function () {
    return this._exception_0;
  };
  CoroutineImpl_0.prototype._get_context__0_k$ = function () {
    return ensureNotNull(this.__context);
  };
  CoroutineImpl_0.prototype.intercepted_0_k$ = function () {
    var tmp2_elvis_lhs = this._intercepted_;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_safe_receiver = this._get_context__0_k$().get_9uvjra_k$(Key_getInstance());
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.interceptContinuation_x4ijla_k$(this);
        var tmp0_also_0 = tmp1_elvis_lhs == null ? this : tmp1_elvis_lhs;
        {
        }
        {
          this._intercepted_ = tmp0_also_0;
        }
        tmp$ret$0 = tmp0_also_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp2_elvis_lhs;
    }
    return tmp;
  };
  CoroutineImpl_0.prototype.resumeWith_jccoe6_k$ = function (result) {
    var current = this;
    var tmp$ret$0;
    $l$block: {
      var tmp;
      if (_Result___get_isFailure__impl_(result)) {
        tmp = null;
      } else {
        var tmp_0 = _Result___get_value__impl_(result);
        tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      }
      tmp$ret$0 = tmp;
      break $l$block;
    }
    var currentResult = tmp$ret$0;
    var currentException = Result__exceptionOrNull_impl(result);
    while (true) {
      var tmp$ret$6;
      $l$block_5: {
        var tmp0_with_0 = current;
        {
        }
        if (currentException == null) {
          tmp0_with_0._result = currentResult;
        } else {
          tmp0_with_0._state_0 = tmp0_with_0._exceptionState;
          tmp0_with_0._exception_0 = currentException;
        }
        try {
          var outcome_2 = tmp0_with_0.doResume_0_k$();
          if (outcome_2 === _get_COROUTINE_SUSPENDED_())
            return Unit_getInstance();
          currentResult = outcome_2;
          currentException = null;
        } catch ($p) {
          currentResult = null;
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = $p;
            break $l$block_0;
          }
          currentException = tmp$ret$1;
        }
        releaseIntercepted(tmp0_with_0);
        var completion_4 = ensureNotNull(tmp0_with_0._resultContinuation);
        var tmp_1;
        if (completion_4 instanceof CoroutineImpl_0) {
          current = completion_4;
          tmp_1 = Unit_getInstance();
        } else {
          {
            if (!(currentException == null)) {
              var tmp$ret$3;
              $l$block_2: {
                var tmp0_resumeWithException_0_5 = ensureNotNull(currentException);
                var tmp$ret$2;
                $l$block_1: {
                  var tmp0_failure_0_1_6 = Companion_getInstance_2();
                  tmp$ret$2 = _Result___init__impl_(createFailure(tmp0_resumeWithException_0_5));
                  break $l$block_1;
                }
                tmp$ret$3 = completion_4.resumeWith_bnunh2_k$(tmp$ret$2);
                break $l$block_2;
              }
            } else {
              var tmp$ret$5;
              $l$block_4: {
                var tmp1_resume_0_7 = currentResult;
                var tmp$ret$4;
                $l$block_3: {
                  var tmp0_success_0_1_8 = Companion_getInstance_2();
                  tmp$ret$4 = _Result___init__impl_(tmp1_resume_0_7);
                  break $l$block_3;
                }
                tmp$ret$5 = completion_4.resumeWith_bnunh2_k$(tmp$ret$4);
                break $l$block_4;
              }
            }
            return Unit_getInstance();
          }
        }
        tmp$ret$6 = tmp_1;
        break $l$block_5;
      }
    }
  };
  CoroutineImpl_0.prototype.resumeWith_bnunh2_k$ = function (result) {
    return this.resumeWith_jccoe6_k$(result);
  };
  CoroutineImpl_0.$metadata$ = {
    simpleName: 'CoroutineImpl',
    kind: 'class',
    interfaces: [Continuation]
  };
  function CompletedContinuation() {
    CompletedContinuation_instance = this;
  }
  CompletedContinuation.prototype._get_context__0_k$ = function () {
    throw IllegalStateException_init_$Create$('This continuation is already complete');
  };
  CompletedContinuation.prototype.resumeWith_jccoe6_k$ = function (result) {
    {
      throw IllegalStateException_init_$Create$('This continuation is already complete');
    }
  };
  CompletedContinuation.prototype.resumeWith_bnunh2_k$ = function (result) {
    return this.resumeWith_jccoe6_k$(result);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'This continuation is already complete';
  };
  CompletedContinuation.$metadata$ = {
    simpleName: 'CompletedContinuation',
    kind: 'object',
    interfaces: [Continuation]
  };
  var CompletedContinuation_instance;
  function CompletedContinuation_getInstance() {
    if (CompletedContinuation_instance == null)
      new CompletedContinuation();
    return CompletedContinuation_instance;
  }
  function intercepted(_this_) {
    var tmp0_safe_receiver = _this_ instanceof CoroutineImpl_0 ? _this_ : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.intercepted_0_k$();
    return tmp1_elvis_lhs == null ? _this_ : tmp1_elvis_lhs;
  }
  function createCoroutineUnintercepted(_this_, receiver, completion) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new _no_name_provided__1_0(completion, _this_, receiver);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function invokeSuspendSuperTypeWithReceiver(_this_, receiver, completion) {
    throw new NotImplementedError('It is intrinsic method');
  }
  function _no_name_provided__1_0($completion, $this_createCoroutineUnintercepted, $receiver) {
    this._$completion = $completion;
    this._$this_createCoroutineUnintercepted = $this_createCoroutineUnintercepted;
    this._$receiver = $receiver;
    CoroutineImpl_0.call(this, isInterface($completion, Continuation) ? $completion : THROW_CCE());
  }
  _no_name_provided__1_0.prototype.doResume_2_0_k$ = function () {
    if (this._get_exception__0_k$() != null)
      throw this._get_exception__0_k$();
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = this._$this_createCoroutineUnintercepted;
        break $l$block;
      }
      var a_22 = tmp$ret$0;
      tmp$ret$1 = typeof a_22 === 'function' ? a_22(this._$receiver, this._$completion) : this._$this_createCoroutineUnintercepted.invoke_20e8_k$(this._$receiver, this._$completion);
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  _no_name_provided__1_0.prototype.doResume_0_k$ = function () {
    return this.doResume_2_0_k$();
  };
  _no_name_provided__1_0.$metadata$ = {
    simpleName: '<no name provided>_1',
    kind: 'class',
    interfaces: []
  };
  function Exception_init_$Init$($this) {
    extendThrowable($this, void 1, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$(message) {
    var tmp = Exception_init_$Init$_0(message, Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception_init_$Init$_1(message, cause, $this) {
    extendThrowable($this, message, cause);
    Exception.call($this);
    return $this;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  Exception.$metadata$ = {
    simpleName: 'Exception',
    kind: 'class',
    interfaces: []
  };
  function Error_init_$Init$(message, $this) {
    extendThrowable($this, message, void 1);
    Error_0.call($this);
    return $this;
  }
  function Error_init_$Init$_0(message, cause, $this) {
    extendThrowable($this, message, cause);
    Error_0.call($this);
    return $this;
  }
  function Error_0() {
    captureStack(this, Error_0);
  }
  Error_0.$metadata$ = {
    simpleName: 'Error',
    kind: 'class',
    interfaces: []
  };
  function IllegalArgumentException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$(message) {
    var tmp = IllegalArgumentException_init_$Init$(message, Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$);
    return tmp;
  }
  function IllegalArgumentException_init_$Init$_0(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$_0(message, cause) {
    var tmp = IllegalArgumentException_init_$Init$_0(message, cause, Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$_0);
    return tmp;
  }
  function IllegalArgumentException() {
    captureStack(this, IllegalArgumentException);
  }
  IllegalArgumentException.$metadata$ = {
    simpleName: 'IllegalArgumentException',
    kind: 'class',
    interfaces: []
  };
  function NoSuchElementException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$() {
    var tmp = NoSuchElementException_init_$Init$(Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$_0(message) {
    var tmp = NoSuchElementException_init_$Init$_0(message, Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$_0);
    return tmp;
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  NoSuchElementException.$metadata$ = {
    simpleName: 'NoSuchElementException',
    kind: 'class',
    interfaces: []
  };
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_1(message, cause, $this) {
    Exception_init_$Init$_1(message, cause, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$(message, cause) {
    var tmp = RuntimeException_init_$Init$_1(message, cause, Object.create(RuntimeException.prototype));
    captureStack(tmp, RuntimeException_init_$Create$);
    return tmp;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  RuntimeException.$metadata$ = {
    simpleName: 'RuntimeException',
    kind: 'class',
    interfaces: []
  };
  function IllegalStateException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$(message) {
    var tmp = IllegalStateException_init_$Init$(message, Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$);
    return tmp;
  }
  function IllegalStateException_init_$Init$_0(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$_0(message, cause) {
    var tmp = IllegalStateException_init_$Init$_0(message, cause, Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$_0);
    return tmp;
  }
  function IllegalStateException() {
    captureStack(this, IllegalStateException);
  }
  IllegalStateException.$metadata$ = {
    simpleName: 'IllegalStateException',
    kind: 'class',
    interfaces: []
  };
  function UnsupportedOperationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$() {
    var tmp = UnsupportedOperationException_init_$Init$(Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_0(message) {
    var tmp = UnsupportedOperationException_init_$Init$_0(message, Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_0);
    return tmp;
  }
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException);
  }
  UnsupportedOperationException.$metadata$ = {
    simpleName: 'UnsupportedOperationException',
    kind: 'class',
    interfaces: []
  };
  function IndexOutOfBoundsException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$(message, Object.create(IndexOutOfBoundsException.prototype));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
    return tmp;
  }
  function IndexOutOfBoundsException() {
    captureStack(this, IndexOutOfBoundsException);
  }
  IndexOutOfBoundsException.$metadata$ = {
    simpleName: 'IndexOutOfBoundsException',
    kind: 'class',
    interfaces: []
  };
  function ArithmeticException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    ArithmeticException.call($this);
    return $this;
  }
  function ArithmeticException_init_$Create$(message) {
    var tmp = ArithmeticException_init_$Init$(message, Object.create(ArithmeticException.prototype));
    captureStack(tmp, ArithmeticException_init_$Create$);
    return tmp;
  }
  function ArithmeticException() {
    captureStack(this, ArithmeticException);
  }
  ArithmeticException.$metadata$ = {
    simpleName: 'ArithmeticException',
    kind: 'class',
    interfaces: []
  };
  function NullPointerException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NullPointerException.call($this);
    return $this;
  }
  function NullPointerException_init_$Create$() {
    var tmp = NullPointerException_init_$Init$(Object.create(NullPointerException.prototype));
    captureStack(tmp, NullPointerException_init_$Create$);
    return tmp;
  }
  function NullPointerException() {
    captureStack(this, NullPointerException);
  }
  NullPointerException.$metadata$ = {
    simpleName: 'NullPointerException',
    kind: 'class',
    interfaces: []
  };
  function NoWhenBranchMatchedException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoWhenBranchMatchedException.call($this);
    return $this;
  }
  function NoWhenBranchMatchedException_init_$Create$() {
    var tmp = NoWhenBranchMatchedException_init_$Init$(Object.create(NoWhenBranchMatchedException.prototype));
    captureStack(tmp, NoWhenBranchMatchedException_init_$Create$);
    return tmp;
  }
  function NoWhenBranchMatchedException() {
    captureStack(this, NoWhenBranchMatchedException);
  }
  NoWhenBranchMatchedException.$metadata$ = {
    simpleName: 'NoWhenBranchMatchedException',
    kind: 'class',
    interfaces: []
  };
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(Object.create(ClassCastException.prototype));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  ClassCastException.$metadata$ = {
    simpleName: 'ClassCastException',
    kind: 'class',
    interfaces: []
  };
  function UninitializedPropertyAccessException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UninitializedPropertyAccessException.call($this);
    return $this;
  }
  function UninitializedPropertyAccessException_init_$Create$(message) {
    var tmp = UninitializedPropertyAccessException_init_$Init$(message, Object.create(UninitializedPropertyAccessException.prototype));
    captureStack(tmp, UninitializedPropertyAccessException_init_$Create$);
    return tmp;
  }
  function UninitializedPropertyAccessException() {
    captureStack(this, UninitializedPropertyAccessException);
  }
  UninitializedPropertyAccessException.$metadata$ = {
    simpleName: 'UninitializedPropertyAccessException',
    kind: 'class',
    interfaces: []
  };
  function jsIn(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsIn$outlinedJsCode$(lhs_hack, rhs_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsBitwiseOr(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsBitwiseOr$outlinedJsCode$(lhs_hack, rhs_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsTypeOf(value_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsTypeOf$outlinedJsCode$(value_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsDeleteProperty(obj_hack, property_hack) {
    jsDeleteProperty$outlinedJsCode$(obj_hack, property_hack);
  }
  function jsInstanceOf(obj_hack, jsClass_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsInstanceOf$outlinedJsCode$(obj_hack, jsClass_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsBitwiseAnd(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsBitwiseAnd$outlinedJsCode$(lhs_hack, rhs_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsIn$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack in rhs_hack;
  }
  function jsBitwiseOr$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack | rhs_hack;
  }
  function jsTypeOf$outlinedJsCode$(value_hack) {
    return typeof value_hack;
  }
  function jsDeleteProperty$outlinedJsCode$(obj_hack, property_hack) {
    return delete obj_hack[property_hack];
  }
  function jsInstanceOf$outlinedJsCode$(obj_hack, jsClass_hack) {
    return obj_hack instanceof jsClass_hack;
  }
  function jsBitwiseAnd$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack & rhs_hack;
  }
  function None() {
    None_instance = this;
    TraceBase.call(this);
  }
  None.$metadata$ = {
    simpleName: 'None',
    kind: 'object',
    interfaces: []
  };
  var None_instance;
  function None_getInstance() {
    if (None_instance == null)
      new None();
    return None_instance;
  }
  function TraceBase() {
  }
  TraceBase.prototype.atomicfu$Trace$append$1 = function (event) {
  };
  TraceBase.prototype.atomicfu$Trace$append$2 = function (event1, event2) {
  };
  TraceBase.prototype.atomicfu$Trace$append$3 = function (event1, event2, event3) {
  };
  TraceBase.prototype.atomicfu$Trace$append$4 = function (event1, event2, event3, event4) {
  };
  TraceBase.$metadata$ = {
    simpleName: 'TraceBase',
    kind: 'class',
    interfaces: []
  };
  function AtomicRef(value) {
    this._value_1 = value;
  }
  AtomicRef.prototype._set_value__iav7o_k$ = function (_set___) {
    this._value_1 = _set___;
  };
  AtomicRef.prototype._get_value__0_k$ = function () {
    return this._value_1;
  };
  AtomicRef.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this._value_1 === expect))
      return false;
    this._value_1 = update;
    return true;
  };
  AtomicRef.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_1;
    this._value_1 = value;
    return oldValue;
  };
  AtomicRef.prototype.toString = function () {
    return toString_0(this._value_1);
  };
  AtomicRef.$metadata$ = {
    simpleName: 'AtomicRef',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicRef.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicRef.prototype._get_value__0_k$,
    set: AtomicRef.prototype._set_value__iav7o_k$
  });
  function atomic(initial) {
    return atomic_3(initial, None_getInstance());
  }
  function AtomicBoolean(value) {
    this._value_2 = value;
  }
  AtomicBoolean.prototype._set_value__rpwsgn_k$ = function (_set___) {
    this._value_2 = _set___;
  };
  AtomicBoolean.prototype._get_value__0_k$ = function () {
    return this._value_2;
  };
  AtomicBoolean.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this._value_2 === expect))
      return false;
    this._value_2 = update;
    return true;
  };
  AtomicBoolean.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_2;
    this._value_2 = value;
    return oldValue;
  };
  AtomicBoolean.prototype.toString = function () {
    return this._value_2.toString();
  };
  AtomicBoolean.$metadata$ = {
    simpleName: 'AtomicBoolean',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicBoolean.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicBoolean.prototype._get_value__0_k$,
    set: AtomicBoolean.prototype._set_value__rpwsgn_k$
  });
  function atomic_0(initial) {
    return atomic_5(initial, None_getInstance());
  }
  function AtomicInt(value) {
    this._value_3 = value;
  }
  AtomicInt.prototype._set_value__majfzk_k$ = function (_set___) {
    this._value_3 = _set___;
  };
  AtomicInt.prototype._get_value__0_k$ = function () {
    return this._value_3;
  };
  AtomicInt.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this._value_3 === expect))
      return false;
    this._value_3 = update;
    return true;
  };
  AtomicInt.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_3;
    this._value_3 = value;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$getAndIncrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_3;
    tmp0_this._value_3 = tmp1 + 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndDecrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_3;
    tmp0_this._value_3 = tmp1 - 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndAdd = function (delta_0) {
    var oldValue = this._value_3;
    var tmp0_this = this;
    tmp0_this._value_3 = tmp0_this._value_3 + delta_0 | 0;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$addAndGet = function (delta_0) {
    var tmp0_this = this;
    tmp0_this._value_3 = tmp0_this._value_3 + delta_0 | 0;
    return this._value_3;
  };
  AtomicInt.prototype.atomicfu$incrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this._value_3 = tmp0_this._value_3 + 1 | 0;
    return tmp0_this._value_3;
  };
  AtomicInt.prototype.atomicfu$decrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this._value_3 = tmp0_this._value_3 - 1 | 0;
    return tmp0_this._value_3;
  };
  AtomicInt.prototype.toString = function () {
    return this._value_3.toString();
  };
  AtomicInt.$metadata$ = {
    simpleName: 'AtomicInt',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicInt.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicInt.prototype._get_value__0_k$,
    set: AtomicInt.prototype._set_value__majfzk_k$
  });
  function atomic_1(initial) {
    return atomic_7(initial, None_getInstance());
  }
  function AtomicLong(value) {
    this._value_4 = value;
  }
  AtomicLong.prototype._set_value__kdfck9_k$ = function (_set___) {
    this._value_4 = _set___;
  };
  AtomicLong.prototype._get_value__0_k$ = function () {
    return this._value_4;
  };
  AtomicLong.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!this._value_4.equals(expect))
      return false;
    this._value_4 = update;
    return true;
  };
  AtomicLong.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_4;
    this._value_4 = value;
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$getAndIncrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_4;
    tmp0_this._value_4 = tmp1.inc_0_k$();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndDecrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_4;
    tmp0_this._value_4 = tmp1.dec_0_k$();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndAdd$long = function (delta_0) {
    var oldValue = this._value_4;
    var tmp0_this = this;
    tmp0_this._value_4 = tmp0_this._value_4.plus_wiekkq_k$(delta_0);
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$addAndGet$long = function (delta_0) {
    var tmp0_this = this;
    tmp0_this._value_4 = tmp0_this._value_4.plus_wiekkq_k$(delta_0);
    return this._value_4;
  };
  AtomicLong.prototype.atomicfu$incrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this._value_4 = tmp0_this._value_4.inc_0_k$();
    return tmp0_this._value_4;
  };
  AtomicLong.prototype.atomicfu$decrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this._value_4 = tmp0_this._value_4.dec_0_k$();
    return tmp0_this._value_4;
  };
  AtomicLong.prototype.toString = function () {
    return this._value_4.toString();
  };
  AtomicLong.$metadata$ = {
    simpleName: 'AtomicLong',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicLong.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicLong.prototype._get_value__0_k$,
    set: AtomicLong.prototype._set_value__kdfck9_k$
  });
  function atomic_2(initial, trace) {
    return atomic_3(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_3(initial, trace) {
    return new AtomicRef(initial);
  }
  function atomic_4(initial, trace) {
    return atomic_5(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_5(initial, trace) {
    return new AtomicBoolean(initial);
  }
  function atomic_6(initial, trace) {
    return atomic_7(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_7(initial, trace) {
    return new AtomicInt(initial);
  }
  function atomic_8(initial, trace) {
    return atomic_9(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_9(initial, trace) {
    return new AtomicLong(initial);
  }
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob)
      this.initParentJob_64sshe_k$(parentContext.get_9uvjra_k$(Key_getInstance_3()));
    this._context = parentContext.plus_d7pszg_k$(this);
  }
  AbstractCoroutine.prototype._get_context__0_k$ = function () {
    return this._context;
  };
  AbstractCoroutine.prototype._get_coroutineContext__0_k$ = function () {
    return this._context;
  };
  AbstractCoroutine.prototype._get_isActive__0_k$ = function () {
    return JobSupport.prototype._get_isActive__0_k$.call(this);
  };
  AbstractCoroutine.prototype.onCompleted_iav7o_k$ = function (value) {
  };
  AbstractCoroutine.prototype.onCancelled_mnel9l_k$ = function (cause, handled) {
  };
  AbstractCoroutine.prototype.cancellationExceptionMessage_0_k$ = function () {
    return '' + _get_classSimpleName_(this) + ' was cancelled';
  };
  AbstractCoroutine.prototype.onCompletionInternal_qi8yb4_k$ = function (state) {
    if (state instanceof CompletedExceptionally)
      this.onCancelled_mnel9l_k$(state._cause, state._get_handled__0_k$());
    else {
      {
        this.onCompleted_iav7o_k$((state == null ? true : isObject(state)) ? state : THROW_CCE());
      }
    }
  };
  AbstractCoroutine.prototype.resumeWith_bnunh2_k$ = function (result) {
    var state = this.makeCompletingOnce_wi7j7l_k$(toState$default(result, null, 1, null));
    if (state === COMPLETING_WAITING_CHILDREN)
      return Unit_getInstance();
    this.afterResume_qi8yb4_k$(state);
  };
  AbstractCoroutine.prototype.afterResume_qi8yb4_k$ = function (state) {
    return this.afterCompletion_qi8yb4_k$(state);
  };
  AbstractCoroutine.prototype.handleOnCompletionException_1ti8hr_k$ = function (exception) {
    handleCoroutineException(this._context, exception);
  };
  AbstractCoroutine.prototype.nameString_0_k$ = function () {
    var tmp0_elvis_lhs = _get_coroutineName_(this._context);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return JobSupport.prototype.nameString_0_k$.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '' + '"' + coroutineName + '":' + JobSupport.prototype.nameString_0_k$.call(this);
  };
  AbstractCoroutine.prototype.start_hfyz87_k$ = function (start, receiver, block) {
    start.invoke_huaxoh_k$(block, receiver, this);
  };
  AbstractCoroutine.$metadata$ = {
    simpleName: 'AbstractCoroutine',
    kind: 'class',
    interfaces: [Job, Continuation, CoroutineScope]
  };
  function async(_this_, context, start, block) {
    var newContext = newCoroutineContext(_this_, context);
    var coroutine = start._get_isLazy__0_k$() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.start_hfyz87_k$(start, coroutine, block);
    return coroutine;
  }
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  DeferredCoroutine.prototype.getCompleted_0_k$ = function () {
    var tmp = this.getCompletedInternal_0_k$();
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  DeferredCoroutine.$metadata$ = {
    simpleName: 'DeferredCoroutine',
    kind: 'class',
    interfaces: [Deferred, SelectClause1]
  };
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this._continuation = createCoroutineUnintercepted(block, this, this);
  }
  LazyDeferredCoroutine.prototype.onStart_sv8swh_k$ = function () {
    startCoroutineCancellable_0(this._continuation, this);
  };
  LazyDeferredCoroutine.$metadata$ = {
    simpleName: 'LazyDeferredCoroutine',
    kind: 'class',
    interfaces: []
  };
  function CancellableContinuation() {
  }
  CancellableContinuation.$metadata$ = {
    simpleName: 'CancellableContinuation',
    kind: 'interface',
    interfaces: [Continuation]
  };
  function _get_stateDebugRepresentation_($this) {
    var tmp0_subject = $this._get_state__0_k$();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (_get_isReusableMode_($this._get_resumeMode__0_k$())) {
      var tmp_0 = $this._delegate;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).isReusable_0_k$();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this._delegate;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.postponeCancellation_onfaoi_k$(cause);
  }
  function trySuspend($this) {
    {
      var tmp0_loop_0 = $this.__decision;
      while (true) {
        {
          var tmp1__anonymous__1 = tmp0_loop_0._value_3;
          var tmp0_subject_2 = tmp1__anonymous__1;
          switch (tmp0_subject_2) {
            case 0:
              if ($this.__decision.atomicfu$compareAndSet(0, 1))
                return true;
              break;
            case 2:
              return false;
            default:throw IllegalStateException_init_$Create$('Already suspended');
          }
        }
      }
      Unit_getInstance();
    }
  }
  function tryResume($this) {
    {
      var tmp0_loop_0 = $this.__decision;
      while (true) {
        {
          var tmp1__anonymous__1 = tmp0_loop_0._value_3;
          var tmp0_subject_2 = tmp1__anonymous__1;
          switch (tmp0_subject_2) {
            case 0:
              if ($this.__decision.atomicfu$compareAndSet(0, 2))
                return true;
              break;
            case 1:
              return false;
            default:throw IllegalStateException_init_$Create$('Already resumed');
          }
        }
      }
      Unit_getInstance();
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this._get_context__0_k$().get_9uvjra_k$(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0__get_asHandler__0 = new ChildContinuation($this);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0__get_asHandler__0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var handle = parent.invokeOnCompletion$default_n4h7x8_k$(true, false, tmp$ret$1, 2, null);
    $this._parentHandle = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this._delegate;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tryReleaseClaimedContinuation_7b8qoa_k$($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.detachChild_sv8swh_k$();
    $this.cancel_h62ekz_k$(cancellationCause);
    Unit_getInstance();
  }
  function dispatchResume($this, mode) {
    if (tryResume($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      {
      }
      {
      }
      tmp = proposedUpdate;
    } else {
      if (!_get_isCancellableMode_(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            {
              tmp_2 = false;
            }
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          {
            tmp_0 = !(idempotent == null);
          }
        }
        if (tmp_0) {
          var tmp_3 = state instanceof CancelHandler ? state : null;
          tmp = CompletedContinuation_init_$Create$(proposedUpdate, tmp_3, onCancellation, idempotent, null, 16, null);
        } else {
          {
            tmp = proposedUpdate;
          }
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    {
      var tmp0_loop_0 = $this.__state;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__1 = tmp0_loop_0._value_1;
          var tmp0_subject_2 = tmp1__anonymous__1;
          if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, NotCompleted) : false) {
            var update_3 = resumedState($this, tmp1__anonymous__1, proposedUpdate, resumeMode, onCancellation, null);
            if (!$this.__state.atomicfu$compareAndSet(tmp1__anonymous__1, update_3)) {
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }detachChildIfNonResuable($this);
            dispatchResume($this, resumeMode);
            return Unit_getInstance();
          } else {
            if (tmp0_subject_2 instanceof CancelledContinuation) {
              if (tmp1__anonymous__1.makeResumed_0_k$()) {
                var tmp1_safe_receiver_4 = onCancellation;
                if (tmp1_safe_receiver_4 == null)
                  null;
                else {
                  var tmp$ret$1;
                  $l$block_0: {
                    {
                    }
                    tmp$ret$1 = $this.callOnCancellation_5kfjg_k$(tmp1_safe_receiver_4, tmp1__anonymous__1._get_cause__0_k$());
                    break $l$block_0;
                  }
                  Unit_getInstance();
                }
                Unit_getInstance();
                return Unit_getInstance();
              }} else {
            }
          }
          alreadyResumedError($this, proposedUpdate);
        }
      }
      Unit_getInstance();
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      onCancellation = null;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function alreadyResumedError($this, proposedUpdate) {
    {
      var tmp0_error_0 = '' + 'Already resumed, but proposed with update ' + proposedUpdate;
      throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
    }
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this))
      $this.detachChild_sv8swh_k$();
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this._delegate = delegate;
    {
    }
    this._context_0 = this._delegate._get_context__0_k$();
    this.__decision = atomic_1(0);
    this.__state = atomic(Active_getInstance());
    this._parentHandle = null;
  }
  CancellableContinuationImpl.prototype._get_delegate__0_k$ = function () {
    return this._delegate;
  };
  CancellableContinuationImpl.prototype._get_context__0_k$ = function () {
    return this._context_0;
  };
  CancellableContinuationImpl.prototype._get_state__0_k$ = function () {
    return this.__state._value_1;
  };
  CancellableContinuationImpl.prototype._get_isCompleted__0_k$ = function () {
    var tmp = this._get_state__0_k$();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  CancellableContinuationImpl.prototype.initCancellability_sv8swh_k$ = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this._get_isCompleted__0_k$()) {
      handle.dispose_sv8swh_k$();
      this._parentHandle = NonDisposableHandle_getInstance();
    }};
  CancellableContinuationImpl.prototype.takeState_0_k$ = function () {
    return this._get_state__0_k$();
  };
  CancellableContinuationImpl.prototype.cancelCompletedResult_6goujk_k$ = function (takenState, cause) {
    {
      var tmp0_loop_0 = this.__state;
      while (true) {
        {
          var tmp1__anonymous__1 = tmp0_loop_0._value_1;
          var tmp0_subject_2 = tmp1__anonymous__1;
          if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, NotCompleted) : false) {
            throw IllegalStateException_init_$Create$('Not completed');
          } else {
            if (tmp0_subject_2 instanceof CompletedExceptionally)
              return Unit_getInstance();
            else {
              if (tmp0_subject_2 instanceof CompletedContinuation_0) {
                {
                  var tmp0_check_0_3 = !tmp1__anonymous__1._get_cancelled__0_k$();
                  {
                  }
                  if (!tmp0_check_0_3) {
                    var tmp$ret$0;
                    $l$block: {
                      tmp$ret$0 = 'Must be called at most once';
                      break $l$block;
                    }
                    var message_1_4 = tmp$ret$0;
                    throw IllegalStateException_init_$Create$(toString_1(message_1_4));
                  }}
                var update_5 = tmp1__anonymous__1.copy$default_tn4acp_k$(null, null, null, null, cause, 15, null);
                if (this.__state.atomicfu$compareAndSet(tmp1__anonymous__1, update_5)) {
                  tmp1__anonymous__1.invokeHandlers_939j49_k$(this, cause);
                  return Unit_getInstance();
                }} else {
                {
                  if (this.__state.atomicfu$compareAndSet(tmp1__anonymous__1, CompletedContinuation_init_$Create$(tmp1__anonymous__1, null, null, null, cause, 14, null))) {
                    return Unit_getInstance();
                  } else {
                  }
                }
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.cancel_h62ekz_k$ = function (cause) {
    {
      var tmp0_loop_0 = this.__state;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__1 = tmp0_loop_0._value_1;
          if (!(!(tmp1__anonymous__1 == null) ? isInterface(tmp1__anonymous__1, NotCompleted) : false))
            return false;
          else {
          }
          var update_2 = new CancelledContinuation(this, cause, tmp1__anonymous__1 instanceof CancelHandler);
          if (!this.__state.atomicfu$compareAndSet(tmp1__anonymous__1, update_2)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }var tmp0_safe_receiver_3 = tmp1__anonymous__1 instanceof CancelHandler ? tmp1__anonymous__1 : null;
          if (tmp0_safe_receiver_3 == null)
            null;
          else {
            var tmp$ret$1;
            $l$block_0: {
              {
              }
              tmp$ret$1 = this.callCancelHandler_yvykkv_k$(tmp0_safe_receiver_3, cause);
              break $l$block_0;
            }
            Unit_getInstance();
          }
          Unit_getInstance();
          detachChildIfNonResuable(this);
          dispatchResume(this, this._get_resumeMode__0_k$());
          return true;
        }
      }
      Unit_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.parentCancelled_1ti8hr_k$ = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.cancel_h62ekz_k$(cause);
    Unit_getInstance();
    detachChildIfNonResuable(this);
  };
  CancellableContinuationImpl.prototype.callCancelHandler_yvykkv_k$ = function (handler, cause) {
    var tmp;
    try {
      tmp = handler.invoke(cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = handleCoroutineException(this._get_context__0_k$(), new CompletionHandlerException('' + 'Exception in invokeOnCancellation handler for ' + this, $p));
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.callOnCancellation_5kfjg_k$ = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineException(this._get_context__0_k$(), new CompletionHandlerException('' + 'Exception in resume onCancellation handler for ' + this, $p));
      } else {
        {
          throw $p;
        }
      }
    }
  };
  CancellableContinuationImpl.prototype.getContinuationCancellationCause_jfubq8_k$ = function (parent) {
    return parent.getCancellationException_0_k$();
  };
  CancellableContinuationImpl.prototype.getResult_0_k$ = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend(this)) {
      if (this._parentHandle == null) {
        installParentHandle(this);
        Unit_getInstance();
      }if (isReusable_0) {
        releaseClaimedReusableContinuation(this);
      }return _get_COROUTINE_SUSPENDED_();
    }if (isReusable_0) {
      releaseClaimedReusableContinuation(this);
    }var state = this._get_state__0_k$();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state._cause, this);
    else {
    }
    if (_get_isCancellableMode_(this._get_resumeMode__0_k$())) {
      var job = this._get_context__0_k$().get_9uvjra_k$(Key_getInstance_3());
      if (!(job == null) ? !job._get_isActive__0_k$() : false) {
        var cause = job.getCancellationException_0_k$();
        this.cancelCompletedResult_6goujk_k$(state, cause);
        throw recoverStackTrace(cause, this);
      }}return this.getSuccessfulResult_6jiqgr_k$(state);
  };
  CancellableContinuationImpl.prototype.resumeWith_bnunh2_k$ = function (result) {
    var tmp = toState(result, this);
    var tmp_0 = this._get_resumeMode__0_k$();
    return resumeImpl$default(this, tmp, tmp_0, null, 8, null);
  };
  CancellableContinuationImpl.prototype.detachChild_sv8swh_k$ = function () {
    var tmp0_elvis_lhs = this._parentHandle;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.dispose_sv8swh_k$();
    this._parentHandle = NonDisposableHandle_getInstance();
  };
  CancellableContinuationImpl.prototype.getSuccessfulResult_6jiqgr_k$ = function (state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof CompletedContinuation_0) {
      var tmp_0 = state._result_0;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      {
        tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
      }
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.getExceptionalResult_wi7j7l_k$ = function (state) {
    var tmp0_safe_receiver = DispatchedTask.prototype.getExceptionalResult_wi7j7l_k$.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = recoverStackTrace(tmp0_safe_receiver, this._delegate);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.toString = function () {
    return '' + this.nameString_0_k$() + '(' + toDebugString(this._delegate) + '){' + _get_stateDebugRepresentation_(this) + '}@' + _get_hexAddress_(this);
  };
  CancellableContinuationImpl.prototype.nameString_0_k$ = function () {
    return 'CancellableContinuation';
  };
  CancellableContinuationImpl.$metadata$ = {
    simpleName: 'CancellableContinuationImpl',
    kind: 'class',
    interfaces: [CancellableContinuation, CoroutineStackFrame]
  };
  function CancelHandler() {
  }
  CancelHandler.$metadata$ = {
    simpleName: 'CancelHandler',
    kind: 'class',
    interfaces: [NotCompleted]
  };
  function Active() {
    Active_instance = this;
  }
  Active.prototype.toString = function () {
    return 'Active';
  };
  Active.$metadata$ = {
    simpleName: 'Active',
    kind: 'object',
    interfaces: [NotCompleted]
  };
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function NotCompleted() {
  }
  NotCompleted.$metadata$ = {
    simpleName: 'NotCompleted',
    kind: 'interface',
    interfaces: []
  };
  function CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cancelHandler = null;
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    if (!(($mask0 & 8) === 0))
      idempotentResume = null;
    if (!(($mask0 & 16) === 0))
      cancelCause = null;
    CompletedContinuation_0.call($this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
    return $this;
  }
  function CompletedContinuation_init_$Create$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker) {
    return CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, Object.create(CompletedContinuation_0.prototype));
  }
  function CompletedContinuation_0(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    this._result_0 = result;
    this._cancelHandler = cancelHandler;
    this._onCancellation = onCancellation;
    this._idempotentResume = idempotentResume;
    this._cancelCause = cancelCause;
  }
  CompletedContinuation_0.prototype._get_cancelled__0_k$ = function () {
    return !(this._cancelCause == null);
  };
  CompletedContinuation_0.prototype.invokeHandlers_939j49_k$ = function (cont, cause) {
    var tmp0_safe_receiver = this._cancelHandler;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      $l$block: {
        {
        }
        tmp$ret$0 = cont.callCancelHandler_yvykkv_k$(tmp0_safe_receiver, cause);
        break $l$block;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp1_safe_receiver = this._onCancellation;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        tmp$ret$1 = cont.callOnCancellation_5kfjg_k$(tmp1_safe_receiver, cause);
        break $l$block_0;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  CompletedContinuation_0.prototype.copy_wkt0jr_k$ = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation_0(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation_0.prototype.copy$default_tn4acp_k$ = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      result = this._result_0;
    if (!(($mask0 & 2) === 0))
      cancelHandler = this._cancelHandler;
    if (!(($mask0 & 4) === 0))
      onCancellation = this._onCancellation;
    if (!(($mask0 & 8) === 0))
      idempotentResume = this._idempotentResume;
    if (!(($mask0 & 16) === 0))
      cancelCause = this._cancelCause;
    return this.copy_wkt0jr_k$(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation_0.prototype.toString = function () {
    return '' + 'CompletedContinuation(result=' + this._result_0 + ', cancelHandler=' + this._cancelHandler + ', onCancellation=' + this._onCancellation + ', idempotentResume=' + this._idempotentResume + ', cancelCause=' + this._cancelCause + ')';
  };
  CompletedContinuation_0.prototype.hashCode = function () {
    var result = this._result_0 == null ? 0 : hashCode(this._result_0);
    result = imul(result, 31) + (this._cancelHandler == null ? 0 : hashCode(this._cancelHandler)) | 0;
    result = imul(result, 31) + (this._onCancellation == null ? 0 : hashCode(this._onCancellation)) | 0;
    result = imul(result, 31) + (this._idempotentResume == null ? 0 : hashCode(this._idempotentResume)) | 0;
    result = imul(result, 31) + (this._cancelCause == null ? 0 : hashCode(this._cancelCause)) | 0;
    return result;
  };
  CompletedContinuation_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation_0))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CompletedContinuation_0 ? other : THROW_CCE();
    if (!equals_1(this._result_0, tmp0_other_with_cast._result_0))
      return false;
    if (!equals_1(this._cancelHandler, tmp0_other_with_cast._cancelHandler))
      return false;
    if (!equals_1(this._onCancellation, tmp0_other_with_cast._onCancellation))
      return false;
    if (!equals_1(this._idempotentResume, tmp0_other_with_cast._idempotentResume))
      return false;
    if (!equals_1(this._cancelCause, tmp0_other_with_cast._cancelCause))
      return false;
    return true;
  };
  CompletedContinuation_0.$metadata$ = {
    simpleName: 'CompletedContinuation',
    kind: 'class',
    interfaces: []
  };
  function BeforeResumeCancelHandler() {
  }
  BeforeResumeCancelHandler.$metadata$ = {
    simpleName: 'BeforeResumeCancelHandler',
    kind: 'class',
    interfaces: []
  };
  function CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      handled = false;
    CompletedExceptionally.call($this, cause, handled);
    return $this;
  }
  function CompletedExceptionally_init_$Create$(cause, handled, $mask0, $marker) {
    return CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, Object.create(CompletedExceptionally.prototype));
  }
  function CompletedExceptionally(cause, handled) {
    this._cause = cause;
    this.__handled = atomic_0(handled);
  }
  CompletedExceptionally.prototype._get_cause__0_k$ = function () {
    return this._cause;
  };
  CompletedExceptionally.prototype._get_handled__0_k$ = function () {
    return this.__handled._value_2;
  };
  CompletedExceptionally.prototype.makeHandled_0_k$ = function () {
    return this.__handled.atomicfu$compareAndSet(false, true);
  };
  CompletedExceptionally.prototype.toString = function () {
    return '' + _get_classSimpleName_(this) + '[' + this._cause + ']';
  };
  CompletedExceptionally.$metadata$ = {
    simpleName: 'CompletedExceptionally',
    kind: 'class',
    interfaces: []
  };
  function CancelledContinuation(continuation, cause, handled) {
    var tmp0_elvis_lhs = cause;
    CompletedExceptionally.call(this, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('' + 'Continuation ' + continuation + ' was cancelled normally') : tmp0_elvis_lhs, handled);
    this.__resumed = atomic_0(false);
  }
  CancelledContinuation.prototype.makeResumed_0_k$ = function () {
    return this.__resumed.atomicfu$compareAndSet(false, true);
  };
  CancelledContinuation.$metadata$ = {
    simpleName: 'CancelledContinuation',
    kind: 'class',
    interfaces: []
  };
  function toState(_this_, caller) {
    var tmp$ret$2;
    $l$block_1: {
      {
      }
      var exception_1 = Result__exceptionOrNull_impl(_this_);
      var tmp;
      if (exception_1 == null) {
        var tmp$ret$0;
        $l$block: {
          var tmp_0 = _Result___get_value__impl_(_this_);
          var tmp0__anonymous__2 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          tmp$ret$0 = tmp0__anonymous__2;
          break $l$block;
        }
        tmp = tmp$ret$0;
      } else {
        var tmp$ret$1;
        $l$block_0: {
          var tmp_1 = recoverStackTrace(exception_1, caller);
          tmp$ret$1 = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
      tmp$ret$2 = tmp;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function toState_0(_this_, onCancellation) {
    var tmp$ret$2;
    $l$block_1: {
      {
      }
      var exception_1 = Result__exceptionOrNull_impl(_this_);
      var tmp;
      if (exception_1 == null) {
        var tmp$ret$0;
        $l$block: {
          var tmp_0 = _Result___get_value__impl_(_this_);
          var tmp0__anonymous__2 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          tmp$ret$0 = !(onCancellation == null) ? new CompletedWithCancellation(tmp0__anonymous__2, onCancellation) : tmp0__anonymous__2;
          break $l$block;
        }
        tmp = tmp$ret$0;
      } else {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = CompletedExceptionally_init_$Create$(exception_1, false, 2, null);
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
      tmp$ret$2 = tmp;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function toState$default(_this_, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancellation = null;
    return toState_0(_this_, onCancellation);
  }
  function CompletedWithCancellation(result, onCancellation) {
    this._result_1 = result;
    this._onCancellation_0 = onCancellation;
  }
  CompletedWithCancellation.prototype.toString = function () {
    return '' + 'CompletedWithCancellation(result=' + this._result_1 + ', onCancellation=' + this._onCancellation_0 + ')';
  };
  CompletedWithCancellation.prototype.hashCode = function () {
    var result = this._result_1 == null ? 0 : hashCode(this._result_1);
    result = imul(result, 31) + hashCode(this._onCancellation_0) | 0;
    return result;
  };
  CompletedWithCancellation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals_1(this._result_1, tmp0_other_with_cast._result_1))
      return false;
    if (!equals_1(this._onCancellation_0, tmp0_other_with_cast._onCancellation_0))
      return false;
    return true;
  };
  CompletedWithCancellation.$metadata$ = {
    simpleName: 'CompletedWithCancellation',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__36() {
  }
  _no_name_provided__36.prototype.invoke_k332zt_k$ = function (it) {
    return it instanceof CoroutineDispatcher ? it : null;
  };
  _no_name_provided__36.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_k332zt_k$((!(p1 == null) ? isInterface(p1, Element_0) : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__36.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function Key_1() {
    Key_instance_0 = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, _no_name_provided_$factory_28());
  }
  Key_1.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: []
  };
  var Key_instance_0;
  function Key_getInstance_0() {
    if (Key_instance_0 == null)
      new Key_1();
    return Key_instance_0;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  CoroutineDispatcher.prototype.isDispatchNeeded_d7pszg_k$ = function (context) {
    return true;
  };
  CoroutineDispatcher.prototype.interceptContinuation_x4ijla_k$ = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  CoroutineDispatcher.prototype.releaseInterceptedContinuation_h7c6yl_k$ = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.release_sv8swh_k$();
  };
  CoroutineDispatcher.prototype.toString = function () {
    return '' + _get_classSimpleName_(this) + '@' + _get_hexAddress_(this);
  };
  CoroutineDispatcher.$metadata$ = {
    simpleName: 'CoroutineDispatcher',
    kind: 'class',
    interfaces: [ContinuationInterceptor]
  };
  function _no_name_provided_$factory_28() {
    var i = new _no_name_provided__36();
    return function (p1) {
      return i.invoke_k332zt_k$(p1);
    };
  }
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.get_9uvjra_k$(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        {
          {
          }
          tmp0_safe_receiver.handleException_ym78xn_k$(context, exception);
          return Unit_getInstance();
        }
      }
      Unit_getInstance();
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineExceptionImpl(context, handlerException(exception, $p));
        return Unit_getInstance();
      } else {
        {
          throw $p;
        }
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function Key_2() {
    Key_instance_1 = this;
  }
  Key_2.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance_1;
  function Key_getInstance_1() {
    if (Key_instance_1 == null)
      new Key_2();
    return Key_instance_1;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    var tmp$ret$0;
    $l$block: {
      var tmp0_apply_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
      {
      }
      {
        {
        }
      }
      tmp$ret$0 = tmp0_apply_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function Key_3() {
    Key_instance_2 = this;
  }
  Key_3.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance_2;
  function Key_getInstance_2() {
    if (Key_instance_2 == null)
      new Key_3();
    return Key_instance_2;
  }
  function CoroutineName(name) {
    Key_getInstance_2();
    AbstractCoroutineContextElement.call(this, Key_getInstance_2());
    this._name_0 = name;
  }
  CoroutineName.prototype.toString = function () {
    return '' + 'CoroutineName(' + this._name_0 + ')';
  };
  CoroutineName.prototype.hashCode = function () {
    return getStringHashCode(this._name_0);
  };
  CoroutineName.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CoroutineName))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CoroutineName ? other : THROW_CCE();
    if (!(this._name_0 === tmp0_other_with_cast._name_0))
      return false;
    return true;
  };
  CoroutineName.$metadata$ = {
    simpleName: 'CoroutineName',
    kind: 'class',
    interfaces: []
  };
  function CoroutineScope() {
  }
  CoroutineScope.$metadata$ = {
    simpleName: 'CoroutineScope',
    kind: 'interface',
    interfaces: []
  };
  function GlobalScope() {
    GlobalScope_instance = this;
  }
  GlobalScope.prototype._get_coroutineContext__0_k$ = function () {
    return EmptyCoroutineContext_getInstance();
  };
  GlobalScope.$metadata$ = {
    simpleName: 'GlobalScope',
    kind: 'object',
    interfaces: [CoroutineScope]
  };
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    if (GlobalScope_instance == null)
      new GlobalScope();
    return GlobalScope_instance;
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_getInstance();
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CoroutineStart.prototype.invoke_huaxoh_k$ = function (block, receiver, completion) {
    var tmp0_subject = this;
    var tmp;
    if (tmp0_subject.equals(CoroutineStart_DEFAULT_getInstance())) {
      tmp = startCoroutineCancellable$default(block, receiver, completion, null, 4, null);
    } else if (tmp0_subject.equals(CoroutineStart_ATOMIC_getInstance())) {
      tmp = startCoroutine(block, receiver, completion);
    } else if (tmp0_subject.equals(CoroutineStart_UNDISPATCHED_getInstance())) {
      tmp = startCoroutineUndispatched(block, receiver, completion);
    } else if (tmp0_subject.equals(CoroutineStart_LAZY_getInstance())) {
      tmp = Unit_getInstance();
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  };
  CoroutineStart.prototype._get_isLazy__0_k$ = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  CoroutineStart.$metadata$ = {
    simpleName: 'CoroutineStart',
    kind: 'class',
    interfaces: []
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_ATOMIC_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_ATOMIC_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function CopyableThrowable() {
  }
  CopyableThrowable.$metadata$ = {
    simpleName: 'CopyableThrowable',
    kind: 'interface',
    interfaces: []
  };
  function Deferred() {
  }
  Deferred.$metadata$ = {
    simpleName: 'Deferred',
    kind: 'interface',
    interfaces: [Job]
  };
  function Delay() {
  }
  Delay.$metadata$ = {
    simpleName: 'Delay',
    kind: 'interface',
    interfaces: []
  };
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this._useCount = new Long(0, 0);
    this._shared = false;
    this._unconfinedQueue = null;
  }
  EventLoop.prototype.processUnconfinedEvent_0_k$ = function () {
    var tmp0_elvis_lhs = this._unconfinedQueue;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.removeFirstOrNull_0_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.run_sv8swh_k$();
    return true;
  };
  EventLoop.prototype.dispatchUnconfined_3yrun8_k$ = function (task) {
    var tmp0_elvis_lhs = this._unconfinedQueue;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_also_0 = new ArrayQueue();
        {
        }
        {
          this._unconfinedQueue = tmp0_also_0;
        }
        tmp$ret$0 = tmp0_also_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.addLast_iav7o_k$(task);
  };
  EventLoop.prototype._get_isUnconfinedLoopActive__0_k$ = function () {
    return this._useCount.compareTo_wiekkq_k$(delta(this, true)) >= 0;
  };
  EventLoop.prototype._get_isUnconfinedQueueEmpty__0_k$ = function () {
    var tmp0_safe_receiver = this._unconfinedQueue;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_isEmpty__0_k$();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  EventLoop.prototype.incrementUseCount_rpwsgn_k$ = function (unconfined) {
    var tmp0_this = this;
    tmp0_this._useCount = tmp0_this._useCount.plus_wiekkq_k$(delta(this, unconfined));
    if (!unconfined)
      this._shared = true;
  };
  EventLoop.prototype.decrementUseCount_rpwsgn_k$ = function (unconfined) {
    var tmp0_this = this;
    tmp0_this._useCount = tmp0_this._useCount.minus_wiekkq_k$(delta(this, unconfined));
    if (this._useCount.compareTo_wiekkq_k$(new Long(0, 0)) > 0)
      return Unit_getInstance();
    {
    }
    if (this._shared) {
      this.shutdown_sv8swh_k$();
    }};
  EventLoop.prototype.shutdown_sv8swh_k$ = function () {
  };
  EventLoop.$metadata$ = {
    simpleName: 'EventLoop',
    kind: 'class',
    interfaces: []
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this._ref = new CommonThreadLocal();
  }
  ThreadLocalEventLoop.prototype._get_eventLoop__0_k$ = function () {
    var tmp0_elvis_lhs = this._ref.get_0_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_also_0 = createEventLoop();
        {
        }
        {
          ThreadLocalEventLoop_getInstance()._ref.set_iav7o_k$(tmp0_also_0);
        }
        tmp$ret$0 = tmp0_also_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ThreadLocalEventLoop.$metadata$ = {
    simpleName: 'ThreadLocalEventLoop',
    kind: 'object',
    interfaces: []
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$_1(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  CompletionHandlerException.$metadata$ = {
    simpleName: 'CompletionHandlerException',
    kind: 'class',
    interfaces: []
  };
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$_0(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  CoroutinesInternalError.$metadata$ = {
    simpleName: 'CoroutinesInternalError',
    kind: 'class',
    interfaces: []
  };
  function DisposableHandle() {
  }
  DisposableHandle.$metadata$ = {
    simpleName: 'DisposableHandle',
    kind: 'interface',
    interfaces: []
  };
  function Key_4() {
    Key_instance_3 = this;
  }
  Key_4.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance_3;
  function Key_getInstance_3() {
    if (Key_instance_3 == null)
      new Key_4();
    return Key_instance_3;
  }
  function Job() {
  }
  Job.prototype.invokeOnCompletion$default_n4h7x8_k$ = function (onCancelling, invokeImmediately, handler, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancelling = false;
    if (!(($mask0 & 2) === 0))
      invokeImmediately = true;
    return $handler == null ? this.invokeOnCompletion_431mg2_k$(onCancelling, invokeImmediately, handler) : $handler(onCancelling, invokeImmediately, handler);
  };
  Job.$metadata$ = {
    simpleName: 'Job',
    kind: 'interface',
    interfaces: [Element_0]
  };
  function ChildJob() {
  }
  ChildJob.$metadata$ = {
    simpleName: 'ChildJob',
    kind: 'interface',
    interfaces: [Job]
  };
  function ParentJob() {
  }
  ParentJob.$metadata$ = {
    simpleName: 'ParentJob',
    kind: 'interface',
    interfaces: [Job]
  };
  function ChildHandle() {
  }
  ChildHandle.$metadata$ = {
    simpleName: 'ChildHandle',
    kind: 'interface',
    interfaces: [DisposableHandle]
  };
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  NonDisposableHandle.prototype.dispose_sv8swh_k$ = function () {
  };
  NonDisposableHandle.prototype.childCancelled_onfaoi_k$ = function (cause) {
    return false;
  };
  NonDisposableHandle.prototype.toString = function () {
    return 'NonDisposableHandle';
  };
  NonDisposableHandle.$metadata$ = {
    simpleName: 'NonDisposableHandle',
    kind: 'object',
    interfaces: [DisposableHandle, ChildHandle]
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  var COMPLETING_ALREADY;
  var COMPLETING_WAITING_CHILDREN;
  var COMPLETING_RETRY;
  var TOO_LATE_TO_CANCEL;
  var SEALED;
  var EMPTY_NEW;
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this._isActive = isActive;
  }
  Empty.prototype._get_isActive__0_k$ = function () {
    return this._isActive;
  };
  Empty.prototype._get_list__0_k$ = function () {
    return null;
  };
  Empty.prototype.toString = function () {
    return '' + 'Empty{' + (this._isActive ? 'Active' : 'New') + '}';
  };
  Empty.$metadata$ = {
    simpleName: 'Empty',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function Incomplete() {
  }
  Incomplete.$metadata$ = {
    simpleName: 'Incomplete',
    kind: 'interface',
    interfaces: []
  };
  function NodeList_0() {
    LinkedListHead.call(this);
  }
  NodeList_0.prototype._get_isActive__0_k$ = function () {
    return true;
  };
  NodeList_0.prototype._get_list__0_k$ = function () {
    return this;
  };
  NodeList_0.prototype.getString_6wfw3l_k$ = function (state) {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp0_apply_0_1 = StringBuilder_init_$Create$_0();
        {
        }
        {
          tmp0_apply_0_1.append_uch40_k$('List{');
          Unit_getInstance();
          tmp0_apply_0_1.append_uch40_k$(state);
          Unit_getInstance();
          tmp0_apply_0_1.append_uch40_k$('}[');
          Unit_getInstance();
          var first_3 = true;
          {
            var cur_1_4 = this._get__next__0_k$();
            while (!equals_1(cur_1_4, this)) {
              if (cur_1_4 instanceof JobNode) {
                var tmp0__anonymous__2_5 = cur_1_4;
                if (first_3)
                  first_3 = false;
                else {
                  tmp0_apply_0_1.append_uch40_k$(', ');
                  Unit_getInstance();
                }
                tmp0_apply_0_1.append_wi7j7l_k$(tmp0__anonymous__2_5);
                Unit_getInstance();
              } else {
              }
              cur_1_4 = cur_1_4.__next;
            }
          }
          tmp0_apply_0_1.append_uch40_k$(']');
          Unit_getInstance();
        }
        tmp$ret$0 = tmp0_apply_0_1;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.toString();
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  NodeList_0.prototype.toString = function () {
    return DEBUG ? this.getString_6wfw3l_k$('Active') : anyToString(this);
  };
  NodeList_0.$metadata$ = {
    simpleName: 'NodeList',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  JobNode.prototype._get_job__0_k$ = function () {
    var tmp = this._job;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  JobNode.prototype._get_isActive__0_k$ = function () {
    return true;
  };
  JobNode.prototype._get_list__0_k$ = function () {
    return null;
  };
  JobNode.prototype.dispose_sv8swh_k$ = function () {
    return this._get_job__0_k$().removeNode_2kg835_k$(this);
  };
  JobNode.prototype.toString = function () {
    return '' + _get_classSimpleName_(this) + '@' + _get_hexAddress_(this) + '[job@' + _get_hexAddress_(this._get_job__0_k$()) + ']';
  };
  JobNode.$metadata$ = {
    simpleName: 'JobNode',
    kind: 'class',
    interfaces: [DisposableHandle, Incomplete]
  };
  function _set_exceptionsHolder_($this, value) {
    $this.__exceptionsHolder._value_1 = value;
  }
  function _get_exceptionsHolder_($this) {
    return $this.__exceptionsHolder._value_1;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$_0(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    {
    }
    {
    }
    {
    }
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._cause;
    var wasCancelling = false;
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        wasCancelling = state._get_isCancelling__0_k$();
        var exceptions_2 = state.sealLocked_h62ekz_k$(proposedException);
        var finalCause_3 = getFinalRootCause($this, state, exceptions_2);
        if (!(finalCause_3 == null))
          addSuppressedExceptions($this, finalCause_3, exceptions_2);
        tmp$ret$0 = finalCause_3;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var finalException = tmp$ret$1;
    var tmp;
    if (finalException == null) {
      tmp = proposedUpdate;
    } else if (finalException === proposedException) {
      tmp = proposedUpdate;
    } else {
      tmp = CompletedExceptionally_init_$Create$(finalException, false, 2, null);
    }
    var finalState = tmp;
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.handleJobException_onfaoi_k$(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).makeHandled_0_k$();
        Unit_getInstance();
      }}if (!wasCancelling)
      $this.onCancelling_houul8_k$(finalException);
    $this.onCompletionInternal_qi8yb4_k$(finalState);
    var casSuccess = $this.__state_0.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    {
    }
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.isEmpty_0_k$()) {
      if (state._get_isCancelling__0_k$()) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_elvis_lhs_1 = null;
          tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_1 == null ? $this.cancellationExceptionMessage_0_k$() : tmp0_elvis_lhs_1, null, $this);
          break $l$block;
        }
        return tmp$ret$0;
      }return null;
    }var tmp$ret$2;
    $l$block_2: {
      var tmp0_iterator_1 = exceptions.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = !(element_2 instanceof CancellationException);
          break $l$block_0;
        }
        if (tmp$ret$1) {
          tmp$ret$2 = element_2;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$2 = null;
      break $l$block_2;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first_0 = exceptions.get_ha5a7z_k$(0);
    if (first_0 instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_5: {
        var tmp0_iterator_1_0 = exceptions.iterator_0_k$();
        while (tmp0_iterator_1_0.hasNext_0_k$()) {
          var element_2_0 = tmp0_iterator_1_0.next_0_k$();
          var tmp$ret$3;
          $l$block_3: {
            var tmp;
            if (!(element_2_0 === first_0)) {
              tmp = element_2_0 instanceof TimeoutCancellationException;
            } else {
              tmp = false;
            }
            tmp$ret$3 = tmp;
            break $l$block_3;
          }
          if (tmp$ret$3) {
            tmp$ret$4 = element_2_0;
            break $l$block_5;
          } else {
          }
        }
        tmp$ret$4 = null;
        break $l$block_5;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    } else {
    }
    return first_0;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions._get_size__0_k$() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions._get_size__0_k$());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var exception = tmp0_iterator.next_0_k$();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.add_2bq_k$(unwrapped);
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        {
        }
      } else {
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    {
    }
    {
    }
    if (!$this.__state_0.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.onCancelling_houul8_k$(null);
    $this.onCompletionInternal_qi8yb4_k$(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this._get_parentHandle__0_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      $l$block: {
        {
        }
        tmp0_safe_receiver.dispose_sv8swh_k$();
        tmp$ret$0 = $this._set_parentHandle__kbopvd_k$(NonDisposableHandle_getInstance());
        break $l$block;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver._cause;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          $this.handleOnCompletionException_1ti8hr_k$(new CompletionHandlerException('' + 'Exception in completion handler ' + state + ' for ' + $this, $p));
        } else {
          {
            throw $p;
          }
        }
      }
    } else {
      {
        var tmp2_safe_receiver = state._get_list__0_k$();
        if (tmp2_safe_receiver == null)
          null;
        else {
          notifyCompletion(tmp2_safe_receiver, $this, cause);
          Unit_getInstance();
        }
        Unit_getInstance();
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.onCancelling_houul8_k$(cause);
    {
      var exception_1 = null;
      {
        var cur_1 = list._get__next__0_k$();
        while (!equals_1(cur_1, list)) {
          if (cur_1 instanceof JobCancellingNode) {
            var tmp0__anonymous__2_2 = cur_1;
            try {
              tmp0__anonymous__2_2.invoke(cause);
            } catch ($p) {
              if ($p instanceof Error) {
                var tmp0_safe_receiver_5_5 = exception_1;
                var tmp;
                if (tmp0_safe_receiver_5_5 == null) {
                  tmp = null;
                } else {
                  var tmp$ret$0;
                  $l$block: {
                    {
                    }
                    {
                      {
                      }
                    }
                    tmp$ret$0 = tmp0_safe_receiver_5_5;
                    break $l$block;
                  }
                  tmp = tmp$ret$0;
                }
                var tmp1_elvis_lhs_4_4 = tmp;
                if (tmp1_elvis_lhs_4_4 == null) {
                  var tmp$ret$1;
                  $l$block_0: {
                    {
                    }
                    exception_1 = new CompletionHandlerException('' + 'Exception in completion handler ' + tmp0__anonymous__2_2 + ' for ' + $this, $p);
                    tmp$ret$1 = Unit_getInstance();
                    break $l$block_0;
                  }
                  Unit_getInstance();
                } else
                  tmp1_elvis_lhs_4_4;
                Unit_getInstance();
              } else {
                {
                  throw $p;
                }
              }
            }
          } else {
          }
          cur_1 = cur_1.__next;
        }
      }
      var tmp0_safe_receiver_8 = exception_1;
      if (tmp0_safe_receiver_8 == null)
        null;
      else {
        var tmp$ret$2;
        $l$block_1: {
          {
          }
          tmp$ret$2 = $this.handleOnCompletionException_1ti8hr_k$(tmp0_safe_receiver_8);
          break $l$block_1;
        }
        Unit_getInstance();
      }
      Unit_getInstance();
    }
    cancelParent($this, cause);
    Unit_getInstance();
  }
  function cancelParent($this, cause) {
    if ($this._get_isScopedCoroutine__0_k$())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this._get_parentHandle__0_k$();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }return parent.childCancelled_onfaoi_k$(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this_, $this, cause) {
    var exception_1 = null;
    {
      var cur_1 = _this_._get__next__0_k$();
      while (!equals_1(cur_1, _this_)) {
        if (cur_1 instanceof JobNode) {
          var tmp0__anonymous__2_2 = cur_1;
          try {
            tmp0__anonymous__2_2.invoke(cause);
          } catch ($p) {
            if ($p instanceof Error) {
              var tmp0_safe_receiver_5_5 = exception_1;
              var tmp;
              if (tmp0_safe_receiver_5_5 == null) {
                tmp = null;
              } else {
                var tmp$ret$0;
                $l$block: {
                  {
                  }
                  {
                    {
                    }
                  }
                  tmp$ret$0 = tmp0_safe_receiver_5_5;
                  break $l$block;
                }
                tmp = tmp$ret$0;
              }
              var tmp1_elvis_lhs_4_4 = tmp;
              if (tmp1_elvis_lhs_4_4 == null) {
                var tmp$ret$1;
                $l$block_0: {
                  {
                  }
                  exception_1 = new CompletionHandlerException('' + 'Exception in completion handler ' + tmp0__anonymous__2_2 + ' for ' + $this, $p);
                  tmp$ret$1 = Unit_getInstance();
                  break $l$block_0;
                }
                Unit_getInstance();
              } else
                tmp1_elvis_lhs_4_4;
              Unit_getInstance();
            } else {
              {
                throw $p;
              }
            }
          }
        } else {
        }
        cur_1 = cur_1.__next;
      }
    }
    var tmp0_safe_receiver_8 = exception_1;
    if (tmp0_safe_receiver_8 == null)
      null;
    else {
      var tmp$ret$2;
      $l$block_1: {
        {
        }
        tmp$ret$2 = $this.handleOnCompletionException_1ti8hr_k$(tmp0_safe_receiver_8);
        break $l$block_1;
      }
      Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if (state._isActive)
        return 0;
      if (!$this.__state_0.atomicfu$compareAndSet(state, EMPTY_ACTIVE))
        return -1;
      $this.onStart_sv8swh_k$();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this.__state_0.atomicfu$compareAndSet(state, state._list_0))
          return -1;
        $this.onStart_sv8swh_k$();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$0;
        $l$block: {
          {
          }
          {
            {
            }
          }
          tmp$ret$0 = tmp1_safe_receiver;
          break $l$block;
        }
        tmp_0 = tmp$ret$0;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node._job = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block_1: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = $this._get_state__0_k$() === expect;
        break $l$block;
      }
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block_1;
      } else {
      }
      list.addLast_qdrmxw_k$(node);
      tmp$ret$1 = true;
      break $l$block_1;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList_0();
    var update = state._isActive ? list : new InactiveNodeList(list);
    $this.__state_0.atomicfu$compareAndSet(state, update);
    Unit_getInstance();
  }
  function promoteSingleToNodeList($this, state) {
    state.addOneIfEmpty_fpxpjn_k$(new NodeList_0());
    Unit_getInstance();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = state.__next;
      break $l$block;
    }
    var list = tmp$ret$0;
    $this.__state_0.atomicfu$compareAndSet(state, list);
    Unit_getInstance();
  }
  function cancelMakeCompleting($this, cause) {
    {
      while (true) {
        {
          var tmp0__anonymous__1 = $this._get_state__0_k$();
          var tmp;
          if (!(!(tmp0__anonymous__1 == null) ? isInterface(tmp0__anonymous__1, Incomplete) : false)) {
            tmp = true;
          } else {
            {
              var tmp_0;
              if (tmp0__anonymous__1 instanceof Finishing) {
                tmp_0 = tmp0__anonymous__1._get_isCompleting__0_k$();
              } else {
                {
                  tmp_0 = false;
                }
              }
              tmp = tmp_0;
            }
          }
          if (tmp) {
            return COMPLETING_ALREADY;
          } else {
          }
          var tmp_1 = createCauseException($this, cause);
          var proposedUpdate_2 = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
          var finalState_3 = tryMakeCompleting($this, tmp0__anonymous__1, proposedUpdate_2);
          if (!(finalState_3 === COMPLETING_RETRY))
            return finalState_3;
        }
      }
      Unit_getInstance();
    }
  }
  function createCauseException($this, cause) {
    var tmp0_subject = cause;
    var tmp;
    if (tmp0_subject == null ? true : tmp0_subject instanceof Error) {
      var tmp1_elvis_lhs = cause;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_elvis_lhs_1 = null;
          tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_1 == null ? $this.cancellationExceptionMessage_0_k$() : tmp0_elvis_lhs_1, null, $this);
          break $l$block;
        }
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      {
        tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).getChildJobCancellationCause_0_k$();
      }
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    {
      while (true) {
        var tmp$ret$7;
        $l$block_6: {
          var tmp0__anonymous__1 = $this._get_state__0_k$();
          var tmp0_subject_2 = tmp0__anonymous__1;
          if (tmp0_subject_2 instanceof Finishing) {
            var tmp$ret$4;
            $l$block_3: {
              var tmp$ret$3;
              $l$block_2: {
                if (tmp0__anonymous__1._get_isSealed__0_k$())
                  return TOO_LATE_TO_CANCEL;
                var wasCancelling_2_4 = tmp0__anonymous__1._get_isCancelling__0_k$();
                if (!(cause == null) ? true : !wasCancelling_2_4) {
                  var tmp0_elvis_lhs_4_6 = causeExceptionCache;
                  var tmp;
                  if (tmp0_elvis_lhs_4_6 == null) {
                    var tmp$ret$0;
                    $l$block: {
                      var tmp0_also_0_5_7 = createCauseException($this, cause);
                      {
                      }
                      {
                        causeExceptionCache = tmp0_also_0_5_7;
                      }
                      tmp$ret$0 = tmp0_also_0_5_7;
                      break $l$block;
                    }
                    tmp = tmp$ret$0;
                  } else {
                    tmp = tmp0_elvis_lhs_4_6;
                  }
                  var causeException_3_5 = tmp;
                  tmp0__anonymous__1.addExceptionLocked_1ti8hr_k$(causeException_3_5);
                }var tmp$ret$2;
                $l$block_1: {
                  var tmp1_takeIf_0_6_8 = tmp0__anonymous__1._get_rootCause__0_k$();
                  {
                  }
                  var tmp_0;
                  var tmp$ret$1;
                  $l$block_0: {
                    tmp$ret$1 = !wasCancelling_2_4;
                    break $l$block_0;
                  }
                  if (tmp$ret$1) {
                    tmp_0 = tmp1_takeIf_0_6_8;
                  } else {
                    {
                      tmp_0 = null;
                    }
                  }
                  tmp$ret$2 = tmp_0;
                  break $l$block_1;
                }
                tmp$ret$3 = tmp$ret$2;
                break $l$block_2;
              }
              tmp$ret$4 = tmp$ret$3;
              break $l$block_3;
            }
            var notifyRootCause_3 = tmp$ret$4;
            var tmp1_safe_receiver_9 = notifyRootCause_3;
            if (tmp1_safe_receiver_9 == null)
              null;
            else {
              var tmp$ret$5;
              $l$block_4: {
                {
                }
                tmp$ret$5 = notifyCancelling($this, tmp0__anonymous__1._list, tmp1_safe_receiver_9);
                break $l$block_4;
              }
              Unit_getInstance();
            }
            Unit_getInstance();
            return COMPLETING_ALREADY;
          } else {
            if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, Incomplete) : false) {
              var tmp2_elvis_lhs_11 = causeExceptionCache;
              var tmp_1;
              if (tmp2_elvis_lhs_11 == null) {
                var tmp$ret$6;
                $l$block_5: {
                  var tmp0_also_0_12 = createCauseException($this, cause);
                  {
                  }
                  {
                    causeExceptionCache = tmp0_also_0_12;
                  }
                  tmp$ret$6 = tmp0_also_0_12;
                  break $l$block_5;
                }
                tmp_1 = tmp$ret$6;
              } else {
                tmp_1 = tmp2_elvis_lhs_11;
              }
              var causeException_10 = tmp_1;
              if (tmp0__anonymous__1._get_isActive__0_k$()) {
                if (tryMakeCancelling($this, tmp0__anonymous__1, causeException_10))
                  return COMPLETING_ALREADY;
              } else {
                var finalState_13 = tryMakeCompleting($this, tmp0__anonymous__1, CompletedExceptionally_init_$Create$(causeException_10, false, 2, null));
                if (finalState_13 === COMPLETING_ALREADY) {
                  var tmp1_error_0_14 = '' + 'Cannot happen in ' + tmp0__anonymous__1;
                  throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0_14));
                } else if (finalState_13 === COMPLETING_RETRY) {
                  tmp$ret$7 = Unit_getInstance();
                  break $l$block_6;
                } else
                  return finalState_13;
              }
            } else {
              return TOO_LATE_TO_CANCEL;
            }
          }
        }
      }
      Unit_getInstance();
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state._get_list__0_k$();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_subject = state;
      var tmp_0;
      if (tmp0_subject instanceof Empty) {
        tmp_0 = new NodeList_0();
      } else {
        if (tmp0_subject instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          {
            var tmp0_error_0 = '' + 'State should have list: ' + state;
            throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
          }
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    {
    }
    {
    }
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.__state_0.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return COMPLETING_ALREADY;
    else {
    }
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      {
        tmp_1 = state instanceof JobNode;
      }
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }return COMPLETING_RETRY;
    } else {
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return COMPLETING_RETRY;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    var tmp$ret$3;
    $l$block_2: {
      if (finishing._get_isCompleting__0_k$())
        return COMPLETING_ALREADY;
      finishing._set_isCompleting__rpwsgn_k$(true);
      if (!(finishing === state)) {
        if (!$this.__state_0.atomicfu$compareAndSet(state, finishing))
          return COMPLETING_RETRY;
      }{
      }
      var wasCancelling_2 = finishing._get_isCancelling__0_k$();
      var tmp0_safe_receiver_3 = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
      if (tmp0_safe_receiver_3 == null)
        null;
      else {
        var tmp$ret$0;
        $l$block: {
          {
          }
          tmp$ret$0 = finishing.addExceptionLocked_1ti8hr_k$(tmp0_safe_receiver_3._cause);
          break $l$block;
        }
        Unit_getInstance();
      }
      Unit_getInstance();
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_takeIf_0_4 = finishing._get_rootCause__0_k$();
        {
        }
        var tmp_0;
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = !wasCancelling_2;
          break $l$block_0;
        }
        if (tmp$ret$1) {
          tmp_0 = tmp0_takeIf_0_4;
        } else {
          {
            tmp_0 = null;
          }
        }
        tmp$ret$2 = tmp_0;
        break $l$block_1;
      }
      notifyRootCause = tmp$ret$2;
      tmp$ret$3 = Unit_getInstance();
      break $l$block_2;
    }
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      $l$block_3: {
        {
        }
        tmp$ret$4 = notifyCancelling($this, list, tmp2_safe_receiver);
        break $l$block_3;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return COMPLETING_WAITING_CHILDREN;
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull_(_this_, $this) {
    var tmp0_safe_receiver = _this_ instanceof CompletedExceptionally ? _this_ : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._cause;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state._get_list__0_k$();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    while (true) {
      var $this_1 = $this_0;
      var state_1 = state_0;
      var child_1 = child_0;
      var proposedUpdate_1 = proposedUpdate_0;
      var tmp$ret$1;
      $l$block_0: {
        var tmp0__get_asHandler__0 = new ChildCompletion($this_1, state_1, child_1, proposedUpdate_1);
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0__get_asHandler__0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      var handle = child_1._childJob.invokeOnCompletion$default_n4h7x8_k$(false, false, tmp$ret$1, 1, null);
      if (!(handle === NonDisposableHandle_getInstance()))
        return true;
      var tmp0_elvis_lhs = nextChild(child_1, $this_1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var nextChild_0 = tmp;
      $this_0 = $this_1;
      state_0 = state_1;
      child_0 = nextChild_0;
      proposedUpdate_0 = proposedUpdate_1;
      continue;
    }
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    {
    }
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.afterCompletion_qi8yb4_k$(finalState);
  }
  function nextChild(_this_, $this) {
    var cur = _this_;
    $l$break: while (true) {
      var tmp$ret$0;
      $l$block: {
        var tmp0__get_isRemoved__0 = cur;
        tmp$ret$0 = tmp0__get_isRemoved__0.__removed;
        break $l$block;
      }
      if (!tmp$ret$0) {
        break $l$break;
      }var tmp$ret$1;
      $l$block_0: {
        var tmp1__get_prevNode__0 = cur;
        tmp$ret$1 = tmp1__get_prevNode__0.__prev;
        break $l$block_0;
      }
      cur = tmp$ret$1;
    }
    while (true) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp2__get_nextNode__0 = cur;
        tmp$ret$2 = tmp2__get_nextNode__0.__next;
        break $l$block_1;
      }
      cur = tmp$ret$2;
      var tmp$ret$3;
      $l$block_2: {
        var tmp3__get_isRemoved__0 = cur;
        tmp$ret$3 = tmp3__get_isRemoved__0.__removed;
        break $l$block_2;
      }
      if (tmp$ret$3)
        continue;
      else {
      }
      if (cur instanceof ChildHandleNode)
        return cur;
      else {
      }
      if (cur instanceof NodeList_0)
        return null;
      else {
      }
    }
  }
  function stateString($this, state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state._get_isCancelling__0_k$() ? 'Cancelling' : state._get_isCompleting__0_k$() ? 'Completing' : 'Active';
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        tmp = state._get_isActive__0_k$() ? 'Active' : 'New';
      } else {
        if (tmp0_subject instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          {
            tmp = 'Completed';
          }
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this._list = list;
    this.__isCompleting = atomic_0(isCompleting);
    this.__rootCause = atomic(rootCause);
    this.__exceptionsHolder = atomic(null);
  }
  Finishing.prototype._get_list__0_k$ = function () {
    return this._list;
  };
  Finishing.prototype._set_isCompleting__rpwsgn_k$ = function (value) {
    this.__isCompleting._value_2 = value;
  };
  Finishing.prototype._get_isCompleting__0_k$ = function () {
    return this.__isCompleting._value_2;
  };
  Finishing.prototype._set_rootCause__houul8_k$ = function (value) {
    this.__rootCause._value_1 = value;
  };
  Finishing.prototype._get_rootCause__0_k$ = function () {
    return this.__rootCause._value_1;
  };
  Finishing.prototype._get_isSealed__0_k$ = function () {
    return _get_exceptionsHolder_(this) === SEALED;
  };
  Finishing.prototype._get_isCancelling__0_k$ = function () {
    return !(this._get_rootCause__0_k$() == null);
  };
  Finishing.prototype._get_isActive__0_k$ = function () {
    return this._get_rootCause__0_k$() == null;
  };
  Finishing.prototype.sealLocked_h62ekz_k$ = function (proposedException) {
    var eh = _get_exceptionsHolder_(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_also_0 = allocateList(this);
          {
          }
          {
            tmp0_also_0.add_2bq_k$(eh);
            Unit_getInstance();
          }
          tmp$ret$0 = tmp0_also_0;
          break $l$block;
        }
        tmp = tmp$ret$0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          {
            var tmp1_error_0 = '' + 'State is ' + eh;
            throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0));
          }
        }
      }
    }
    var list = tmp;
    var rootCause = this._get_rootCause__0_k$();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        tmp$ret$1 = list.add_vz2mgm_k$(0, tmp0_safe_receiver);
        break $l$block_0;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    if (!(proposedException == null) ? !equals_1(proposedException, rootCause) : false) {
      list.add_2bq_k$(proposedException);
      Unit_getInstance();
    }_set_exceptionsHolder_(this, SEALED);
    return list;
  };
  Finishing.prototype.addExceptionLocked_1ti8hr_k$ = function (exception) {
    var rootCause = this._get_rootCause__0_k$();
    if (rootCause == null) {
      this._set_rootCause__houul8_k$(exception);
      return Unit_getInstance();
    }if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder_(this);
    if (eh == null)
      _set_exceptionsHolder_(this, exception);
    else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        var tmp$ret$0;
        $l$block: {
          var tmp0_apply_0 = allocateList(this);
          {
          }
          {
            tmp0_apply_0.add_2bq_k$(eh);
            Unit_getInstance();
            tmp0_apply_0.add_2bq_k$(exception);
            Unit_getInstance();
          }
          tmp$ret$0 = tmp0_apply_0;
          break $l$block;
        }
        _set_exceptionsHolder_(this, tmp$ret$0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).add_2bq_k$(exception);
          Unit_getInstance();
        } else {
          {
            var tmp1_error_0 = '' + 'State is ' + eh;
            throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0));
          }
        }
      }
    }
  };
  Finishing.prototype.toString = function () {
    return '' + 'Finishing[cancelling=' + this._get_isCancelling__0_k$() + ', completing=' + this._get_isCompleting__0_k$() + ', rootCause=' + this._get_rootCause__0_k$() + ', exceptions=' + _get_exceptionsHolder_(this) + ', list=' + this._list + ']';
  };
  Finishing.$metadata$ = {
    simpleName: 'Finishing',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this._parent = parent;
    this._state_1 = state;
    this._child = child;
    this._proposedUpdate = proposedUpdate;
  }
  ChildCompletion.prototype.invoke_houul8_k$ = function (cause) {
    continueCompleting(this._parent, this._state_1, this._child, this._proposedUpdate);
  };
  ChildCompletion.prototype.invoke = function (cause) {
    return this.invoke_houul8_k$(cause);
  };
  ChildCompletion.$metadata$ = {
    simpleName: 'ChildCompletion',
    kind: 'class',
    interfaces: []
  };
  function JobSupport(active) {
    this.__state_0 = atomic(active ? EMPTY_ACTIVE : EMPTY_NEW);
    this.__parentHandle = atomic(null);
  }
  JobSupport.prototype._get_key__0_k$ = function () {
    return Key_getInstance_3();
  };
  JobSupport.prototype._set_parentHandle__kbopvd_k$ = function (value) {
    this.__parentHandle._value_1 = value;
  };
  JobSupport.prototype._get_parentHandle__0_k$ = function () {
    return this.__parentHandle._value_1;
  };
  JobSupport.prototype.initParentJob_64sshe_k$ = function (parent) {
    {
    }
    if (parent == null) {
      this._set_parentHandle__kbopvd_k$(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }parent.start_0_k$();
    Unit_getInstance();
    var handle = parent.attachChild_o588si_k$(this);
    this._set_parentHandle__kbopvd_k$(handle);
    if (this._get_isCompleted__0_k$()) {
      handle.dispose_sv8swh_k$();
      this._set_parentHandle__kbopvd_k$(NonDisposableHandle_getInstance());
    }};
  JobSupport.prototype._get_state__0_k$ = function () {
    {
      var tmp0_loop_0 = this.__state_0;
      while (true) {
        {
          var tmp1__anonymous__1 = tmp0_loop_0._value_1;
          if (!(tmp1__anonymous__1 instanceof OpDescriptor))
            return tmp1__anonymous__1;
          else {
          }
          tmp1__anonymous__1.perform_wi7j7l_k$(this);
          Unit_getInstance();
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype._get_isActive__0_k$ = function () {
    var state = this._get_state__0_k$();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state._get_isActive__0_k$();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  JobSupport.prototype._get_isCompleted__0_k$ = function () {
    var tmp = this._get_state__0_k$();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  JobSupport.prototype.start_0_k$ = function () {
    {
      while (true) {
        {
          var tmp0__anonymous__1 = this._get_state__0_k$();
          var tmp0_subject_2 = startInternal(this, tmp0__anonymous__1);
          if (tmp0_subject_2 === 0)
            return false;
          else if (tmp0_subject_2 === 1)
            return true;
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype.onStart_sv8swh_k$ = function () {
  };
  JobSupport.prototype.getCancellationException_0_k$ = function () {
    var state = this._get_state__0_k$();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state._get_rootCause__0_k$();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.toCancellationException_ntgz4s_k$(tmp0_safe_receiver, '' + _get_classSimpleName_(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error_0 = '' + 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error_0 = '' + 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.toCancellationException$default_f52skm_k$(state._cause, null, 1, null);
        } else {
          {
            tmp = new JobCancellationException('' + _get_classSimpleName_(this) + ' has completed normally', null, this);
          }
        }
      }
    }
    return tmp;
  };
  JobSupport.prototype.toCancellationException_ntgz4s_k$ = function (_this__0, message) {
    var tmp0_elvis_lhs = _this__0 instanceof CancellationException ? _this__0 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_elvis_lhs_1 = message;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_1 == null ? this.cancellationExceptionMessage_0_k$() : tmp0_elvis_lhs_1, _this__0, this);
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  JobSupport.prototype.toCancellationException$default_f52skm_k$ = function (_this__0, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      message = null;
    return this.toCancellationException_ntgz4s_k$(_this__0, message);
  };
  JobSupport.prototype.invokeOnCompletion_wjzpsu_k$ = function (handler) {
    return this.invokeOnCompletion_431mg2_k$(false, true, handler);
  };
  JobSupport.prototype.invokeOnCompletion_431mg2_k$ = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    {
      while (true) {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0__anonymous__1 = this._get_state__0_k$();
          var tmp0_subject_2 = tmp0__anonymous__1;
          if (tmp0_subject_2 instanceof Empty) {
            if (tmp0__anonymous__1._isActive) {
              if (this.__state_0.atomicfu$compareAndSet(tmp0__anonymous__1, node))
                return node;
            } else
              promoteEmptyToNodeList(this, tmp0__anonymous__1);
          } else {
            if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, Incomplete) : false) {
              var list_3 = tmp0__anonymous__1._get_list__0_k$();
              if (list_3 == null) {
                promoteSingleToNodeList(this, tmp0__anonymous__1 instanceof JobNode ? tmp0__anonymous__1 : THROW_CCE());
              } else {
                var rootCause_4 = null;
                var handle_5 = NonDisposableHandle_getInstance();
                var tmp;
                if (onCancelling) {
                  tmp = tmp0__anonymous__1 instanceof Finishing;
                } else {
                  tmp = false;
                }
                if (tmp) {
                  var tmp$ret$2;
                  $l$block_1: {
                    rootCause_4 = tmp0__anonymous__1._get_rootCause__0_k$();
                    var tmp_0;
                    var tmp_1;
                    if (rootCause_4 == null) {
                      tmp_1 = true;
                    } else {
                      var tmp_2;
                      var tmp$ret$0;
                      $l$block: {
                        tmp$ret$0 = handler instanceof ChildHandleNode;
                        break $l$block;
                      }
                      if (tmp$ret$0) {
                        tmp_2 = !tmp0__anonymous__1._get_isCompleting__0_k$();
                      } else {
                        {
                          tmp_2 = false;
                        }
                      }
                      tmp_1 = tmp_2;
                    }
                    if (tmp_1) {
                      if (!addLastAtomic(this, tmp0__anonymous__1, list_3, node)) {
                        tmp$ret$1 = Unit_getInstance();
                        break $l$block_0;
                      }if (rootCause_4 == null)
                        return node;
                      handle_5 = node;
                      tmp_0 = Unit_getInstance();
                    } else {
                    }
                    tmp$ret$2 = tmp_0;
                    break $l$block_1;
                  }
                } else {
                }
                if (!(rootCause_4 == null)) {
                  if (invokeImmediately)
                    invokeIt(handler, rootCause_4);
                  return handle_5;
                } else {
                  if (addLastAtomic(this, tmp0__anonymous__1, list_3, node))
                    return node;
                }
              }
            } else {
              {
                if (invokeImmediately) {
                  var tmp1_safe_receiver_6 = tmp0__anonymous__1 instanceof CompletedExceptionally ? tmp0__anonymous__1 : null;
                  invokeIt(handler, tmp1_safe_receiver_6 == null ? null : tmp1_safe_receiver_6._cause);
                }return NonDisposableHandle_getInstance();
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype.removeNode_2kg835_k$ = function (node) {
    {
      while (true) {
        {
          var tmp0__anonymous__1 = this._get_state__0_k$();
          var tmp0_subject_2 = tmp0__anonymous__1;
          if (tmp0_subject_2 instanceof JobNode) {
            if (!(tmp0__anonymous__1 === node))
              return Unit_getInstance();
            if (this.__state_0.atomicfu$compareAndSet(tmp0__anonymous__1, EMPTY_ACTIVE))
              return Unit_getInstance();
          } else {
            if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, Incomplete) : false) {
              if (!(tmp0__anonymous__1._get_list__0_k$() == null)) {
                node.remove_0_k$();
                Unit_getInstance();
              }return Unit_getInstance();
            } else {
              return Unit_getInstance();
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype._get_onCancelComplete__0_k$ = function () {
    return false;
  };
  JobSupport.prototype.cancellationExceptionMessage_0_k$ = function () {
    return 'Job was cancelled';
  };
  JobSupport.prototype.parentCancelled_f2sghn_k$ = function (parentJob) {
    this.cancelImpl_wi7j7l_k$(parentJob);
    Unit_getInstance();
  };
  JobSupport.prototype.childCancelled_onfaoi_k$ = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    else {
    }
    return this.cancelImpl_wi7j7l_k$(cause) ? this._get_handlesException__0_k$() : false;
  };
  JobSupport.prototype.cancelImpl_wi7j7l_k$ = function (cause) {
    var finalState = COMPLETING_ALREADY;
    if (this._get_onCancelComplete__0_k$()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === COMPLETING_WAITING_CHILDREN)
        return true;
    }if (finalState === COMPLETING_ALREADY) {
      finalState = makeCancelling(this, cause);
    }var tmp;
    if (finalState === COMPLETING_ALREADY) {
      tmp = true;
    } else if (finalState === COMPLETING_WAITING_CHILDREN) {
      tmp = true;
    } else if (finalState === TOO_LATE_TO_CANCEL) {
      tmp = false;
    } else {
      this.afterCompletion_qi8yb4_k$(finalState);
      tmp = true;
    }
    return tmp;
  };
  JobSupport.prototype.getChildJobCancellationCause_0_k$ = function () {
    var state = this._get_state__0_k$();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state._get_rootCause__0_k$();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = state._cause;
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          var tmp0_error_0 = '' + 'Cannot be cancelling child in this state: ' + state;
          throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
        } else {
          {
            tmp = null;
          }
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('' + 'Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  JobSupport.prototype.makeCompletingOnce_wi7j7l_k$ = function (proposedUpdate) {
    {
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp0__anonymous__1 = this._get_state__0_k$();
          var finalState_2 = tryMakeCompleting(this, tmp0__anonymous__1, proposedUpdate);
          if (finalState_2 === COMPLETING_ALREADY)
            throw IllegalStateException_init_$Create$_0('' + 'Job ' + this + ' is already complete or completing, ' + ('' + 'but is being completed with ' + proposedUpdate), _get_exceptionOrNull_(proposedUpdate, this));
          else if (finalState_2 === COMPLETING_RETRY) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          } else
            return finalState_2;
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype.attachChild_o588si_k$ = function (child) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0__get_asHandler__0 = new ChildHandleNode(child);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0__get_asHandler__0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var tmp = this.invokeOnCompletion$default_n4h7x8_k$(true, false, tmp$ret$1, 2, null);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  JobSupport.prototype.handleOnCompletionException_1ti8hr_k$ = function (exception) {
    throw exception;
  };
  JobSupport.prototype.onCancelling_houul8_k$ = function (cause) {
  };
  JobSupport.prototype._get_isScopedCoroutine__0_k$ = function () {
    return false;
  };
  JobSupport.prototype._get_handlesException__0_k$ = function () {
    return true;
  };
  JobSupport.prototype.handleJobException_onfaoi_k$ = function (exception) {
    return false;
  };
  JobSupport.prototype.onCompletionInternal_qi8yb4_k$ = function (state) {
  };
  JobSupport.prototype.afterCompletion_qi8yb4_k$ = function (state) {
  };
  JobSupport.prototype.toString = function () {
    return '' + this.toDebugString_0_k$() + '@' + _get_hexAddress_(this);
  };
  JobSupport.prototype.toDebugString_0_k$ = function () {
    return '' + this.nameString_0_k$() + '{' + stateString(this, this._get_state__0_k$()) + '}';
  };
  JobSupport.prototype.nameString_0_k$ = function () {
    return _get_classSimpleName_(this);
  };
  JobSupport.prototype.getCompletionExceptionOrNull_0_k$ = function () {
    var state = this._get_state__0_k$();
    {
      {
      }
      if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'This job has not completed yet';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString_1(message_1));
      } else {
      }
    }
    return _get_exceptionOrNull_(state, this);
  };
  JobSupport.prototype.getCompletedInternal_0_k$ = function () {
    var state = this._get_state__0_k$();
    {
      {
      }
      if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'This job has not completed yet';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString_1(message_1));
      } else {
      }
    }
    if (state instanceof CompletedExceptionally)
      throw state._cause;
    else {
    }
    return unboxState(state);
  };
  JobSupport.$metadata$ = {
    simpleName: 'JobSupport',
    kind: 'class',
    interfaces: [Job, ChildJob, ParentJob, SelectClause0]
  };
  function boxIncomplete(_this_) {
    var tmp;
    if (!(_this_ == null) ? isInterface(_this_, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this_);
    } else {
      {
        tmp = _this_;
      }
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  JobCancellingNode.$metadata$ = {
    simpleName: 'JobCancellingNode',
    kind: 'class',
    interfaces: []
  };
  function InactiveNodeList(list) {
    this._list_0 = list;
  }
  InactiveNodeList.prototype._get_list__0_k$ = function () {
    return this._list_0;
  };
  InactiveNodeList.prototype._get_isActive__0_k$ = function () {
    return false;
  };
  InactiveNodeList.prototype.toString = function () {
    return DEBUG ? this._list_0.getString_6wfw3l_k$('New') : anyToString(this);
  };
  InactiveNodeList.$metadata$ = {
    simpleName: 'InactiveNodeList',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this._childJob = childJob;
  }
  ChildHandleNode.prototype.invoke_houul8_k$ = function (cause) {
    return this._childJob.parentCancelled_f2sghn_k$(this._get_job__0_k$());
  };
  ChildHandleNode.prototype.invoke = function (cause) {
    return this.invoke_houul8_k$(cause);
  };
  ChildHandleNode.prototype.childCancelled_onfaoi_k$ = function (cause) {
    return this._get_job__0_k$().childCancelled_onfaoi_k$(cause);
  };
  ChildHandleNode.$metadata$ = {
    simpleName: 'ChildHandleNode',
    kind: 'class',
    interfaces: [ChildHandle]
  };
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this._handler = handler;
    this.__invoked = atomic_1(0);
  }
  InvokeOnCancelling.prototype.invoke_houul8_k$ = function (cause) {
    if (this.__invoked.atomicfu$compareAndSet(0, 1))
      this._handler(cause);
  };
  InvokeOnCancelling.prototype.invoke = function (cause) {
    return this.invoke_houul8_k$(cause);
  };
  InvokeOnCancelling.$metadata$ = {
    simpleName: 'InvokeOnCancelling',
    kind: 'class',
    interfaces: []
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this._handler_0 = handler;
  }
  InvokeOnCompletion.prototype.invoke_houul8_k$ = function (cause) {
    return this._handler_0(cause);
  };
  InvokeOnCompletion.prototype.invoke = function (cause) {
    return this.invoke_houul8_k$(cause);
  };
  InvokeOnCompletion.$metadata$ = {
    simpleName: 'InvokeOnCompletion',
    kind: 'class',
    interfaces: []
  };
  function unboxState(_this_) {
    var tmp0_safe_receiver = _this_ instanceof IncompleteStateBox ? _this_ : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._state_2;
    return tmp1_elvis_lhs == null ? _this_ : tmp1_elvis_lhs;
  }
  function IncompleteStateBox(state) {
    this._state_2 = state;
  }
  IncompleteStateBox.$metadata$ = {
    simpleName: 'IncompleteStateBox',
    kind: 'class',
    interfaces: []
  };
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this._child_0 = child;
  }
  ChildContinuation.prototype.invoke_houul8_k$ = function (cause) {
    this._child_0.parentCancelled_1ti8hr_k$(this._child_0.getContinuationCancellationCause_jfubq8_k$(this._get_job__0_k$()));
  };
  ChildContinuation.prototype.invoke = function (cause) {
    return this.invoke_houul8_k$(cause);
  };
  ChildContinuation.$metadata$ = {
    simpleName: 'ChildContinuation',
    kind: 'class',
    interfaces: []
  };
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  MainCoroutineDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.toStringInternalImpl_0_k$();
    return tmp0_elvis_lhs == null ? '' + _get_classSimpleName_(this) + '@' + _get_hexAddress_(this) : tmp0_elvis_lhs;
  };
  MainCoroutineDispatcher.prototype.toStringInternalImpl_0_k$ = function () {
    var main = Dispatchers_getInstance()._Main;
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main._get_immediate__0_k$();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        tmp_0 = null;
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  MainCoroutineDispatcher.$metadata$ = {
    simpleName: 'MainCoroutineDispatcher',
    kind: 'class',
    interfaces: []
  };
  function TimeoutCancellationException() {
  }
  TimeoutCancellationException.$metadata$ = {
    simpleName: 'TimeoutCancellationException',
    kind: 'class',
    interfaces: [CopyableThrowable]
  };
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  Unconfined.prototype.isDispatchNeeded_d7pszg_k$ = function (context) {
    return false;
  };
  Unconfined.prototype.dispatch_7n0ou3_k$ = function (context, block) {
    var yieldContext = context.get_9uvjra_k$(Key_getInstance_4());
    if (!(yieldContext == null)) {
      yieldContext.dispatcherWasUnconfined__error = true;
      return Unit_getInstance();
    }throw UnsupportedOperationException_init_$Create$_0('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  Unconfined.prototype.toString = function () {
    return 'Dispatchers.Unconfined';
  };
  Unconfined.$metadata$ = {
    simpleName: 'Unconfined',
    kind: 'object',
    interfaces: []
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_5() {
    Key_instance_4 = this;
  }
  Key_5.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance_4;
  function Key_getInstance_4() {
    if (Key_instance_4 == null)
      new Key_5();
    return Key_instance_4;
  }
  function ensureCapacity($this) {
    var currentSize = $this._elements.length;
    var newCapacity = currentSize << 1;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(newCapacity), null);
      break $l$block;
    }
    var newElements = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_copyInto_0 = $this._elements;
      var tmp1_copyInto_0 = $this._head_0;
      var tmp2_copyInto_0 = tmp0_copyInto_0.length;
      arrayCopy_0(tmp0_copyInto_0, newElements, 0, tmp1_copyInto_0, tmp2_copyInto_0);
      tmp$ret$1 = newElements;
      break $l$block_0;
    }
    Unit_getInstance();
    var tmp$ret$2;
    $l$block_1: {
      var tmp3_copyInto_0 = $this._elements;
      var tmp4_copyInto_0 = $this._elements.length - $this._head_0 | 0;
      var tmp5_copyInto_0 = $this._head_0;
      arrayCopy_0(tmp3_copyInto_0, newElements, tmp4_copyInto_0, 0, tmp5_copyInto_0);
      tmp$ret$2 = newElements;
      break $l$block_1;
    }
    Unit_getInstance();
    $this._elements = newElements;
    $this._head_0 = 0;
    $this._tail = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(16), null);
      break $l$block;
    }
    tmp._elements = tmp$ret$0;
    this._head_0 = 0;
    this._tail = 0;
  }
  ArrayQueue.prototype._get_isEmpty__0_k$ = function () {
    return this._head_0 === this._tail;
  };
  ArrayQueue.prototype.addLast_iav7o_k$ = function (element) {
    this._elements[this._tail] = element;
    this._tail = (this._tail + 1 | 0) & (this._elements.length - 1 | 0);
    if (this._tail === this._head_0)
      ensureCapacity(this);
  };
  ArrayQueue.prototype.removeFirstOrNull_0_k$ = function () {
    if (this._head_0 === this._tail)
      return null;
    var element = this._elements[this._head_0];
    this._elements[this._head_0] = null;
    this._head_0 = (this._head_0 + 1 | 0) & (this._elements.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  ArrayQueue.$metadata$ = {
    simpleName: 'ArrayQueue',
    kind: 'class',
    interfaces: []
  };
  function OpDescriptor() {
  }
  OpDescriptor.$metadata$ = {
    simpleName: 'OpDescriptor',
    kind: 'class',
    interfaces: []
  };
  var UNDEFINED;
  var REUSABLE_CLAIMED;
  function resumeCancellableWith(_this_, result, onCancellation) {
    var tmp0_subject = _this_;
    var tmp;
    if (tmp0_subject instanceof DispatchedContinuation) {
      var tmp1_resumeCancellableWith_0 = _this_;
      var state_1 = toState_0(result, onCancellation);
      var tmp_0;
      if (tmp1_resumeCancellableWith_0._dispatcher.isDispatchNeeded_d7pszg_k$(tmp1_resumeCancellableWith_0._get_context__0_k$())) {
        tmp1_resumeCancellableWith_0.__state_1 = state_1;
        tmp1_resumeCancellableWith_0._set_resumeMode__majfzk_k$(1);
        tmp_0 = tmp1_resumeCancellableWith_0._dispatcher.dispatch_7n0ou3_k$(tmp1_resumeCancellableWith_0._get_context__0_k$(), tmp1_resumeCancellableWith_0);
      } else {
        var tmp$ret$0;
        $l$block_5: {
          var tmp0_executeUnconfined_0 = 1;
          {
          }
          var eventLoop_2 = ThreadLocalEventLoop_getInstance()._get_eventLoop__0_k$();
          if (false ? eventLoop_2._get_isUnconfinedQueueEmpty__0_k$() : false) {
            tmp$ret$0 = false;
            break $l$block_5;
          }var tmp_1;
          if (eventLoop_2._get_isUnconfinedLoopActive__0_k$()) {
            tmp1_resumeCancellableWith_0.__state_1 = state_1;
            tmp1_resumeCancellableWith_0._set_resumeMode__majfzk_k$(tmp0_executeUnconfined_0);
            eventLoop_2.dispatchUnconfined_3yrun8_k$(tmp1_resumeCancellableWith_0);
            tmp_1 = true;
          } else {
            {
              eventLoop_2.incrementUseCount_rpwsgn_k$(true);
              try {
                {
                  var tmp$ret$3;
                  $l$block_3: {
                    var job_1_4 = tmp1_resumeCancellableWith_0._get_context__0_k$().get_9uvjra_k$(Key_getInstance_3());
                    if (!(job_1_4 == null) ? !job_1_4._get_isActive__0_k$() : false) {
                      var cause_2_5 = job_1_4.getCancellationException_0_k$();
                      tmp1_resumeCancellableWith_0.cancelCompletedResult_6goujk_k$(state_1, cause_2_5);
                      var tmp$ret$2;
                      $l$block_1: {
                        var tmp$ret$1;
                        $l$block_0: {
                          var tmp0_failure_0_1_6 = Companion_getInstance_2();
                          tmp$ret$1 = _Result___init__impl_(createFailure(cause_2_5));
                          break $l$block_0;
                        }
                        tmp$ret$2 = tmp1_resumeCancellableWith_0.resumeWith_bnunh2_k$(tmp$ret$1);
                        break $l$block_1;
                      }
                      tmp$ret$3 = true;
                      break $l$block_3;
                    }tmp$ret$3 = false;
                    break $l$block_3;
                  }
                  if (!tmp$ret$3) {
                    {
                      var tmp$ret$4;
                      $l$block_4: {
                        var tmp0_withContinuationContext_0_7 = tmp1_resumeCancellableWith_0._continuation_0;
                        var tmp1_withContinuationContext_0_8 = tmp1_resumeCancellableWith_0._countOrElement;
                        tmp$ret$4 = tmp1_resumeCancellableWith_0._continuation_0.resumeWith_bnunh2_k$(result);
                        break $l$block_4;
                      }
                    }
                  } else {
                  }
                }
                $l$break: while (true) {
                  if (!eventLoop_2.processUnconfinedEvent_0_k$())
                    break $l$break;
                }
              } catch ($p) {
                if ($p instanceof Error) {
                  tmp1_resumeCancellableWith_0.handleFatalException_amk5yv_k$($p, null);
                } else {
                  {
                    throw $p;
                  }
                }
              }
              finally {
                eventLoop_2.decrementUseCount_rpwsgn_k$(true);
              }
            }
            tmp_1 = false;
          }
          tmp$ret$0 = tmp_1;
          break $l$block_5;
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      {
        tmp = _this_.resumeWith_bnunh2_k$(result);
      }
    }
    return tmp;
  }
  function resumeCancellableWith$default(_this_, result, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      onCancellation = null;
    return resumeCancellableWith(_this_, result, onCancellation);
  }
  function _get_reusableCancellableContinuation_($this) {
    var tmp = $this.__reusableCancellableContinuation._value_1;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this._dispatcher = dispatcher;
    this._continuation_0 = continuation;
    this.__state_1 = UNDEFINED;
    this._countOrElement = threadContextElements(this._get_context__0_k$());
    this.__reusableCancellableContinuation = atomic(null);
  }
  DispatchedContinuation.prototype._get_context__0_k$ = function () {
    return this._continuation_0._get_context__0_k$();
  };
  DispatchedContinuation.prototype.isReusable_0_k$ = function () {
    return !(this.__reusableCancellableContinuation._value_1 == null);
  };
  DispatchedContinuation.prototype.awaitReusability_sv8swh_k$ = function () {
    {
      var tmp0_loop_0 = this.__reusableCancellableContinuation;
      while (true) {
        {
          var tmp1__anonymous__1 = tmp0_loop_0._value_1;
          if (!(tmp1__anonymous__1 === REUSABLE_CLAIMED))
            return Unit_getInstance();
        }
      }
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.release_sv8swh_k$ = function () {
    this.awaitReusability_sv8swh_k$();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation_(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.detachChild_sv8swh_k$();
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  DispatchedContinuation.prototype.tryReleaseClaimedContinuation_7b8qoa_k$ = function (continuation) {
    {
      var tmp0_loop_0 = this.__reusableCancellableContinuation;
      while (true) {
        {
          var tmp1__anonymous__1 = tmp0_loop_0._value_1;
          if (tmp1__anonymous__1 === REUSABLE_CLAIMED) {
            if (this.__reusableCancellableContinuation.atomicfu$compareAndSet(REUSABLE_CLAIMED, continuation))
              return null;
          } else {
            if (tmp1__anonymous__1 instanceof Error) {
              {
                var tmp0_require_0_2 = this.__reusableCancellableContinuation.atomicfu$compareAndSet(tmp1__anonymous__1, null);
                {
                }
                {
                  {
                  }
                  if (!tmp0_require_0_2) {
                    var tmp$ret$0;
                    $l$block: {
                      tmp$ret$0 = 'Failed requirement.';
                      break $l$block;
                    }
                    var message_2_1_3 = tmp$ret$0;
                    throw IllegalArgumentException_init_$Create$(toString_1(message_2_1_3));
                  }}
              }
              return tmp1__anonymous__1;
            } else {
              {
                var tmp1_error_0_4 = '' + 'Inconsistent state ' + tmp1__anonymous__1;
                throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0_4));
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.postponeCancellation_onfaoi_k$ = function (cause) {
    {
      var tmp0_loop_0 = this.__reusableCancellableContinuation;
      while (true) {
        {
          var tmp1__anonymous__1 = tmp0_loop_0._value_1;
          var tmp0_subject_2 = tmp1__anonymous__1;
          if (equals_1(tmp0_subject_2, REUSABLE_CLAIMED)) {
            if (this.__reusableCancellableContinuation.atomicfu$compareAndSet(REUSABLE_CLAIMED, cause))
              return true;
          } else {
            if (tmp0_subject_2 instanceof Error)
              return true;
            else {
              {
                if (this.__reusableCancellableContinuation.atomicfu$compareAndSet(tmp1__anonymous__1, null))
                  return false;
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.takeState_0_k$ = function () {
    var state = this.__state_1;
    {
    }
    this.__state_1 = UNDEFINED;
    return state;
  };
  DispatchedContinuation.prototype._get_delegate__0_k$ = function () {
    return this;
  };
  DispatchedContinuation.prototype.resumeWith_bnunh2_k$ = function (result) {
    var context = this._continuation_0._get_context__0_k$();
    var state = toState$default(result, null, 1, null);
    if (this._dispatcher.isDispatchNeeded_d7pszg_k$(context)) {
      this.__state_1 = state;
      this._set_resumeMode__majfzk_k$(0);
      this._dispatcher.dispatch_7n0ou3_k$(context, this);
    } else {
      var tmp$ret$0;
      $l$block_1: {
        var tmp0_executeUnconfined_0 = 0;
        {
        }
        var eventLoop_2 = ThreadLocalEventLoop_getInstance()._get_eventLoop__0_k$();
        if (false ? eventLoop_2._get_isUnconfinedQueueEmpty__0_k$() : false) {
          tmp$ret$0 = false;
          break $l$block_1;
        }var tmp;
        if (eventLoop_2._get_isUnconfinedLoopActive__0_k$()) {
          this.__state_1 = state;
          this._set_resumeMode__majfzk_k$(tmp0_executeUnconfined_0);
          eventLoop_2.dispatchUnconfined_3yrun8_k$(this);
          tmp = true;
        } else {
          {
            eventLoop_2.incrementUseCount_rpwsgn_k$(true);
            try {
              {
                var tmp$ret$1;
                $l$block_0: {
                  var tmp0_withCoroutineContext_0_4 = this._get_context__0_k$();
                  var tmp1_withCoroutineContext_0_5 = this._countOrElement;
                  tmp$ret$1 = this._continuation_0.resumeWith_bnunh2_k$(result);
                  break $l$block_0;
                }
              }
              $l$break: while (true) {
                if (!eventLoop_2.processUnconfinedEvent_0_k$())
                  break $l$break;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                this.handleFatalException_amk5yv_k$($p, null);
              } else {
                {
                  throw $p;
                }
              }
            }
            finally {
              eventLoop_2.decrementUseCount_rpwsgn_k$(true);
            }
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
        break $l$block_1;
      }
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.cancelCompletedResult_6goujk_k$ = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState._onCancellation_0(cause);
    } else {
    }
  };
  DispatchedContinuation.prototype.toString = function () {
    return '' + 'DispatchedContinuation[' + this._dispatcher + ', ' + toDebugString(this._continuation_0) + ']';
  };
  DispatchedContinuation.$metadata$ = {
    simpleName: 'DispatchedContinuation',
    kind: 'class',
    interfaces: [CoroutineStackFrame, Continuation]
  };
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this._resumeMode = resumeMode;
  }
  DispatchedTask.prototype._set_resumeMode__majfzk_k$ = function (_set___) {
    this._resumeMode = _set___;
  };
  DispatchedTask.prototype._get_resumeMode__0_k$ = function () {
    return this._resumeMode;
  };
  DispatchedTask.prototype.cancelCompletedResult_6goujk_k$ = function (takenState, cause) {
  };
  DispatchedTask.prototype.getSuccessfulResult_6jiqgr_k$ = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  DispatchedTask.prototype.getExceptionalResult_wi7j7l_k$ = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._cause;
  };
  DispatchedTask.prototype.run_sv8swh_k$ = function () {
    {
    }
    var taskContext = _get_taskContext_(this);
    var fatalException = null;
    try {
      var tmp = this._get_delegate__0_k$();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate._continuation_0;
      var tmp$ret$5;
      $l$block_4: {
        var tmp0_withContinuationContext_0 = delegate._countOrElement;
        var context_2 = continuation._get_context__0_k$();
        var state_3 = this.takeState_0_k$();
        var exception_4 = this.getExceptionalResult_wi7j7l_k$(state_3);
        var job_5 = (exception_4 == null ? _get_isCancellableMode_(this._resumeMode) : false) ? context_2.get_9uvjra_k$(Key_getInstance_3()) : null;
        var tmp_0;
        if (!(job_5 == null) ? !job_5._get_isActive__0_k$() : false) {
          var cause_6 = job_5.getCancellationException_0_k$();
          this.cancelCompletedResult_6goujk_k$(state_3, cause_6);
          var tmp$ret$0;
          $l$block: {
            var tmp0_failure_0_7 = Companion_getInstance_2();
            var tmp1_failure_0_8 = recoverStackTrace(cause_6, continuation);
            tmp$ret$0 = _Result___init__impl_(createFailure(tmp1_failure_0_8));
            break $l$block;
          }
          tmp_0 = continuation.resumeWith_bnunh2_k$(tmp$ret$0);
        } else {
          var tmp_1;
          if (!(exception_4 == null)) {
            var tmp$ret$2;
            $l$block_1: {
              var tmp$ret$1;
              $l$block_0: {
                var tmp0_failure_0_1_9 = Companion_getInstance_2();
                tmp$ret$1 = _Result___init__impl_(createFailure(exception_4));
                break $l$block_0;
              }
              tmp$ret$2 = continuation.resumeWith_bnunh2_k$(tmp$ret$1);
              break $l$block_1;
            }
            tmp_1 = tmp$ret$2;
          } else {
            var tmp$ret$4;
            $l$block_3: {
              var tmp2_resume_0_10 = this.getSuccessfulResult_6jiqgr_k$(state_3);
              var tmp$ret$3;
              $l$block_2: {
                var tmp0_success_0_1_11 = Companion_getInstance_2();
                tmp$ret$3 = _Result___init__impl_(tmp2_resume_0_10);
                break $l$block_2;
              }
              tmp$ret$4 = continuation.resumeWith_bnunh2_k$(tmp$ret$3);
              break $l$block_3;
            }
            tmp_1 = tmp$ret$4;
          }
          tmp_0 = tmp_1;
        }
        tmp$ret$5 = tmp_0;
        break $l$block_4;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        fatalException = $p;
      } else {
        {
          throw $p;
        }
      }
    }
    finally {
      var tmp$ret$8;
      $l$block_7: {
        var tmp_2;
        try {
          var tmp$ret$6;
          $l$block_5: {
            var tmp0_success_0_1 = Companion_getInstance_2();
            var tmp1_success_0_2 = Unit_getInstance();
            tmp$ret$6 = _Result___init__impl_(Unit_getInstance());
            break $l$block_5;
          }
          tmp_2 = tmp$ret$6;
        } catch ($p_0) {
          var tmp_3;
          if ($p_0 instanceof Error) {
            var tmp$ret$7;
            $l$block_6: {
              var tmp2_failure_0_4 = Companion_getInstance_2();
              tmp$ret$7 = _Result___init__impl_(createFailure($p_0));
              break $l$block_6;
            }
            tmp_3 = tmp$ret$7;
          } else {
            {
              throw $p_0;
            }
          }
          tmp_2 = tmp_3;
        }
        tmp$ret$8 = tmp_2;
        break $l$block_7;
      }
      var result = tmp$ret$8;
      this.handleFatalException_amk5yv_k$(fatalException, Result__exceptionOrNull_impl(result));
    }
  };
  DispatchedTask.prototype.handleFatalException_amk5yv_k$ = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      {
      }
    }var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('' + 'Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this._get_delegate__0_k$()._get_context__0_k$(), reason);
  };
  DispatchedTask.$metadata$ = {
    simpleName: 'DispatchedTask',
    kind: 'class',
    interfaces: []
  };
  function _get_isReusableMode_(_this_) {
    return _this_ === 2;
  }
  function _get_isCancellableMode_(_this_) {
    return _this_ === 1 ? true : _this_ === 2;
  }
  function dispatch(_this_, mode) {
    {
    }
    var delegate = _this_._get_delegate__0_k$();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = _get_isCancellableMode_(mode) === _get_isCancellableMode_(_this_._resumeMode);
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      var dispatcher = delegate._dispatcher;
      var context = delegate._get_context__0_k$();
      if (dispatcher.isDispatchNeeded_d7pszg_k$(context)) {
        dispatcher.dispatch_7n0ou3_k$(context, _this_);
      } else {
        resumeUnconfined(_this_);
      }
    } else {
      {
        resume(_this_, delegate, undispatched);
      }
    }
  }
  function resumeUnconfined(_this_) {
    var eventLoop = ThreadLocalEventLoop_getInstance()._get_eventLoop__0_k$();
    if (eventLoop._get_isUnconfinedLoopActive__0_k$()) {
      eventLoop.dispatchUnconfined_3yrun8_k$(_this_);
    } else {
      {
        eventLoop.incrementUseCount_rpwsgn_k$(true);
        try {
          {
            resume(_this_, _this_._get_delegate__0_k$(), true);
          }
          $l$break: while (true) {
            if (!eventLoop.processUnconfinedEvent_0_k$())
              break $l$break;
          }
        } catch ($p) {
          if ($p instanceof Error) {
            _this_.handleFatalException_amk5yv_k$($p, null);
          } else {
            {
              throw $p;
            }
          }
        }
        finally {
          eventLoop.decrementUseCount_rpwsgn_k$(true);
        }
      }
    }
  }
  function resume(_this_, delegate, undispatched) {
    var state = _this_.takeState_0_k$();
    var exception = _this_.getExceptionalResult_wi7j7l_k$(state);
    var tmp;
    if (!(exception == null)) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_failure_0 = Companion_getInstance_2();
        tmp$ret$0 = _Result___init__impl_(createFailure(exception));
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_success_0 = Companion_getInstance_2();
        var tmp2_success_0 = _this_.getSuccessfulResult_6jiqgr_k$(state);
        tmp$ret$1 = _Result___init__impl_(tmp2_success_0);
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var result = tmp;
    if (undispatched) {
      var tmp3_resumeUndispatchedWith_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_withContinuationContext_0_1 = tmp3_resumeUndispatchedWith_0._continuation_0;
        var tmp1_withContinuationContext_0_2 = tmp3_resumeUndispatchedWith_0._countOrElement;
        tmp$ret$2 = tmp3_resumeUndispatchedWith_0._continuation_0.resumeWith_bnunh2_k$(result);
        break $l$block_1;
      }
    } else
      delegate.resumeWith_bnunh2_k$(result);
  }
  function Symbol(symbol) {
    this._symbol = symbol;
  }
  Symbol.prototype.toString = function () {
    return '' + '<' + this._symbol + '>';
  };
  Symbol.$metadata$ = {
    simpleName: 'Symbol',
    kind: 'class',
    interfaces: []
  };
  function startCoroutineCancellable(_this_, receiver, completion, onCancellation) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this_, receiver, completion));
      var tmp$ret$0;
      $l$block: {
        var tmp0_success_0_3 = Companion_getInstance_2();
        tmp$ret$0 = _Result___init__impl_(Unit_getInstance());
        break $l$block;
      }
      tmp = resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        tmp_1 = dispatcherFailure$accessor$glj1hg(completion, $p);
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable$default(_this_, receiver, completion, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    return startCoroutineCancellable(_this_, receiver, completion, onCancellation);
  }
  function dispatcherFailure(completion, e) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_failure_0 = Companion_getInstance_2();
      tmp$ret$0 = _Result___init__impl_(createFailure(e));
      break $l$block;
    }
    completion.resumeWith_bnunh2_k$(tmp$ret$0);
    throw e;
  }
  function startCoroutineCancellable_0(_this_, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this_);
      var tmp$ret$0;
      $l$block: {
        var tmp0_success_0_3 = Companion_getInstance_2();
        tmp$ret$0 = _Result___init__impl_(Unit_getInstance());
        break $l$block;
      }
      var tmp_1 = tmp$ret$0;
      tmp = resumeCancellableWith$default(tmp_0, tmp_1, null, 2, null);
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        tmp_2 = dispatcherFailure$accessor$glj1hg(fatalCompletion, $p);
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function dispatcherFailure$accessor$glj1hg(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startCoroutineUndispatched(_this_, receiver, completion) {
    var tmp$ret$8;
    $l$block_7: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = completion;
        break $l$block;
      }
      var actualCompletion_1 = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$5;
        $l$block_4: {
          var tmp$ret$4;
          $l$block_3: {
            var tmp0_withCoroutineContext_0_8 = completion._get_context__0_k$();
            var tmp$ret$3;
            $l$block_2: {
              var tmp$ret$2;
              $l$block_1: {
                var tmp$ret$1;
                $l$block_0: {
                  tmp$ret$1 = _this_;
                  break $l$block_0;
                }
                var a_1_2_9 = tmp$ret$1;
                tmp$ret$2 = typeof a_1_2_9 === 'function' ? a_1_2_9(receiver, actualCompletion_1) : _this_.invoke_20e8_k$(receiver, actualCompletion_1);
                break $l$block_1;
              }
              tmp$ret$3 = tmp$ret$2;
              break $l$block_2;
            }
            tmp$ret$4 = tmp$ret$3;
            break $l$block_3;
          }
          tmp$ret$5 = tmp$ret$4;
          break $l$block_4;
        }
        tmp = tmp$ret$5;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp$ret$7;
          $l$block_6: {
            var tmp$ret$6;
            $l$block_5: {
              var tmp0_failure_0_1_4 = Companion_getInstance_2();
              tmp$ret$6 = _Result___init__impl_(createFailure($p));
              break $l$block_5;
            }
            tmp$ret$7 = actualCompletion_1.resumeWith_bnunh2_k$(tmp$ret$6);
            break $l$block_6;
          }
          tmp$ret$8 = Unit_getInstance();
          break $l$block_7;
        } else {
          {
            throw $p;
          }
        }
        tmp = tmp_0;
      }
      var value_2 = tmp;
      if (!(value_2 === _get_COROUTINE_SUSPENDED_())) {
        var tmp$ret$10;
        $l$block_9: {
          var tmp0_resume_0_5 = (value_2 == null ? true : isObject(value_2)) ? value_2 : THROW_CCE();
          var tmp$ret$9;
          $l$block_8: {
            var tmp0_success_0_1_6 = Companion_getInstance_2();
            tmp$ret$9 = _Result___init__impl_(tmp0_resume_0_5);
            break $l$block_8;
          }
          tmp$ret$10 = actualCompletion_1.resumeWith_bnunh2_k$(tmp$ret$9);
          break $l$block_9;
        }
      }}
  }
  function SelectClause0() {
  }
  SelectClause0.$metadata$ = {
    simpleName: 'SelectClause0',
    kind: 'interface',
    interfaces: []
  };
  function SelectClause1() {
  }
  SelectClause1.$metadata$ = {
    simpleName: 'SelectClause1',
    kind: 'interface',
    interfaces: []
  };
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  CompletionHandlerBase.$metadata$ = {
    simpleName: 'CompletionHandlerBase',
    kind: 'class',
    interfaces: []
  };
  function invokeIt(_this_, cause) {
    var tmp0_subject = typeof _this_;
    if (tmp0_subject === 'function')
      _this_(cause);
    else {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _this_;
        break $l$block;
      }
      tmp$ret$0.invoke(cause);
    }
  }
  function CancelHandlerBase() {
  }
  CancelHandlerBase.$metadata$ = {
    simpleName: 'CancelHandlerBase',
    kind: 'class',
    interfaces: []
  };
  function toDebugString(_this_) {
    return toString_1(_this_);
  }
  function newCoroutineContext(_this_, context) {
    var combined = _this_._get_coroutineContext__0_k$().plus_d7pszg_k$(context);
    return (!(combined === Dispatchers_getInstance()._Default) ? combined.get_9uvjra_k$(Key_getInstance()) == null : false) ? combined.plus_d7pszg_k$(Dispatchers_getInstance()._Default) : combined;
  }
  function _get_coroutineName_(_this_) {
    return null;
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_asDynamic_0 = window;
          tmp$ret$0 = tmp0_asDynamic_0;
          break $l$block;
        }
        tmp_1 = tmp$ret$0 != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp$ret$1;
        $l$block_0: {
          var tmp1_asDynamic_0 = window;
          tmp$ret$1 = tmp1_asDynamic_0;
          break $l$block_0;
        }
        tmp_0 = !(typeof tmp$ret$1.addEventListener === 'undefined');
      } else {
        {
          tmp_0 = false;
        }
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' ? true : typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          {
            tmp = NodeDispatcher_getInstance();
          }
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  var counter;
  var DEBUG;
  function _get_classSimpleName_(_this_) {
    var tmp0_elvis_lhs = getKClassFromExpression_0(_this_)._get_simpleName__0_k$();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function _get_hexAddress_(_this_) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this_;
      break $l$block;
    }
    var result = tmp$ret$0.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = _this_;
        break $l$block_0;
      }
      tmp$ret$1.__debug_counter = result;
    }return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this._Default = createDefaultDispatcher();
    this._Main = new JsMainDispatcher(this._Default, false);
    this._Unconfined = Unconfined_getInstance();
  }
  Dispatchers.$metadata$ = {
    simpleName: 'Dispatchers',
    kind: 'object',
    interfaces: []
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this._delegate_0 = delegate;
    this._invokeImmediately = invokeImmediately;
    this._immediate = this._invokeImmediately ? this : new JsMainDispatcher(this._delegate_0, true);
  }
  JsMainDispatcher.prototype._get_immediate__0_k$ = function () {
    return this._immediate;
  };
  JsMainDispatcher.prototype.isDispatchNeeded_d7pszg_k$ = function (context) {
    return !this._invokeImmediately;
  };
  JsMainDispatcher.prototype.dispatch_7n0ou3_k$ = function (context, block) {
    return this._delegate_0.dispatch_7n0ou3_k$(context, block);
  };
  JsMainDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.toStringInternalImpl_0_k$();
    return tmp0_elvis_lhs == null ? this._delegate_0.toString() : tmp0_elvis_lhs;
  };
  JsMainDispatcher.$metadata$ = {
    simpleName: 'JsMainDispatcher',
    kind: 'class',
    interfaces: []
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  UnconfinedEventLoop.prototype.dispatch_7n0ou3_k$ = function (context, block) {
    unsupported();
  };
  UnconfinedEventLoop.$metadata$ = {
    simpleName: 'UnconfinedEventLoop',
    kind: 'class',
    interfaces: []
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$_0('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    this._job_0 = job;
    captureStack(this, JobCancellationException);
  }
  JobCancellationException.prototype.toString = function () {
    return '' + CancellationException.prototype.toString.call(this) + '; job=' + this._job_0;
  };
  JobCancellationException.prototype.equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        {
          tmp_2 = false;
        }
      }
      if (tmp_2) {
        tmp_1 = equals_1(other._job_0, this._job_0);
      } else {
        {
          tmp_1 = false;
        }
      }
      if (tmp_1) {
        tmp_0 = equals_1(other.cause, this.cause);
      } else {
        {
          tmp_0 = false;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  JobCancellationException.prototype.hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this._job_0) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  JobCancellationException.$metadata$ = {
    simpleName: 'JobCancellationException',
    kind: 'class',
    interfaces: []
  };
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  NodeDispatcher.prototype.scheduleQueueProcessing_sv8swh_k$ = function () {
    process.nextTick(this._get_messageQueue__0_k$()._processQueue);
  };
  NodeDispatcher.$metadata$ = {
    simpleName: 'NodeDispatcher',
    kind: 'object',
    interfaces: []
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  SetTimeoutDispatcher.prototype.scheduleQueueProcessing_sv8swh_k$ = function () {
    setTimeout(this._get_messageQueue__0_k$()._processQueue, 0);
    Unit_getInstance();
  };
  SetTimeoutDispatcher.$metadata$ = {
    simpleName: 'SetTimeoutDispatcher',
    kind: 'object',
    interfaces: []
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function _no_name_provided__37(this$0) {
    this._this$0_6 = this$0;
  }
  _no_name_provided__37.prototype.invoke_sv8swh_k$ = function () {
    this._this$0_6.process_sv8swh_k$();
  };
  _no_name_provided__37.prototype.invoke_0_k$ = function () {
    this.invoke_sv8swh_k$();
    return Unit_getInstance();
  };
  _no_name_provided__37.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function ScheduledMessageQueue($outer) {
    this._$this_4 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp._processQueue = _no_name_provided_$factory_29(this);
  }
  ScheduledMessageQueue.prototype.schedule_sv8swh_k$ = function () {
    this._$this_4.scheduleQueueProcessing_sv8swh_k$();
  };
  ScheduledMessageQueue.prototype.reschedule_sv8swh_k$ = function () {
    setTimeout(this._processQueue, 0);
    Unit_getInstance();
  };
  ScheduledMessageQueue.$metadata$ = {
    simpleName: 'ScheduledMessageQueue',
    kind: 'class',
    interfaces: []
  };
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this._messageQueue = new ScheduledMessageQueue(this);
  }
  SetTimeoutBasedDispatcher.prototype._get_messageQueue__0_k$ = function () {
    return this._messageQueue;
  };
  SetTimeoutBasedDispatcher.prototype.dispatch_7n0ou3_k$ = function (context, block) {
    this._messageQueue.enqueue_iz8ddj_k$(block);
  };
  SetTimeoutBasedDispatcher.$metadata$ = {
    simpleName: 'SetTimeoutBasedDispatcher',
    kind: 'class',
    interfaces: [Delay]
  };
  function MessageQueue() {
    ArrayQueue.call(this);
    this._yieldEvery = 16;
    this._scheduled = false;
  }
  MessageQueue.prototype.enqueue_iz8ddj_k$ = function (element) {
    this.addLast_iav7o_k$(element);
    if (!this._scheduled) {
      this._scheduled = true;
      this.schedule_sv8swh_k$();
    }};
  MessageQueue.prototype.process_sv8swh_k$ = function () {
    try {
      {
        var tmp0_repeat_0 = this._yieldEvery;
        {
        }
        var inductionVariable = 0;
        if (inductionVariable < tmp0_repeat_0)
          do {
            var index_2 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            {
              var tmp0_elvis_lhs_5 = this.removeFirstOrNull_0_k$();
              var tmp;
              if (tmp0_elvis_lhs_5 == null) {
                return Unit_getInstance();
              } else {
                tmp = tmp0_elvis_lhs_5;
              }
              var element_4 = tmp;
              element_4.run_sv8swh_k$();
            }
          }
           while (inductionVariable < tmp0_repeat_0);
      }
    }finally {
      if (this._get_isEmpty__0_k$()) {
        this._scheduled = false;
      } else {
        this.reschedule_sv8swh_k$();
      }
    }
  };
  MessageQueue.$metadata$ = {
    simpleName: 'MessageQueue',
    kind: 'class',
    interfaces: []
  };
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this._window = window_0;
    this._queue = new WindowMessageQueue(this._window);
  }
  WindowDispatcher.prototype.dispatch_7n0ou3_k$ = function (context, block) {
    return this._queue.enqueue_iz8ddj_k$(block);
  };
  WindowDispatcher.$metadata$ = {
    simpleName: 'WindowDispatcher',
    kind: 'class',
    interfaces: [Delay]
  };
  function _no_name_provided__38(this$0) {
    this._this$0_7 = this$0;
  }
  _no_name_provided__38.prototype.invoke_h9nkbz_k$ = function (event) {
    if (event.source == this._this$0_7._window_0 ? event.data == this._this$0_7._messageName : false) {
      event.stopPropagation();
      this._this$0_7.process_sv8swh_k$();
    }};
  _no_name_provided__38.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_h9nkbz_k$((p1 == null ? true : p1) ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__38.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__39(this$0) {
    this._this$0_8 = this$0;
  }
  _no_name_provided__39.prototype.invoke_89eg7z_k$ = function (it) {
    this._this$0_8.process_sv8swh_k$();
  };
  _no_name_provided__39.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_89eg7z_k$(p1 instanceof Unit ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__39.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this._window_0 = window_0;
    this._messageName = 'dispatchCoroutine';
    this._window_0.addEventListener('message', _no_name_provided_$factory_30(this), true);
  }
  WindowMessageQueue.prototype.schedule_sv8swh_k$ = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(_no_name_provided_$factory_31(this));
    Unit_getInstance();
  };
  WindowMessageQueue.prototype.reschedule_sv8swh_k$ = function () {
    this._window_0.postMessage(this._messageName, '*');
  };
  WindowMessageQueue.$metadata$ = {
    simpleName: 'WindowMessageQueue',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_29(this$0) {
    var i = new _no_name_provided__37(this$0);
    return function () {
      i.invoke_sv8swh_k$();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_30(this$0) {
    var i = new _no_name_provided__38(this$0);
    return function (p1) {
      i.invoke_h9nkbz_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_31(this$0) {
    var i = new _no_name_provided__39(this$0);
    return function (p1) {
      i.invoke_89eg7z_k$(p1);
      return Unit_getInstance();
    };
  }
  function promise(_this_, context, start, block) {
    return asPromise(async(_this_, context, start, block));
  }
  function promise$default(_this_, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return promise(_this_, context, start, block);
  }
  function await_0(_this_, $cont) {
    var tmp$ret$0;
    $l$block: {
      var tmp0__anonymous__1_1 = $cont;
      var cancellable_2_2 = new CancellableContinuationImpl(intercepted(tmp0__anonymous__1_1), 1);
      cancellable_2_2.initCancellability_sv8swh_k$();
      {
        var tmp = _no_name_provided_$factory_32(cancellable_2_2);
        _this_.then(tmp, _no_name_provided_$factory_33(cancellable_2_2));
        Unit_getInstance();
      }
      tmp$ret$0 = cancellable_2_2.getResult_0_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function asPromise(_this_) {
    var promise_0 = new Promise(_no_name_provided_$factory_34(_this_));
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = promise_0;
      break $l$block;
    }
    tmp$ret$0.deferred = _this_;
    return promise_0;
  }
  function _no_name_provided__40($cancellable_2_2) {
    this._$cancellable_2_2 = $cancellable_2_2;
  }
  _no_name_provided__40.prototype.invoke_iav7o_k$ = function (it) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_success_0_1_5 = Companion_getInstance_2();
        tmp$ret$0 = _Result___init__impl_(it);
        break $l$block;
      }
      tmp$ret$1 = this._$cancellable_2_2.resumeWith_bnunh2_k$(tmp$ret$0);
      break $l$block_0;
    }
  };
  _no_name_provided__40.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_iav7o_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__40.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__41($cancellable_2_2) {
    this._$cancellable_2_2_0 = $cancellable_2_2;
  }
  _no_name_provided__41.prototype.invoke_1ti8hr_k$ = function (it) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_failure_0_1_7 = Companion_getInstance_2();
        tmp$ret$0 = _Result___init__impl_(createFailure(it));
        break $l$block;
      }
      tmp$ret$1 = this._$cancellable_2_2_0.resumeWith_bnunh2_k$(tmp$ret$0);
      break $l$block_0;
    }
  };
  _no_name_provided__41.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_1ti8hr_k$(p1 instanceof Error ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__41.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__42($this_asPromise, $reject, $resolve) {
    this._$this_asPromise = $this_asPromise;
    this._$reject = $reject;
    this._$resolve = $resolve;
  }
  _no_name_provided__42.prototype.invoke_houul8_k$ = function (it) {
    var e = this._$this_asPromise.getCompletionExceptionOrNull_0_k$();
    if (!(e == null)) {
      this._$reject(e);
    } else {
      this._$resolve(this._$this_asPromise.getCompleted_0_k$());
    }
  };
  _no_name_provided__42.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_houul8_k$((p1 == null ? true : p1 instanceof Error) ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__42.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__43($this_asPromise) {
    this._$this_asPromise_0 = $this_asPromise;
  }
  _no_name_provided__43.prototype.invoke_h3emdu_k$ = function (resolve, reject) {
    this._$this_asPromise_0.invokeOnCompletion_wjzpsu_k$(_no_name_provided_$factory_35(this._$this_asPromise_0, reject, resolve));
    Unit_getInstance();
  };
  _no_name_provided__43.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? typeof p1 === 'function' : false) ? p1 : THROW_CCE();
    this.invoke_h3emdu_k$(tmp, (!(p2 == null) ? typeof p2 === 'function' : false) ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__43.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_32($cancellable_2_2) {
    var i = new _no_name_provided__40($cancellable_2_2);
    return function (p1) {
      i.invoke_iav7o_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_33($cancellable_2_2) {
    var i = new _no_name_provided__41($cancellable_2_2);
    return function (p1) {
      i.invoke_1ti8hr_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_34($this_asPromise) {
    var i = new _no_name_provided__43($this_asPromise);
    return function (p1, p2) {
      i.invoke_h3emdu_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_35($this_asPromise, $reject, $resolve) {
    var i = new _no_name_provided__42($this_asPromise, $reject, $resolve);
    return function (p1) {
      i.invoke_houul8_k$(p1);
      return Unit_getInstance();
    };
  }
  function Runnable() {
  }
  Runnable.$metadata$ = {
    simpleName: 'Runnable',
    kind: 'interface',
    interfaces: []
  };
  function SchedulerTask() {
  }
  SchedulerTask.$metadata$ = {
    simpleName: 'SchedulerTask',
    kind: 'class',
    interfaces: [Runnable]
  };
  function _get_taskContext_(_this_) {
    return Unit_getInstance();
  }
  function asCoroutineDispatcher(_this_) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this_;
      break $l$block;
    }
    var tmp0_elvis_lhs = tmp$ret$0.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_also_0 = new WindowDispatcher(_this_);
        {
        }
        {
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = _this_;
            break $l$block_0;
          }
          tmp$ret$1.coroutineDispatcher = tmp0_also_0;
        }
        tmp$ret$2 = tmp0_also_0;
        break $l$block_1;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  LinkedListHead.$metadata$ = {
    simpleName: 'LinkedListHead',
    kind: 'class',
    interfaces: []
  };
  function LinkedListNode() {
    this.__next = this;
    this.__prev = this;
    this.__removed = false;
  }
  LinkedListNode.prototype._get__next__0_k$ = function () {
    return this.__next;
  };
  LinkedListNode.prototype.addLast_qdrmxw_k$ = function (node) {
    var prev = this.__prev;
    node.__next = this;
    node.__prev = prev;
    prev.__next = node;
    this.__prev = node;
  };
  LinkedListNode.prototype.remove_0_k$ = function () {
    return this.removeImpl_0_k$();
  };
  LinkedListNode.prototype.removeImpl_0_k$ = function () {
    if (this.__removed)
      return false;
    var prev = this.__prev;
    var next = this.__next;
    prev.__next = next;
    next.__prev = prev;
    this.__removed = true;
    return true;
  };
  LinkedListNode.prototype.addOneIfEmpty_fpxpjn_k$ = function (node) {
    if (!(this.__next === this))
      return false;
    this.addLast_qdrmxw_k$(node);
    return true;
  };
  LinkedListNode.$metadata$ = {
    simpleName: 'LinkedListNode',
    kind: 'class',
    interfaces: []
  };
  function unwrap(exception) {
    return exception;
  }
  function CoroutineStackFrame() {
  }
  CoroutineStackFrame.$metadata$ = {
    simpleName: 'CoroutineStackFrame',
    kind: 'interface',
    interfaces: []
  };
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this._value_5 = null;
  }
  CommonThreadLocal.prototype.get_0_k$ = function () {
    var tmp = this._value_5;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  CommonThreadLocal.prototype.set_iav7o_k$ = function (value) {
    this._value_5 = value;
  };
  CommonThreadLocal.$metadata$ = {
    simpleName: 'CommonThreadLocal',
    kind: 'class',
    interfaces: []
  };
  function Allocator() {
  }
  Allocator.$metadata$ = {
    simpleName: 'Allocator',
    kind: 'interface',
    interfaces: []
  };
  function encodeToImpl(_this_, destination, input, fromIndex, toIndex) {
    var start = fromIndex;
    if (start >= toIndex)
      return 0;
    var bytesWritten = 0;
    {
      var tail_1 = prepareWriteHead(destination, 1, null);
      try {
        var size_2;
        $l$break: while (true) {
          var tmp$ret$3;
          $l$block_2: {
            var tmp0__anonymous__3 = tail_1;
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = tmp0__anonymous__3._get_limit__0_k$() - tmp0__anonymous__3._get_writePosition__0_k$() | 0;
              break $l$block;
            }
            var before_4 = tmp$ret$0;
            var rc_5 = encodeImpl(_this_, input, start, toIndex, tmp0__anonymous__3);
            {
              var tmp0_check_0_6 = rc_5 >= 0;
              {
              }
              {
                {
                }
                if (!tmp0_check_0_6) {
                  var tmp$ret$1;
                  $l$block_0: {
                    tmp$ret$1 = 'Check failed.';
                    break $l$block_0;
                  }
                  var message_2_1_7 = tmp$ret$1;
                  throw IllegalStateException_init_$Create$(toString_1(message_2_1_7));
                }}
            }
            start = start + rc_5 | 0;
            var tmp = bytesWritten;
            var tmp$ret$2;
            $l$block_1: {
              tmp$ret$2 = tmp0__anonymous__3._get_limit__0_k$() - tmp0__anonymous__3._get_writePosition__0_k$() | 0;
              break $l$block_1;
            }
            bytesWritten = tmp + (before_4 - tmp$ret$2 | 0) | 0;
            tmp$ret$3 = start >= toIndex ? 0 : rc_5 === 0 ? 8 : 1;
            break $l$block_2;
          }
          size_2 = tmp$ret$3;
          if (size_2 <= 0)
            break $l$break;
          tail_1 = prepareWriteHead(destination, size_2, tail_1);
        }
      }finally {
        afterHeadWrite(destination, tail_1);
      }
    }
    bytesWritten = bytesWritten + encodeCompleteImpl(_this_, destination) | 0;
    return bytesWritten;
  }
  function encodeCompleteImpl(_this_, dst) {
    var size_0 = 1;
    var bytesWritten = 0;
    {
      var tail_1 = prepareWriteHead(dst, 1, null);
      try {
        $l$break: while (true) {
          var tmp$ret$2;
          $l$block_1: {
            var tmp0__anonymous__2 = tail_1;
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = tmp0__anonymous__2._get_limit__0_k$() - tmp0__anonymous__2._get_writePosition__0_k$() | 0;
              break $l$block;
            }
            var before_3 = tmp$ret$0;
            if (encodeComplete(_this_, tmp0__anonymous__2)) {
              size_0 = 0;
            } else {
              var tmp0_4 = size_0;
              size_0 = tmp0_4 + 1 | 0;
              Unit_getInstance();
            }
            var tmp = bytesWritten;
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = tmp0__anonymous__2._get_limit__0_k$() - tmp0__anonymous__2._get_writePosition__0_k$() | 0;
              break $l$block_0;
            }
            bytesWritten = tmp + (before_3 - tmp$ret$1 | 0) | 0;
            tmp$ret$2 = size_0 > 0;
            break $l$block_1;
          }
          if (!tmp$ret$2)
            break $l$break;
          else {
          }
          tail_1 = prepareWriteHead(dst, 1, tail_1);
        }
      }finally {
        afterHeadWrite(dst, tail_1);
      }
    }
    return bytesWritten;
  }
  function encodeToByteArrayImpl1(_this_, input, fromIndex, toIndex) {
    var start = fromIndex;
    if (start >= toIndex)
      return EmptyByteArray;
    var single_2 = Companion_getInstance_16()._Pool.borrow_0_k$();
    try {
      var rc = encodeImpl(_this_, input, start, toIndex, single_2);
      start = start + rc | 0;
      if (start === toIndex) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = single_2._get_writePosition__0_k$() - single_2._get_readPosition__0_k$() | 0;
          break $l$block;
        }
        var result = new Int8Array(tmp$ret$0);
        readFully$default(single_2, result, 0, 0, 6, null);
        return result;
      }var tmp$ret$1;
      $l$block_0: {
        {
        }
        var builder_2 = BytePacketBuilder_0(0);
        try {
          {
            builder_2.appendSingleChunk_kpwap4_k$(single_2.duplicate_0_k$());
            encodeToImpl(_this_, builder_2, input, start, toIndex);
            Unit_getInstance();
          }
          tmp$ret$1 = builder_2.build_0_k$();
          break $l$block_0;
        } catch ($p) {
          if ($p instanceof Error) {
            builder_2.release_sv8swh_k$();
            throw $p;
          } else {
            {
              throw $p;
            }
          }
        }
      }
      var tmp = tmp$ret$1;
      return readBytes$default(tmp, 0, 1, null);
    }finally {
      single_2.release_fz49v2_k$(Companion_getInstance_16()._Pool);
    }
  }
  function _set__head_($this, newHead) {
    $this._state_3._head_1 = newHead;
    $this._state_3._headMemory = newHead._get_memory__0_k$();
    $this._state_3._headPosition = newHead._get_readPosition__0_k$();
    $this._state_3._headEndExclusive = newHead._get_writePosition__0_k$();
  }
  function _get__head_($this) {
    return $this._state_3._head_1;
  }
  function _set_tailRemaining_($this, newValue) {
    {
      var tmp0_require_0 = newValue.compareTo_wiekkq_k$(new Long(0, 0)) >= 0;
      {
      }
      if (!tmp0_require_0) {
        var m_2 = new _no_name_provided__3_0(newValue);
        m_2.doFail_4_0_k$();
      }}
    $this._state_3._tailRemaining = newValue;
  }
  function _get_tailRemaining_($this) {
    return $this._state_3._tailRemaining;
  }
  function doPrefetch($this, min) {
    var tail = findTail(_get__head_($this));
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = $this._get_headEndExclusive__0_k$() - $this._get_headPosition__0_k$() | 0;
      break $l$block;
    }
    var available = numberToLong(tmp$ret$0).plus_wiekkq_k$(_get_tailRemaining_($this));
    do {
      var next = $this.fill_0_k$();
      if (next == null) {
        $this._noMoreChunksAvailable = true;
        return false;
      }var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = next._get_writePosition__0_k$() - next._get_readPosition__0_k$() | 0;
        break $l$block_0;
      }
      var chunkSize = tmp$ret$1;
      if (tail === Companion_getInstance_16()._get_Empty__0_k$()) {
        _set__head_($this, next);
        tail = next;
      } else {
        tail._set_next__638tqt_k$(next);
        var tmp0_this = $this;
        var tmp$ret$2;
        $l$block_1: {
          var tmp0_plus_0 = _get_tailRemaining_(tmp0_this);
          tmp$ret$2 = tmp0_plus_0.plus_wiekkq_k$(toLong(chunkSize));
          break $l$block_1;
        }
        _set_tailRemaining_(tmp0_this, tmp$ret$2);
      }
      var tmp$ret$3;
      $l$block_2: {
        var tmp1_plus_0 = available;
        tmp$ret$3 = tmp1_plus_0.plus_wiekkq_k$(toLong(chunkSize));
        break $l$block_2;
      }
      available = tmp$ret$3;
    }
     while (available.compareTo_wiekkq_k$(min) < 0);
    return true;
  }
  function discardAsMuchAsPossible($this, n, skipped) {
    var $this_0 = $this;
    var n_0 = n;
    var skipped_0 = skipped;
    while (true) {
      var $this_1 = $this_0;
      var n_1 = n_0;
      var skipped_1 = skipped_0;
      if (n_1.equals(new Long(0, 0)))
        return skipped_1;
      var tmp0_elvis_lhs = $this_1.prepareRead_ha5a7z_k$(1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return skipped_1;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = current._get_writePosition__0_k$() - current._get_readPosition__0_k$() | 0;
          break $l$block;
        }
        var tmp0_minOf_0 = toLong(tmp$ret$0);
        tmp$ret$1 = tmp0_minOf_0.compareTo_wiekkq_k$(n_1) <= 0 ? tmp0_minOf_0 : n_1;
        break $l$block_0;
      }
      var size_0 = tmp$ret$1.toInt_0_k$();
      current.discardExact_majfzk_k$(size_0);
      var tmp1_this = $this_1;
      tmp1_this._set_headPosition__majfzk_k$(tmp1_this._get_headPosition__0_k$() + size_0 | 0);
      afterRead($this_1, current);
      $this_0 = $this_1;
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = n_1.minus_wiekkq_k$(toLong(size_0));
        break $l$block_1;
      }
      n_0 = tmp$ret$2;
      var tmp$ret$3;
      $l$block_2: {
        tmp$ret$3 = skipped_1.plus_wiekkq_k$(toLong(size_0));
        break $l$block_2;
      }
      skipped_0 = tmp$ret$3;
      continue;
    }
  }
  function fixGapAfterReadFallback($this, current) {
    if ($this._noMoreChunksAvailable ? current._get_next__0_k$() == null : false) {
      $this._set_headPosition__majfzk_k$(current._get_readPosition__0_k$());
      $this._set_headEndExclusive__majfzk_k$(current._get_writePosition__0_k$());
      _set_tailRemaining_($this, new Long(0, 0));
      return Unit_getInstance();
    }var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = current._get_writePosition__0_k$() - current._get_readPosition__0_k$() | 0;
      break $l$block;
    }
    var size_0 = tmp$ret$0;
    var tmp$ret$2;
    $l$block_1: {
      Companion_getInstance_13();
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = current._capacity - current._get_limit__0_k$() | 0;
        break $l$block_0;
      }
      var tmp0_minOf_0 = 8 - tmp$ret$1 | 0;
      tmp$ret$2 = Math.min(size_0, tmp0_minOf_0);
      break $l$block_1;
    }
    var overrun = tmp$ret$2;
    if (size_0 > overrun) {
      fixGapAfterReadFallbackUnreserved($this, current, size_0, overrun);
    } else {
      var new_0 = $this._pool.borrow_0_k$();
      Companion_getInstance_13();
      new_0.reserveEndGap_majfzk_k$(8);
      new_0._set_next__638tqt_k$(current.cleanNext_0_k$());
      writeBufferAppend(new_0, current, size_0);
      Unit_getInstance();
      _set__head_($this, new_0);
    }
    current.release_fz49v2_k$($this._pool);
  }
  function fixGapAfterReadFallbackUnreserved($this, current, size_0, overrun) {
    var chunk1 = $this._pool.borrow_0_k$();
    var chunk2 = $this._pool.borrow_0_k$();
    Companion_getInstance_13();
    chunk1.reserveEndGap_majfzk_k$(8);
    Companion_getInstance_13();
    chunk2.reserveEndGap_majfzk_k$(8);
    chunk1._set_next__638tqt_k$(chunk2);
    chunk2._set_next__638tqt_k$(current.cleanNext_0_k$());
    writeBufferAppend(chunk1, current, size_0 - overrun | 0);
    Unit_getInstance();
    writeBufferAppend(chunk2, current, overrun);
    Unit_getInstance();
    _set__head_($this, chunk1);
    _set_tailRemaining_($this, remainingAll(chunk2));
  }
  function ensureNext($this, current, empty) {
    var $this_0 = $this;
    var current_0 = current;
    var empty_0 = empty;
    while (true) {
      var $this_1 = $this_0;
      var current_1 = current_0;
      var empty_1 = empty_0;
      if (current_1 === empty_1) {
        return doFill($this_1);
      }var next = current_1.cleanNext_0_k$();
      current_1.release_fz49v2_k$($this_1._pool);
      var tmp;
      if (next == null) {
        _set__head_($this_1, empty_1);
        _set_tailRemaining_($this_1, new Long(0, 0));
        $this_0 = $this_1;
        current_0 = empty_1;
        empty_0 = empty_1;
        continue;
      } else {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = next._get_writePosition__0_k$() > next._get_readPosition__0_k$();
          break $l$block;
        }
        if (tmp$ret$0) {
          _set__head_($this_1, next);
          var tmp0_this = $this_1;
          var tmp$ret$2;
          $l$block_1: {
            var tmp0_minus_0 = _get_tailRemaining_(tmp0_this);
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = next._get_writePosition__0_k$() - next._get_readPosition__0_k$() | 0;
              break $l$block_0;
            }
            var tmp1_minus_0 = tmp$ret$1;
            tmp$ret$2 = tmp0_minus_0.minus_wiekkq_k$(toLong(tmp1_minus_0));
            break $l$block_1;
          }
          _set_tailRemaining_(tmp0_this, tmp$ret$2);
          tmp = next;
        } else {
          {
            $this_0 = $this_1;
            current_0 = next;
            empty_0 = empty_1;
            continue;
          }
        }
      }
      return tmp;
    }
  }
  function doFill($this) {
    if ($this._noMoreChunksAvailable)
      return null;
    var chunk = $this.fill_0_k$();
    if (chunk == null) {
      $this._noMoreChunksAvailable = true;
      return null;
    }appendView($this, chunk);
    return chunk;
  }
  function appendView($this, chunk) {
    var tail = findTail(_get__head_($this));
    if (tail === Companion_getInstance_16()._get_Empty__0_k$()) {
      _set__head_($this, chunk);
      {
        var tmp0_require_0 = _get_tailRemaining_($this).equals(new Long(0, 0));
        {
        }
        if (!tmp0_require_0) {
          var m_2 = new _no_name_provided__3_1();
          m_2.doFail_4_0_k$();
        }}
      var tmp0_safe_receiver = chunk._get_next__0_k$();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : remainingAll(tmp0_safe_receiver);
      _set_tailRemaining_($this, tmp1_elvis_lhs == null ? new Long(0, 0) : tmp1_elvis_lhs);
    } else {
      tail._set_next__638tqt_k$(chunk);
      var tmp2_this = $this;
      _set_tailRemaining_(tmp2_this, _get_tailRemaining_(tmp2_this).plus_wiekkq_k$(remainingAll(chunk)));
    }
  }
  function prepareReadLoop($this, minSize, head) {
    var $this_0 = $this;
    var minSize_0 = minSize;
    var head_0 = head;
    while (true) {
      var $this_1 = $this_0;
      var minSize_1 = minSize_0;
      var head_1 = head_0;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = $this_1._get_headEndExclusive__0_k$() - $this_1._get_headPosition__0_k$() | 0;
        break $l$block;
      }
      var headSize = tmp$ret$0;
      if (headSize >= minSize_1)
        return head_1;
      var tmp0_elvis_lhs = head_1._get_next__0_k$();
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? doFill($this_1) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        return null;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var next = tmp;
      if (headSize === 0) {
        if (!(head_1 === Companion_getInstance_16()._get_Empty__0_k$())) {
          $this_1.releaseHead_dq8ghz_k$(head_1);
          Unit_getInstance();
        }$this_0 = $this_1;
        minSize_0 = minSize_1;
        head_0 = next;
        continue;
      } else {
        var desiredExtraBytes = minSize_1 - headSize | 0;
        var copied = writeBufferAppend(head_1, next, desiredExtraBytes);
        $this_1._set_headEndExclusive__majfzk_k$(head_1._get_writePosition__0_k$());
        var tmp2_this = $this_1;
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_minus_0 = _get_tailRemaining_(tmp2_this);
          tmp$ret$1 = tmp0_minus_0.minus_wiekkq_k$(toLong(copied));
          break $l$block_0;
        }
        _set_tailRemaining_(tmp2_this, tmp$ret$1);
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = next._get_writePosition__0_k$() > next._get_readPosition__0_k$();
          break $l$block_1;
        }
        if (!tmp$ret$2) {
          head_1._set_next__638tqt_k$(null);
          head_1._set_next__638tqt_k$(next.cleanNext_0_k$());
          next.release_fz49v2_k$($this_1._pool);
        } else {
          {
            next.reserveStartGap_majfzk_k$(copied);
          }
        }
      }
      var tmp$ret$3;
      $l$block_2: {
        tmp$ret$3 = head_1._get_writePosition__0_k$() - head_1._get_readPosition__0_k$() | 0;
        break $l$block_2;
      }
      if (tmp$ret$3 >= minSize_1)
        return head_1;
      else {
      }
      Companion_getInstance_13();
      if (minSize_1 > 8) {
        minSizeIsTooBig($this_1, minSize_1);
      } else {
      }
      $this_0 = $this_1;
      minSize_0 = minSize_1;
      head_0 = head_1;
      continue;
    }
  }
  function minSizeIsTooBig($this, minSize) {
    Companion_getInstance_13();
    throw IllegalStateException_init_$Create$('' + 'minSize of ' + minSize + ' is too big (should be less than ' + 8 + ')');
  }
  function afterRead($this, head) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = head._get_writePosition__0_k$() - head._get_readPosition__0_k$() | 0;
      break $l$block;
    }
    if (tmp$ret$0 === 0) {
      $this.releaseHead_dq8ghz_k$(head);
      Unit_getInstance();
    } else {
    }
  }
  function Companion_13() {
    Companion_instance_12 = this;
  }
  Companion_13.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    if (Companion_instance_12 == null)
      new Companion_13();
    return Companion_instance_12;
  }
  function _no_name_provided__3_0($newValue) {
    this._$newValue = $newValue;
    RequireFailureCapture.call(this);
  }
  _no_name_provided__3_0.prototype.doFail_4_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = '' + "tailRemaining shouldn't be negative: " + this._$newValue;
      break $l$block;
    }
    throw IllegalArgumentException_init_$Create$(tmp$ret$0);
  };
  _no_name_provided__3_0.$metadata$ = {
    simpleName: '<no name provided>_3',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__3_1() {
    RequireFailureCapture.call(this);
  }
  _no_name_provided__3_1.prototype.doFail_4_0_k$ = function () {
    throw IllegalStateException_init_$Create$('It should be no tail remaining bytes if current tail is EmptyBuffer');
  };
  _no_name_provided__3_1.$metadata$ = {
    simpleName: '<no name provided>_3',
    kind: 'class',
    interfaces: []
  };
  function AbstractInput(head, remaining, pool) {
    Companion_getInstance_12();
    this._pool = pool;
    this._state_3 = new AbstractInputSharedState(head, remaining);
    this._noMoreChunksAvailable = false;
  }
  AbstractInput.prototype._get_head__0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_also_0 = _get__head_(this);
      {
      }
      {
        tmp0_also_0.discardUntilIndex_majfzk_k$(this._get_headPosition__0_k$());
      }
      tmp$ret$0 = tmp0_also_0;
      break $l$block;
    }
    return tmp$ret$0;
  };
  AbstractInput.prototype._set_headPosition__majfzk_k$ = function (value) {
    this._state_3._headPosition = value;
  };
  AbstractInput.prototype._get_headPosition__0_k$ = function () {
    return this._state_3._headPosition;
  };
  AbstractInput.prototype._set_headEndExclusive__majfzk_k$ = function (value) {
    this._state_3._headEndExclusive = value;
  };
  AbstractInput.prototype._get_headEndExclusive__0_k$ = function () {
    return this._state_3._headEndExclusive;
  };
  AbstractInput.prototype.prefetch_wiekkq_k$ = function (min) {
    if (min.compareTo_wiekkq_k$(new Long(0, 0)) <= 0)
      return true;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = this._get_headEndExclusive__0_k$() - this._get_headPosition__0_k$() | 0;
      break $l$block;
    }
    var headRemaining = tmp$ret$0;
    if (toLong(headRemaining).compareTo_wiekkq_k$(min) >= 0 ? true : numberToLong(headRemaining).plus_wiekkq_k$(_get_tailRemaining_(this)).compareTo_wiekkq_k$(min) >= 0)
      return true;
    return doPrefetch(this, min);
  };
  AbstractInput.prototype.peekTo_aaoha9_k$ = function (destination, destinationOffset, offset, min, max) {
    this.prefetch_wiekkq_k$(min.plus_wiekkq_k$(offset));
    Unit_getInstance();
    var current = this._get_head__0_k$();
    var copied = new Long(0, 0);
    var skip = offset;
    var writePosition = destinationOffset;
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = toLong(destination._view.byteLength);
        break $l$block;
      }
      var tmp0_minOf_0 = tmp$ret$0.minus_wiekkq_k$(destinationOffset);
      tmp$ret$1 = max.compareTo_wiekkq_k$(tmp0_minOf_0) <= 0 ? max : tmp0_minOf_0;
      break $l$block_0;
    }
    var maxCopySize = tmp$ret$1;
    $l$break: while (copied.compareTo_wiekkq_k$(min) < 0 ? copied.compareTo_wiekkq_k$(maxCopySize) < 0 : false) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp1__get_readRemaining__0 = current;
        tmp$ret$2 = tmp1__get_readRemaining__0._get_writePosition__0_k$() - tmp1__get_readRemaining__0._get_readPosition__0_k$() | 0;
        break $l$block_1;
      }
      var chunkSize = tmp$ret$2;
      if (toLong(chunkSize).compareTo_wiekkq_k$(skip) > 0) {
        var tmp$ret$3;
        $l$block_2: {
          var tmp2_minOf_0 = numberToLong(chunkSize).minus_wiekkq_k$(skip);
          var tmp3_minOf_0 = maxCopySize.minus_wiekkq_k$(copied);
          tmp$ret$3 = tmp2_minOf_0.compareTo_wiekkq_k$(tmp3_minOf_0) <= 0 ? tmp2_minOf_0 : tmp3_minOf_0;
          break $l$block_2;
        }
        var size_0 = tmp$ret$3;
        current._get_memory__0_k$().copyTo_650o3g_k$(destination, numberToLong(current._get_readPosition__0_k$()).plus_wiekkq_k$(skip), size_0, writePosition);
        skip = new Long(0, 0);
        copied = copied.plus_wiekkq_k$(size_0);
        writePosition = writePosition.plus_wiekkq_k$(size_0);
      } else {
        var tmp$ret$4;
        $l$block_3: {
          var tmp4_minus_0 = skip;
          tmp$ret$4 = tmp4_minus_0.minus_wiekkq_k$(toLong(chunkSize));
          break $l$block_3;
        }
        skip = tmp$ret$4;
      }
      var tmp0_elvis_lhs = current._get_next__0_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$break;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      current = tmp;
    }
    return copied;
  };
  AbstractInput.prototype._get_remaining__0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = this._get_headEndExclusive__0_k$() - this._get_headPosition__0_k$() | 0;
      break $l$block;
    }
    return toLong(tmp$ret$0).plus_wiekkq_k$(_get_tailRemaining_(this));
  };
  AbstractInput.prototype._get_endOfInput__0_k$ = function () {
    var tmp;
    var tmp_0;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = this._get_headEndExclusive__0_k$() - this._get_headPosition__0_k$() | 0;
      break $l$block;
    }
    if (tmp$ret$0 === 0) {
      tmp_0 = _get_tailRemaining_(this).equals(new Long(0, 0));
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      tmp = this._noMoreChunksAvailable ? true : doFill(this) == null;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  AbstractInput.prototype.discard_wiekkq_k$ = function (n) {
    if (n.compareTo_wiekkq_k$(new Long(0, 0)) <= 0)
      return new Long(0, 0);
    return discardAsMuchAsPossible(this, n, new Long(0, 0));
  };
  AbstractInput.prototype.prepareReadHead_ha5a7z_k$ = function (minSize) {
    return prepareReadLoop(this, minSize, this._get_head__0_k$());
  };
  AbstractInput.prototype.ensureNextHead_dq8ghz_k$ = function (current) {
    return this.ensureNext_dq8ghz_k$(current);
  };
  AbstractInput.prototype.ensureNext_dq8ghz_k$ = function (current) {
    return ensureNext(this, current, Companion_getInstance_16()._get_Empty__0_k$());
  };
  AbstractInput.prototype.fixGapAfterRead_kpwap4_k$ = function (current) {
    var tmp0_elvis_lhs = current._get_next__0_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return fixGapAfterReadFallback(this, current);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var next = tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = current._get_writePosition__0_k$() - current._get_readPosition__0_k$() | 0;
      break $l$block;
    }
    var remaining = tmp$ret$0;
    var tmp$ret$2;
    $l$block_1: {
      Companion_getInstance_13();
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = current._capacity - current._get_limit__0_k$() | 0;
        break $l$block_0;
      }
      var tmp0_minOf_0 = 8 - tmp$ret$1 | 0;
      tmp$ret$2 = Math.min(remaining, tmp0_minOf_0);
      break $l$block_1;
    }
    var overrunSize = tmp$ret$2;
    if (next._get_startGap__0_k$() < overrunSize) {
      return fixGapAfterReadFallback(this, current);
    }restoreStartGap(next, overrunSize);
    if (remaining > overrunSize) {
      current.releaseEndGap_sv8swh_k$();
      this._set_headEndExclusive__majfzk_k$(current._get_writePosition__0_k$());
      var tmp1_this = this;
      var tmp$ret$3;
      $l$block_2: {
        var tmp1_plus_0 = _get_tailRemaining_(tmp1_this);
        tmp$ret$3 = tmp1_plus_0.plus_wiekkq_k$(toLong(overrunSize));
        break $l$block_2;
      }
      _set_tailRemaining_(tmp1_this, tmp$ret$3);
    } else {
      _set__head_(this, next);
      var tmp2_this = this;
      var tmp$ret$5;
      $l$block_4: {
        var tmp2_minus_0 = _get_tailRemaining_(tmp2_this);
        var tmp$ret$4;
        $l$block_3: {
          tmp$ret$4 = next._get_writePosition__0_k$() - next._get_readPosition__0_k$() | 0;
          break $l$block_3;
        }
        var tmp3_minus_0 = tmp$ret$4 - overrunSize | 0;
        tmp$ret$5 = tmp2_minus_0.minus_wiekkq_k$(toLong(tmp3_minus_0));
        break $l$block_4;
      }
      _set_tailRemaining_(tmp2_this, tmp$ret$5);
      current.cleanNext_0_k$();
      Unit_getInstance();
      current.release_fz49v2_k$(this._pool);
    }
  };
  AbstractInput.prototype.fill_0_k$ = function () {
    var buffer = this._pool.borrow_0_k$();
    try {
      Companion_getInstance_13();
      buffer.reserveEndGap_majfzk_k$(8);
      var tmp = buffer._get_memory__0_k$();
      var tmp_0 = buffer._get_writePosition__0_k$();
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = buffer._get_limit__0_k$() - buffer._get_writePosition__0_k$() | 0;
        break $l$block;
      }
      var copied = this.fill_rzxerb_k$(tmp, tmp_0, tmp$ret$0);
      if (copied === 0) {
        this._noMoreChunksAvailable = true;
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = buffer._get_writePosition__0_k$() > buffer._get_readPosition__0_k$();
          break $l$block_0;
        }
        if (!tmp$ret$1) {
          buffer.release_fz49v2_k$(this._pool);
          return null;
        } else {
        }
      }buffer.commitWritten_majfzk_k$(copied);
      return buffer;
    } catch ($p) {
      if ($p instanceof Error) {
        buffer.release_fz49v2_k$(this._pool);
        throw $p;
      } else {
        {
          throw $p;
        }
      }
    }
  };
  AbstractInput.prototype.markNoMoreChunksAvailable_sv8swh_k$ = function () {
    if (!this._noMoreChunksAvailable) {
      this._noMoreChunksAvailable = true;
    }};
  AbstractInput.prototype.prepareRead_ha5a7z_k$ = function (minSize) {
    var head = this._get_head__0_k$();
    if ((this._get_headEndExclusive__0_k$() - this._get_headPosition__0_k$() | 0) >= minSize)
      return head;
    return prepareReadLoop(this, minSize, head);
  };
  AbstractInput.prototype.releaseHead_dq8ghz_k$ = function (head) {
    var tmp0_elvis_lhs = head.cleanNext_0_k$();
    var next = tmp0_elvis_lhs == null ? Companion_getInstance_16()._get_Empty__0_k$() : tmp0_elvis_lhs;
    _set__head_(this, next);
    var tmp1_this = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_minus_0 = _get_tailRemaining_(tmp1_this);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = next._get_writePosition__0_k$() - next._get_readPosition__0_k$() | 0;
        break $l$block;
      }
      var tmp1_minus_0 = tmp$ret$0;
      tmp$ret$1 = tmp0_minus_0.minus_wiekkq_k$(toLong(tmp1_minus_0));
      break $l$block_0;
    }
    _set_tailRemaining_(tmp1_this, tmp$ret$1);
    head.release_fz49v2_k$(this._pool);
    return next;
  };
  AbstractInput.$metadata$ = {
    simpleName: 'AbstractInput',
    kind: 'class',
    interfaces: [Input]
  };
  function AbstractOutput_init_$Init$(pool, $this) {
    AbstractOutput.call($this, 0, pool);
    return $this;
  }
  function _set__head__0($this, value) {
    $this._state_4._head_2 = value;
  }
  function _get__head__0($this) {
    return $this._state_4._head_2;
  }
  function _set__tail_($this, value) {
    $this._state_4._tail_0 = value;
  }
  function _get__tail_($this) {
    return $this._state_4._tail_0;
  }
  function _set_tailEndExclusive_($this, value) {
    $this._state_4._tailEndExclusive = value;
  }
  function _set_tailInitialPosition_($this, value) {
    $this._state_4._tailInitialPosition = value;
  }
  function _get_tailInitialPosition_($this) {
    return $this._state_4._tailInitialPosition;
  }
  function _set_chainedSize_($this, value) {
    $this._state_4._chainedSize = value;
  }
  function _get_chainedSize_($this) {
    return $this._state_4._chainedSize;
  }
  function flushChain($this) {
    var tmp0_elvis_lhs = $this.stealAll_0_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var oldTail = tmp;
    try {
      {
        {
        }
        var current_2 = oldTail;
        $l$break: do {
          {
            var tmp0__anonymous__4 = current_2;
            var tmp_0 = tmp0__anonymous__4._get_memory__0_k$();
            var tmp_1 = tmp0__anonymous__4._get_readPosition__0_k$();
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = tmp0__anonymous__4._get_writePosition__0_k$() - tmp0__anonymous__4._get_readPosition__0_k$() | 0;
              break $l$block;
            }
            $this.flush_isagme_k$(tmp_0, tmp_1, tmp$ret$0);
          }
          var tmp0_elvis_lhs_3 = current_2._get_next__0_k$();
          var tmp_2;
          if (tmp0_elvis_lhs_3 == null) {
            break $l$break;
          } else {
            tmp_2 = tmp0_elvis_lhs_3;
          }
          current_2 = tmp_2;
        }
         while (true);
      }
    }finally {
      releaseAll(oldTail, $this._pool_0);
    }
  }
  function appendNewChunk($this) {
    var new_0 = $this._pool_0.borrow_0_k$();
    Companion_getInstance_13();
    new_0.reserveEndGap_majfzk_k$(8);
    $this.appendSingleChunk_kpwap4_k$(new_0);
    return new_0;
  }
  function appendChainImpl($this, head, newTail, chainedSizeDelta) {
    var _tail = _get__tail_($this);
    if (_tail == null) {
      _set__head__0($this, head);
      _set_chainedSize_($this, 0);
    } else {
      _tail._set_next__638tqt_k$(head);
      var tailPosition = $this._get_tailPosition__0_k$();
      _tail.commitWrittenUntilIndex_ha5a7z_k$(tailPosition);
      Unit_getInstance();
      var tmp0_this = $this;
      _set_chainedSize_(tmp0_this, _get_chainedSize_(tmp0_this) + (tailPosition - _get_tailInitialPosition_($this) | 0) | 0);
    }
    _set__tail_($this, newTail);
    var tmp1_this = $this;
    _set_chainedSize_(tmp1_this, _get_chainedSize_(tmp1_this) + chainedSizeDelta | 0);
    $this._set_tailMemory__hqwtqe_k$(newTail._get_memory__0_k$());
    $this._set_tailPosition__majfzk_k$(newTail._get_writePosition__0_k$());
    _set_tailInitialPosition_($this, newTail._get_readPosition__0_k$());
    _set_tailEndExclusive_($this, newTail._get_limit__0_k$());
  }
  function appendCharFallback($this, c) {
    var tmp$ret$12;
    $l$block_11: {
      var buffer_1 = $this.prepareWriteHead_ha5a7z_k$(3);
      try {
        var tmp$ret$10;
        $l$block_9: {
          var tmp$ret$9;
          $l$block_8: {
            var tmp16_putUtf8Char_0_6 = buffer_1._memory;
            var tmp17_putUtf8Char_0_7 = buffer_1._get_writePosition__0_k$();
            var tmp18_putUtf8Char_0_8 = c.toInt_0_k$();
            var tmp;
            if (0 <= tmp18_putUtf8Char_0_8 ? tmp18_putUtf8Char_0_8 <= 127 : false) {
              {
                var tmp0_storeAt_0_9 = toByte(tmp18_putUtf8Char_0_8);
                tmp16_putUtf8Char_0_6._view.setInt8(tmp17_putUtf8Char_0_7, tmp0_storeAt_0_9);
              }
              tmp = 1;
            } else if (128 <= tmp18_putUtf8Char_0_8 ? tmp18_putUtf8Char_0_8 <= 2047 : false) {
              var tmp$ret$0;
              $l$block: {
                var tmp1_set_0_10 = toByte(192 | tmp18_putUtf8Char_0_8 >> 6 & 31);
                tmp$ret$0 = tmp16_putUtf8Char_0_6._view.setInt8(tmp17_putUtf8Char_0_7, tmp1_set_0_10);
                break $l$block;
              }
              var tmp$ret$1;
              $l$block_0: {
                var tmp2_set_0_11 = tmp17_putUtf8Char_0_7 + 1 | 0;
                var tmp3_set_0_12 = toByte(128 | tmp18_putUtf8Char_0_8 & 63);
                tmp$ret$1 = tmp16_putUtf8Char_0_6._view.setInt8(tmp2_set_0_11, tmp3_set_0_12);
                break $l$block_0;
              }
              tmp = 2;
            } else if (2048 <= tmp18_putUtf8Char_0_8 ? tmp18_putUtf8Char_0_8 <= 65535 : false) {
              var tmp$ret$2;
              $l$block_1: {
                var tmp4_set_0_13 = toByte(224 | tmp18_putUtf8Char_0_8 >> 12 & 15);
                tmp$ret$2 = tmp16_putUtf8Char_0_6._view.setInt8(tmp17_putUtf8Char_0_7, tmp4_set_0_13);
                break $l$block_1;
              }
              var tmp$ret$3;
              $l$block_2: {
                var tmp5_set_0_14 = tmp17_putUtf8Char_0_7 + 1 | 0;
                var tmp6_set_0_15 = toByte(128 | tmp18_putUtf8Char_0_8 >> 6 & 63);
                tmp$ret$3 = tmp16_putUtf8Char_0_6._view.setInt8(tmp5_set_0_14, tmp6_set_0_15);
                break $l$block_2;
              }
              var tmp$ret$4;
              $l$block_3: {
                var tmp7_set_0_16 = tmp17_putUtf8Char_0_7 + 2 | 0;
                var tmp8_set_0_17 = toByte(128 | tmp18_putUtf8Char_0_8 & 63);
                tmp$ret$4 = tmp16_putUtf8Char_0_6._view.setInt8(tmp7_set_0_16, tmp8_set_0_17);
                break $l$block_3;
              }
              tmp = 3;
            } else if (65536 <= tmp18_putUtf8Char_0_8 ? tmp18_putUtf8Char_0_8 <= 1114111 : false) {
              var tmp$ret$5;
              $l$block_4: {
                var tmp9_set_0_18 = toByte(240 | tmp18_putUtf8Char_0_8 >> 18 & 7);
                tmp$ret$5 = tmp16_putUtf8Char_0_6._view.setInt8(tmp17_putUtf8Char_0_7, tmp9_set_0_18);
                break $l$block_4;
              }
              var tmp$ret$6;
              $l$block_5: {
                var tmp10_set_0_19 = tmp17_putUtf8Char_0_7 + 1 | 0;
                var tmp11_set_0_20 = toByte(128 | tmp18_putUtf8Char_0_8 >> 12 & 63);
                tmp$ret$6 = tmp16_putUtf8Char_0_6._view.setInt8(tmp10_set_0_19, tmp11_set_0_20);
                break $l$block_5;
              }
              var tmp$ret$7;
              $l$block_6: {
                var tmp12_set_0_21 = tmp17_putUtf8Char_0_7 + 2 | 0;
                var tmp13_set_0_22 = toByte(128 | tmp18_putUtf8Char_0_8 >> 6 & 63);
                tmp$ret$7 = tmp16_putUtf8Char_0_6._view.setInt8(tmp12_set_0_21, tmp13_set_0_22);
                break $l$block_6;
              }
              var tmp$ret$8;
              $l$block_7: {
                var tmp14_set_0_23 = tmp17_putUtf8Char_0_7 + 3 | 0;
                var tmp15_set_0_24 = toByte(128 | tmp18_putUtf8Char_0_8 & 63);
                tmp$ret$8 = tmp16_putUtf8Char_0_6._view.setInt8(tmp14_set_0_23, tmp15_set_0_24);
                break $l$block_7;
              }
              tmp = 4;
            } else {
              malformedCodePoint(tmp18_putUtf8Char_0_8);
            }
            tmp$ret$9 = tmp;
            break $l$block_8;
          }
          var size_5 = tmp$ret$9;
          buffer_1.commitWritten_majfzk_k$(size_5);
          tmp$ret$10 = size_5;
          break $l$block_9;
        }
        var result_2 = tmp$ret$10;
        {
          var tmp0_check_0 = result_2 >= 0;
          {
          }
          if (!tmp0_check_0) {
            var tmp$ret$11;
            $l$block_10: {
              tmp$ret$11 = "The returned value shouldn't be negative";
              break $l$block_10;
            }
            var message_1 = tmp$ret$11;
            throw IllegalStateException_init_$Create$(toString_1(message_1));
          }}
        tmp$ret$12 = result_2;
        break $l$block_11;
      }finally {
        $this.afterHeadWrite_sv8swh_k$();
      }
    }
    Unit_getInstance();
  }
  function AbstractOutput(headerSizeHint, pool) {
    this._headerSizeHint = headerSizeHint;
    this._pool_0 = pool;
    this._state_4 = new AbstractOutputSharedState();
    this._byteOrder = ByteOrder_BIG_ENDIAN_getInstance();
  }
  AbstractOutput.prototype._get_pool__0_k$ = function () {
    return this._pool_0;
  };
  AbstractOutput.prototype._set_tailMemory__hqwtqe_k$ = function (value) {
    this._state_4._tailMemory = value;
  };
  AbstractOutput.prototype._get_tailMemory__0_k$ = function () {
    return this._state_4._tailMemory;
  };
  AbstractOutput.prototype._set_tailPosition__majfzk_k$ = function (value) {
    this._state_4._tailPosition = value;
  };
  AbstractOutput.prototype._get_tailPosition__0_k$ = function () {
    return this._state_4._tailPosition;
  };
  AbstractOutput.prototype._get_tailEndExclusive__0_k$ = function () {
    return this._state_4._tailEndExclusive;
  };
  AbstractOutput.prototype._get__size__0_k$ = function () {
    return _get_chainedSize_(this) + (this._get_tailPosition__0_k$() - _get_tailInitialPosition_(this) | 0) | 0;
  };
  AbstractOutput.prototype.flush_sv8swh_k$ = function () {
    flushChain(this);
  };
  AbstractOutput.prototype.stealAll_0_k$ = function () {
    var tmp0_elvis_lhs = _get__head__0(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    var tmp1_safe_receiver = _get__tail_(this);
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver.commitWrittenUntilIndex_ha5a7z_k$(this._get_tailPosition__0_k$());
    Unit_getInstance();
    _set__head__0(this, null);
    _set__tail_(this, null);
    this._set_tailPosition__majfzk_k$(0);
    _set_tailEndExclusive_(this, 0);
    _set_tailInitialPosition_(this, 0);
    _set_chainedSize_(this, 0);
    this._set_tailMemory__hqwtqe_k$(Companion_getInstance_17()._Empty_0);
    return head;
  };
  AbstractOutput.prototype.appendSingleChunk_kpwap4_k$ = function (buffer) {
    {
      var tmp0_check_0 = buffer._get_next__0_k$() == null;
      {
      }
      if (!tmp0_check_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'It should be a single buffer chunk.';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString_1(message_1));
      }}
    appendChainImpl(this, buffer, buffer, 0);
  };
  AbstractOutput.prototype.close_sv8swh_k$ = function () {
    try {
      this.flush_sv8swh_k$();
    }finally {
      this.closeDestination_sv8swh_k$();
    }
  };
  AbstractOutput.prototype.append_wi8o78_k$ = function (c) {
    var tailPosition = this._get_tailPosition__0_k$();
    if ((this._get_tailEndExclusive__0_k$() - tailPosition | 0) >= 3) {
      var tmp$ret$9;
      $l$block_8: {
        var tmp16_putUtf8Char_0 = this._get_tailMemory__0_k$();
        var tmp17_putUtf8Char_0 = c.toInt_0_k$();
        var tmp;
        if (0 <= tmp17_putUtf8Char_0 ? tmp17_putUtf8Char_0 <= 127 : false) {
          {
            var tmp0_storeAt_0 = toByte(tmp17_putUtf8Char_0);
            tmp16_putUtf8Char_0._view.setInt8(tailPosition, tmp0_storeAt_0);
          }
          tmp = 1;
        } else if (128 <= tmp17_putUtf8Char_0 ? tmp17_putUtf8Char_0 <= 2047 : false) {
          var tmp$ret$0;
          $l$block: {
            var tmp1_set_0 = toByte(192 | tmp17_putUtf8Char_0 >> 6 & 31);
            tmp$ret$0 = tmp16_putUtf8Char_0._view.setInt8(tailPosition, tmp1_set_0);
            break $l$block;
          }
          var tmp$ret$1;
          $l$block_0: {
            var tmp2_set_0 = tailPosition + 1 | 0;
            var tmp3_set_0 = toByte(128 | tmp17_putUtf8Char_0 & 63);
            tmp$ret$1 = tmp16_putUtf8Char_0._view.setInt8(tmp2_set_0, tmp3_set_0);
            break $l$block_0;
          }
          tmp = 2;
        } else if (2048 <= tmp17_putUtf8Char_0 ? tmp17_putUtf8Char_0 <= 65535 : false) {
          var tmp$ret$2;
          $l$block_1: {
            var tmp4_set_0 = toByte(224 | tmp17_putUtf8Char_0 >> 12 & 15);
            tmp$ret$2 = tmp16_putUtf8Char_0._view.setInt8(tailPosition, tmp4_set_0);
            break $l$block_1;
          }
          var tmp$ret$3;
          $l$block_2: {
            var tmp5_set_0 = tailPosition + 1 | 0;
            var tmp6_set_0 = toByte(128 | tmp17_putUtf8Char_0 >> 6 & 63);
            tmp$ret$3 = tmp16_putUtf8Char_0._view.setInt8(tmp5_set_0, tmp6_set_0);
            break $l$block_2;
          }
          var tmp$ret$4;
          $l$block_3: {
            var tmp7_set_0 = tailPosition + 2 | 0;
            var tmp8_set_0 = toByte(128 | tmp17_putUtf8Char_0 & 63);
            tmp$ret$4 = tmp16_putUtf8Char_0._view.setInt8(tmp7_set_0, tmp8_set_0);
            break $l$block_3;
          }
          tmp = 3;
        } else if (65536 <= tmp17_putUtf8Char_0 ? tmp17_putUtf8Char_0 <= 1114111 : false) {
          var tmp$ret$5;
          $l$block_4: {
            var tmp9_set_0 = toByte(240 | tmp17_putUtf8Char_0 >> 18 & 7);
            tmp$ret$5 = tmp16_putUtf8Char_0._view.setInt8(tailPosition, tmp9_set_0);
            break $l$block_4;
          }
          var tmp$ret$6;
          $l$block_5: {
            var tmp10_set_0 = tailPosition + 1 | 0;
            var tmp11_set_0 = toByte(128 | tmp17_putUtf8Char_0 >> 12 & 63);
            tmp$ret$6 = tmp16_putUtf8Char_0._view.setInt8(tmp10_set_0, tmp11_set_0);
            break $l$block_5;
          }
          var tmp$ret$7;
          $l$block_6: {
            var tmp12_set_0 = tailPosition + 2 | 0;
            var tmp13_set_0 = toByte(128 | tmp17_putUtf8Char_0 >> 6 & 63);
            tmp$ret$7 = tmp16_putUtf8Char_0._view.setInt8(tmp12_set_0, tmp13_set_0);
            break $l$block_6;
          }
          var tmp$ret$8;
          $l$block_7: {
            var tmp14_set_0 = tailPosition + 3 | 0;
            var tmp15_set_0 = toByte(128 | tmp17_putUtf8Char_0 & 63);
            tmp$ret$8 = tmp16_putUtf8Char_0._view.setInt8(tmp14_set_0, tmp15_set_0);
            break $l$block_7;
          }
          tmp = 4;
        } else {
          malformedCodePoint(tmp17_putUtf8Char_0);
        }
        tmp$ret$9 = tmp;
        break $l$block_8;
      }
      var size_0 = tmp$ret$9;
      this._set_tailPosition__majfzk_k$(tailPosition + size_0 | 0);
      return this;
    }appendCharFallback(this, c);
    return this;
  };
  AbstractOutput.prototype.append_v1o70a_k$ = function (csq) {
    if (csq == null) {
      this.append_n5ylwa_k$('null', 0, 4);
      Unit_getInstance();
    } else {
      this.append_n5ylwa_k$(csq, 0, charSequenceLength(csq));
      Unit_getInstance();
    }
    return this;
  };
  AbstractOutput.prototype.append_n5ylwa_k$ = function (csq, start, end) {
    if (csq == null) {
      return this.append_n5ylwa_k$('null', start, end);
    }writeText(this, csq, start, end, Charsets_getInstance()._UTF_8);
    return this;
  };
  AbstractOutput.prototype.release_sv8swh_k$ = function () {
    this.close_sv8swh_k$();
  };
  AbstractOutput.prototype.prepareWriteHead_ha5a7z_k$ = function (n) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = this._get_tailEndExclusive__0_k$() - this._get_tailPosition__0_k$() | 0;
      break $l$block;
    }
    if (tmp$ret$0 >= n) {
      var tmp0_safe_receiver = _get__tail_(this);
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        {
          {
          }
          tmp0_safe_receiver.commitWrittenUntilIndex_ha5a7z_k$(this._get_tailPosition__0_k$());
          Unit_getInstance();
          return tmp0_safe_receiver;
        }
      }
      Unit_getInstance();
    } else {
    }
    return appendNewChunk(this);
  };
  AbstractOutput.prototype.afterHeadWrite_sv8swh_k$ = function () {
    var tmp0_safe_receiver = _get__tail_(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      $l$block: {
        {
        }
        tmp$ret$0 = this._set_tailPosition__majfzk_k$(tmp0_safe_receiver._get_writePosition__0_k$());
        break $l$block;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  AbstractOutput.$metadata$ = {
    simpleName: 'AbstractOutput',
    kind: 'class',
    interfaces: [Appendable, Output]
  };
  function _set_readPosition_($this, value) {
    $this._bufferState._readPosition = value;
  }
  function _set_writePosition_($this, value) {
    $this._bufferState._writePosition = value;
  }
  function _set_startGap_($this, value) {
    $this._bufferState._startGap = value;
  }
  function _set_limit_($this, value) {
    $this._bufferState._limit_0 = value;
  }
  function Companion_14() {
    Companion_instance_13 = this;
    this._ReservedSize = 8;
  }
  Companion_14.prototype._get_Empty__0_k$ = function () {
    return Companion_getInstance_20()._Empty_1;
  };
  Companion_14.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    if (Companion_instance_13 == null)
      new Companion_14();
    return Companion_instance_13;
  }
  function _no_name_provided__3_2($startGap) {
    this._$startGap = $startGap;
    RequireFailureCapture.call(this);
  }
  _no_name_provided__3_2.prototype.doFail_4_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = '' + "startGap shouldn't be negative: " + this._$startGap;
      break $l$block;
    }
    throw IllegalArgumentException_init_$Create$(tmp$ret$0);
  };
  _no_name_provided__3_2.$metadata$ = {
    simpleName: '<no name provided>_3',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__3_3($endGap) {
    this._$endGap = $endGap;
    RequireFailureCapture.call(this);
  }
  _no_name_provided__3_3.prototype.doFail_4_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = '' + "endGap shouldn't be negative: " + this._$endGap;
      break $l$block;
    }
    throw IllegalArgumentException_init_$Create$(tmp$ret$0);
  };
  _no_name_provided__3_3.$metadata$ = {
    simpleName: '<no name provided>_3',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__3_4($newReadPosition) {
    this._$newReadPosition = $newReadPosition;
    RequireFailureCapture.call(this);
  }
  _no_name_provided__3_4.prototype.doFail_4_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = '' + "newReadPosition shouldn't be negative: " + this._$newReadPosition;
      break $l$block;
    }
    throw IllegalArgumentException_init_$Create$(tmp$ret$0);
  };
  _no_name_provided__3_4.$metadata$ = {
    simpleName: '<no name provided>_3',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__3_5($newReadPosition, this$0) {
    this._$newReadPosition_0 = $newReadPosition;
    this._this$0_9 = this$0;
    RequireFailureCapture.call(this);
  }
  _no_name_provided__3_5.prototype.doFail_4_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = '' + "newReadPosition shouldn't be ahead of the read position: " + this._$newReadPosition_0 + ' > ' + this._this$0_9._get_readPosition__0_k$();
      break $l$block;
    }
    throw IllegalArgumentException_init_$Create$(tmp$ret$0);
  };
  _no_name_provided__3_5.$metadata$ = {
    simpleName: '<no name provided>_3',
    kind: 'class',
    interfaces: []
  };
  function Buffer(memory) {
    Companion_getInstance_13();
    this._memory = memory;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      var tmp0__get_size32__0 = this._memory;
      tmp$ret$0 = tmp0__get_size32__0._view.byteLength;
      break $l$block;
    }
    tmp._bufferState = new BufferSharedState(tmp$ret$0);
    var tmp_0 = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0__get_size32__0_0 = this._memory;
      tmp$ret$1 = tmp0__get_size32__0_0._view.byteLength;
      break $l$block_0;
    }
    tmp_0._capacity = tmp$ret$1;
  }
  Buffer.prototype._get_memory__0_k$ = function () {
    return this._memory;
  };
  Buffer.prototype._get_readPosition__0_k$ = function () {
    return this._bufferState._readPosition;
  };
  Buffer.prototype._get_writePosition__0_k$ = function () {
    return this._bufferState._writePosition;
  };
  Buffer.prototype._get_startGap__0_k$ = function () {
    return this._bufferState._startGap;
  };
  Buffer.prototype._get_limit__0_k$ = function () {
    return this._bufferState._limit_0;
  };
  Buffer.prototype._get_capacity__0_k$ = function () {
    return this._capacity;
  };
  Buffer.prototype._set_attachment__qi8yb4_k$ = function (value) {
    this._bufferState._attachment = value;
  };
  Buffer.prototype.discardExact_majfzk_k$ = function (count) {
    if (count === 0)
      return Unit_getInstance();
    var newReadPosition = this._get_readPosition__0_k$() + count | 0;
    if (count < 0 ? true : newReadPosition > this._get_writePosition__0_k$()) {
      var tmp$ret$1;
      $l$block: {
        tmp$ret$1 = this._get_writePosition__0_k$() - this._get_readPosition__0_k$() | 0;
        break $l$block;
      }
      discardFailed(count, tmp$ret$1);
    }_set_readPosition_(this, newReadPosition);
  };
  Buffer.prototype.discard_wiekkq_k$ = function (count) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = this._get_writePosition__0_k$() - this._get_readPosition__0_k$() | 0;
        break $l$block;
      }
      var tmp0_minOf_0 = toLong(tmp$ret$0);
      tmp$ret$1 = count.compareTo_wiekkq_k$(tmp0_minOf_0) <= 0 ? count : tmp0_minOf_0;
      break $l$block_0;
    }
    var size_0 = tmp$ret$1.toInt_0_k$();
    this.discardExact_majfzk_k$(size_0);
    return toLong(size_0);
  };
  Buffer.prototype.commitWritten_majfzk_k$ = function (count) {
    var newWritePosition = this._get_writePosition__0_k$() + count | 0;
    if (count < 0 ? true : newWritePosition > this._get_limit__0_k$()) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = this._get_limit__0_k$() - this._get_writePosition__0_k$() | 0;
        break $l$block;
      }
      commitWrittenFailed(count, tmp$ret$0);
    }_set_writePosition_(this, newWritePosition);
  };
  Buffer.prototype.commitWrittenUntilIndex_ha5a7z_k$ = function (position) {
    var limit = this._get_limit__0_k$();
    if (position < this._get_writePosition__0_k$()) {
      var tmp = position - this._get_writePosition__0_k$() | 0;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = this._get_limit__0_k$() - this._get_writePosition__0_k$() | 0;
        break $l$block;
      }
      commitWrittenFailed(tmp, tmp$ret$0);
    }if (position >= limit) {
      if (position === limit) {
        _set_writePosition_(this, position);
        return false;
      }var tmp_0 = position - this._get_writePosition__0_k$() | 0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = this._get_limit__0_k$() - this._get_writePosition__0_k$() | 0;
        break $l$block_0;
      }
      commitWrittenFailed(tmp_0, tmp$ret$1);
    }_set_writePosition_(this, position);
    return true;
  };
  Buffer.prototype.discardUntilIndex_majfzk_k$ = function (position) {
    if (position < 0 ? true : position > this._get_writePosition__0_k$()) {
      var tmp = position - this._get_readPosition__0_k$() | 0;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = this._get_writePosition__0_k$() - this._get_readPosition__0_k$() | 0;
        break $l$block;
      }
      discardFailed(tmp, tmp$ret$0);
    }if (!(this._get_readPosition__0_k$() === position)) {
      _set_readPosition_(this, position);
    }};
  Buffer.prototype.reserveStartGap_majfzk_k$ = function (startGap) {
    {
      var tmp0_require_0 = startGap >= 0;
      {
      }
      if (!tmp0_require_0) {
        var m_2 = new _no_name_provided__3_2(startGap);
        m_2.doFail_4_0_k$();
      }}
    if (this._get_readPosition__0_k$() >= startGap) {
      _set_startGap_(this, startGap);
      return Unit_getInstance();
    }if (this._get_readPosition__0_k$() === this._get_writePosition__0_k$()) {
      if (startGap > this._get_limit__0_k$()) {
        startGapReservationFailedDueToLimit(this, startGap);
      }_set_writePosition_(this, startGap);
      _set_readPosition_(this, startGap);
      _set_startGap_(this, startGap);
      return Unit_getInstance();
    }startGapReservationFailed(this, startGap);
  };
  Buffer.prototype.reserveEndGap_majfzk_k$ = function (endGap) {
    {
      var tmp0_require_0 = endGap >= 0;
      {
      }
      if (!tmp0_require_0) {
        var m_2 = new _no_name_provided__3_3(endGap);
        m_2.doFail_4_0_k$();
      }}
    var newLimit = this._capacity - endGap | 0;
    if (newLimit >= this._get_writePosition__0_k$()) {
      _set_limit_(this, newLimit);
      return Unit_getInstance();
    }if (newLimit < 0) {
      endGapReservationFailedDueToCapacity(this, endGap);
    }if (newLimit < this._get_startGap__0_k$()) {
      endGapReservationFailedDueToStartGap(this, endGap);
    }if (this._get_readPosition__0_k$() === this._get_writePosition__0_k$()) {
      _set_limit_(this, newLimit);
      _set_readPosition_(this, newLimit);
      _set_writePosition_(this, newLimit);
      return Unit_getInstance();
    }endGapReservationFailedDueToContent(this, endGap);
  };
  Buffer.prototype.resetForWrite_sv8swh_k$ = function () {
    this.resetForWrite_majfzk_k$(this._capacity - this._get_startGap__0_k$() | 0);
  };
  Buffer.prototype.resetForWrite_majfzk_k$ = function (limit) {
    var startGap = this._get_startGap__0_k$();
    _set_readPosition_(this, startGap);
    _set_writePosition_(this, startGap);
    _set_limit_(this, limit);
  };
  Buffer.prototype.releaseGaps_sv8swh_k$ = function () {
    this.releaseStartGap_majfzk_k$(0);
    this.releaseEndGap_sv8swh_k$();
  };
  Buffer.prototype.releaseEndGap_sv8swh_k$ = function () {
    _set_limit_(this, this._capacity);
  };
  Buffer.prototype.releaseStartGap_majfzk_k$ = function (newReadPosition) {
    {
      var tmp0_require_0 = newReadPosition >= 0;
      {
      }
      if (!tmp0_require_0) {
        var m_2 = new _no_name_provided__3_4(newReadPosition);
        m_2.doFail_4_0_k$();
      }}
    {
      var tmp1_require_0 = newReadPosition <= this._get_readPosition__0_k$();
      {
      }
      if (!tmp1_require_0) {
        var m_2_0 = new _no_name_provided__3_5(newReadPosition, this);
        m_2_0.doFail_4_0_k$();
      }}
    _set_readPosition_(this, newReadPosition);
    if (this._get_startGap__0_k$() > newReadPosition) {
      _set_startGap_(this, newReadPosition);
    }};
  Buffer.prototype.duplicateTo_2zb9pw_k$ = function (copy) {
    _set_limit_(copy, this._get_limit__0_k$());
    _set_startGap_(copy, this._get_startGap__0_k$());
    _set_readPosition_(copy, this._get_readPosition__0_k$());
    _set_writePosition_(copy, this._get_writePosition__0_k$());
  };
  Buffer.prototype.reset_sv8swh_k$ = function () {
    this.releaseGaps_sv8swh_k$();
    this.resetForWrite_sv8swh_k$();
  };
  Buffer.prototype.toString = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = this._get_writePosition__0_k$() - this._get_readPosition__0_k$() | 0;
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = this._get_limit__0_k$() - this._get_writePosition__0_k$() | 0;
      break $l$block_0;
    }
    var tmp_0 = tmp$ret$1;
    var tmp_1 = this._get_startGap__0_k$();
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = this._capacity - this._get_limit__0_k$() | 0;
      break $l$block_1;
    }
    return '' + 'Buffer(' + tmp + ' used, ' + tmp_0 + ' free, ' + (tmp_1 + tmp$ret$2 | 0) + ' reserved of ' + this._capacity + ')';
  };
  Buffer.$metadata$ = {
    simpleName: 'Buffer',
    kind: 'class',
    interfaces: []
  };
  function InsufficientSpaceException_init_$Init$(name, size_0, availableSpace, $this) {
    InsufficientSpaceException.call($this, '' + 'Not enough free space to write ' + name + ' of ' + size_0 + ' bytes, available ' + availableSpace + ' bytes.');
    return $this;
  }
  function InsufficientSpaceException_init_$Create$(name, size_0, availableSpace) {
    var tmp = InsufficientSpaceException_init_$Init$(name, size_0, availableSpace, Object.create(InsufficientSpaceException.prototype));
    captureStack(tmp, InsufficientSpaceException_init_$Create$);
    return tmp;
  }
  function InsufficientSpaceException(message) {
    Exception_init_$Init$_0(message, this);
    captureStack(this, InsufficientSpaceException);
  }
  InsufficientSpaceException.$metadata$ = {
    simpleName: 'InsufficientSpaceException',
    kind: 'class',
    interfaces: []
  };
  function discardFailed(count, readRemaining) {
    throw new EOFException('' + 'Unable to discard ' + count + ' bytes: only ' + readRemaining + ' available for reading');
  }
  function commitWrittenFailed(count, writeRemaining) {
    throw new EOFException('' + 'Unable to discard ' + count + ' bytes: only ' + writeRemaining + ' available for writing');
  }
  function startGapReservationFailedDueToLimit(_this_, startGap) {
    if (startGap > _this_._capacity) {
      throw IllegalArgumentException_init_$Create$('' + 'Start gap ' + startGap + ' is bigger than the capacity ' + _this_._capacity);
    }var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this_._capacity - _this_._get_limit__0_k$() | 0;
      break $l$block;
    }
    throw IllegalStateException_init_$Create$('' + 'Unable to reserve ' + startGap + ' start gap: there are already ' + tmp$ret$0 + ' bytes reserved in the end');
  }
  function startGapReservationFailed(_this_, startGap) {
    var tmp = '' + 'Unable to reserve ' + startGap + ' start gap: ';
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this_._get_writePosition__0_k$() - _this_._get_readPosition__0_k$() | 0;
      break $l$block;
    }
    throw IllegalStateException_init_$Create$(tmp + ('' + 'there are already ' + tmp$ret$0 + ' content bytes starting at offset ' + _this_._get_readPosition__0_k$()));
  }
  function endGapReservationFailedDueToCapacity(_this_, endGap) {
    throw IllegalArgumentException_init_$Create$('' + 'End gap ' + endGap + ' is too big: capacity is ' + _this_._capacity);
  }
  function endGapReservationFailedDueToStartGap(_this_, endGap) {
    throw IllegalArgumentException_init_$Create$('' + 'End gap ' + endGap + ' is too big: there are already ' + _this_._get_startGap__0_k$() + ' bytes reserved in the beginning');
  }
  function endGapReservationFailedDueToContent(_this_, endGap) {
    var tmp = '' + 'Unable to reserve end gap ' + endGap + ':';
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this_._get_writePosition__0_k$() - _this_._get_readPosition__0_k$() | 0;
      break $l$block;
    }
    throw IllegalArgumentException_init_$Create$(tmp + ('' + ' there are already ' + tmp$ret$0 + ' content bytes at offset ' + _this_._get_readPosition__0_k$()));
  }
  function restoreStartGap(_this_, size_0) {
    _this_.releaseStartGap_majfzk_k$(_this_._get_readPosition__0_k$() - size_0 | 0);
  }
  function writeBufferAppend(_this_, other, maxSize) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = other._get_writePosition__0_k$() - other._get_readPosition__0_k$() | 0;
        break $l$block;
      }
      var tmp0_minOf_0 = tmp$ret$0;
      tmp$ret$1 = Math.min(tmp0_minOf_0, maxSize);
      break $l$block_0;
    }
    var size_0 = tmp$ret$1;
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = _this_._get_limit__0_k$() - _this_._get_writePosition__0_k$() | 0;
      break $l$block_1;
    }
    if (tmp$ret$2 <= size_0) {
      writeBufferAppendUnreserve(_this_, size_0);
    } else {
    }
    var tmp$ret$6;
    $l$block_5: {
      {
      }
      var tmp$ret$5;
      $l$block_4: {
        var tmp1__anonymous__2 = _this_._memory;
        var tmp2__anonymous__2 = _this_._get_writePosition__0_k$();
        var tmp3__anonymous__2 = _this_._get_limit__0_k$();
        var tmp$ret$4;
        $l$block_3: {
          {
          }
          var tmp$ret$3;
          $l$block_2: {
            var tmp0__anonymous__2_4 = other._memory;
            var tmp1__anonymous__2_5 = other._get_readPosition__0_k$();
            var tmp2__anonymous__2_6 = other._get_writePosition__0_k$();
            tmp0__anonymous__2_4.copyTo_gl4spl_k$(tmp1__anonymous__2, tmp1__anonymous__2_5, size_0, tmp2__anonymous__2);
            tmp$ret$3 = size_0;
            break $l$block_2;
          }
          var rc_1_3 = tmp$ret$3;
          other.discardExact_majfzk_k$(rc_1_3);
          tmp$ret$4 = rc_1_3;
          break $l$block_3;
        }
        tmp$ret$5 = tmp$ret$4;
        break $l$block_4;
      }
      var rc_1 = tmp$ret$5;
      _this_.commitWritten_majfzk_k$(rc_1);
      tmp$ret$6 = rc_1;
      break $l$block_5;
    }
    return tmp$ret$6;
  }
  function writeBufferAppendUnreserve(_this_, writeSize) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this_._get_limit__0_k$() - _this_._get_writePosition__0_k$() | 0;
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = _this_._capacity - _this_._get_limit__0_k$() | 0;
      break $l$block_0;
    }
    if ((tmp + tmp$ret$1 | 0) < writeSize) {
      throw IllegalArgumentException_init_$Create$("Can't append buffer: not enough free space at the end");
    } else {
    }
    var newWritePosition = _this_._get_writePosition__0_k$() + writeSize | 0;
    var overrunSize = newWritePosition - _this_._get_limit__0_k$() | 0;
    if (overrunSize > 0) {
      _this_.releaseEndGap_sv8swh_k$();
    }}
  function appendChars(_this_, csq, start, end) {
    var charactersWritten;
    var tmp$ret$9;
    $l$block_8: {
      {
      }
      var tmp$ret$8;
      $l$block_7: {
        var tmp0__anonymous__2 = _this_._memory;
        var tmp1__anonymous__2 = _this_._get_writePosition__0_k$();
        var tmp2__anonymous__2 = _this_._get_limit__0_k$();
        var result_3 = encodeUTF8(tmp0__anonymous__2, csq, start, end, tmp1__anonymous__2, tmp2__anonymous__2);
        var tmp$ret$3;
        $l$block_2: {
          var tmp$ret$2;
          $l$block_1: {
            var tmp$ret$1;
            $l$block_0: {
              var tmp$ret$0;
              $l$block: {
                var tmp0__get_highShort__0_6 = _EncodeResult___get_value__impl_(result_3);
                tmp$ret$0 = toShort(tmp0__get_highShort__0_6 >>> 16);
                break $l$block;
              }
              var tmp1_toUShort_0_5 = tmp$ret$0;
              tmp$ret$1 = _UShort___init__impl_(tmp1_toUShort_0_5);
              break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
          }
          var tmp2_toInt_0_4 = tmp$ret$2;
          tmp$ret$3 = _UShort___get_data__impl_(tmp2_toInt_0_4) & 65535;
          break $l$block_2;
        }
        charactersWritten = tmp$ret$3;
        var tmp$ret$7;
        $l$block_6: {
          var tmp$ret$6;
          $l$block_5: {
            var tmp$ret$5;
            $l$block_4: {
              var tmp$ret$4;
              $l$block_3: {
                var tmp3__get_lowShort__0_9 = _EncodeResult___get_value__impl_(result_3);
                tmp$ret$4 = toShort(tmp3__get_lowShort__0_9 & 65535);
                break $l$block_3;
              }
              var tmp4_toUShort_0_8 = tmp$ret$4;
              tmp$ret$5 = _UShort___init__impl_(tmp4_toUShort_0_8);
              break $l$block_4;
            }
            tmp$ret$6 = tmp$ret$5;
            break $l$block_5;
          }
          var tmp5_toInt_0_7 = tmp$ret$6;
          tmp$ret$7 = _UShort___get_data__impl_(tmp5_toInt_0_7) & 65535;
          break $l$block_6;
        }
        tmp$ret$8 = tmp$ret$7;
        break $l$block_7;
      }
      var rc_1 = tmp$ret$8;
      _this_.commitWritten_majfzk_k$(rc_1);
      tmp$ret$9 = rc_1;
      break $l$block_8;
    }
    Unit_getInstance();
    return start + charactersWritten | 0;
  }
  function append(_this_, c) {
    var tmp$ret$11;
    $l$block_10: {
      {
      }
      var tmp$ret$10;
      $l$block_9: {
        var tmp0__anonymous__2 = _this_._memory;
        var tmp1__anonymous__2 = _this_._get_writePosition__0_k$();
        var tmp2__anonymous__2 = _this_._get_limit__0_k$();
        var tmp$ret$9;
        $l$block_8: {
          var tmp16_putUtf8Char_0_4 = c.toInt_0_k$();
          var tmp;
          if (0 <= tmp16_putUtf8Char_0_4 ? tmp16_putUtf8Char_0_4 <= 127 : false) {
            {
              var tmp0_storeAt_0_5 = toByte(tmp16_putUtf8Char_0_4);
              tmp0__anonymous__2._view.setInt8(tmp1__anonymous__2, tmp0_storeAt_0_5);
            }
            tmp = 1;
          } else if (128 <= tmp16_putUtf8Char_0_4 ? tmp16_putUtf8Char_0_4 <= 2047 : false) {
            var tmp$ret$0;
            $l$block: {
              var tmp1_set_0_6 = toByte(192 | tmp16_putUtf8Char_0_4 >> 6 & 31);
              tmp$ret$0 = tmp0__anonymous__2._view.setInt8(tmp1__anonymous__2, tmp1_set_0_6);
              break $l$block;
            }
            var tmp$ret$1;
            $l$block_0: {
              var tmp2_set_0_7 = tmp1__anonymous__2 + 1 | 0;
              var tmp3_set_0_8 = toByte(128 | tmp16_putUtf8Char_0_4 & 63);
              tmp$ret$1 = tmp0__anonymous__2._view.setInt8(tmp2_set_0_7, tmp3_set_0_8);
              break $l$block_0;
            }
            tmp = 2;
          } else if (2048 <= tmp16_putUtf8Char_0_4 ? tmp16_putUtf8Char_0_4 <= 65535 : false) {
            var tmp$ret$2;
            $l$block_1: {
              var tmp4_set_0_9 = toByte(224 | tmp16_putUtf8Char_0_4 >> 12 & 15);
              tmp$ret$2 = tmp0__anonymous__2._view.setInt8(tmp1__anonymous__2, tmp4_set_0_9);
              break $l$block_1;
            }
            var tmp$ret$3;
            $l$block_2: {
              var tmp5_set_0_10 = tmp1__anonymous__2 + 1 | 0;
              var tmp6_set_0_11 = toByte(128 | tmp16_putUtf8Char_0_4 >> 6 & 63);
              tmp$ret$3 = tmp0__anonymous__2._view.setInt8(tmp5_set_0_10, tmp6_set_0_11);
              break $l$block_2;
            }
            var tmp$ret$4;
            $l$block_3: {
              var tmp7_set_0_12 = tmp1__anonymous__2 + 2 | 0;
              var tmp8_set_0_13 = toByte(128 | tmp16_putUtf8Char_0_4 & 63);
              tmp$ret$4 = tmp0__anonymous__2._view.setInt8(tmp7_set_0_12, tmp8_set_0_13);
              break $l$block_3;
            }
            tmp = 3;
          } else if (65536 <= tmp16_putUtf8Char_0_4 ? tmp16_putUtf8Char_0_4 <= 1114111 : false) {
            var tmp$ret$5;
            $l$block_4: {
              var tmp9_set_0_14 = toByte(240 | tmp16_putUtf8Char_0_4 >> 18 & 7);
              tmp$ret$5 = tmp0__anonymous__2._view.setInt8(tmp1__anonymous__2, tmp9_set_0_14);
              break $l$block_4;
            }
            var tmp$ret$6;
            $l$block_5: {
              var tmp10_set_0_15 = tmp1__anonymous__2 + 1 | 0;
              var tmp11_set_0_16 = toByte(128 | tmp16_putUtf8Char_0_4 >> 12 & 63);
              tmp$ret$6 = tmp0__anonymous__2._view.setInt8(tmp10_set_0_15, tmp11_set_0_16);
              break $l$block_5;
            }
            var tmp$ret$7;
            $l$block_6: {
              var tmp12_set_0_17 = tmp1__anonymous__2 + 2 | 0;
              var tmp13_set_0_18 = toByte(128 | tmp16_putUtf8Char_0_4 >> 6 & 63);
              tmp$ret$7 = tmp0__anonymous__2._view.setInt8(tmp12_set_0_17, tmp13_set_0_18);
              break $l$block_6;
            }
            var tmp$ret$8;
            $l$block_7: {
              var tmp14_set_0_19 = tmp1__anonymous__2 + 3 | 0;
              var tmp15_set_0_20 = toByte(128 | tmp16_putUtf8Char_0_4 & 63);
              tmp$ret$8 = tmp0__anonymous__2._view.setInt8(tmp14_set_0_19, tmp15_set_0_20);
              break $l$block_7;
            }
            tmp = 4;
          } else {
            malformedCodePoint(tmp16_putUtf8Char_0_4);
          }
          tmp$ret$9 = tmp;
          break $l$block_8;
        }
        var size_3 = tmp$ret$9;
        var tmp_0;
        if (size_3 > (tmp2__anonymous__2 - tmp1__anonymous__2 | 0)) {
          appendFailed(1);
        } else {
          tmp_0 = size_3;
        }
        tmp$ret$10 = tmp_0;
        break $l$block_9;
      }
      var rc_1 = tmp$ret$10;
      _this_.commitWritten_majfzk_k$(rc_1);
      tmp$ret$11 = rc_1;
      break $l$block_10;
    }
    Unit_getInstance();
    return _this_;
  }
  function appendFailed(length) {
    throw new BufferLimitExceededException('' + 'Not enough free space available to write ' + length + ' character(s).');
  }
  var DefaultChunkedBufferPool;
  function DefaultBufferPool_init_$Init$(bufferSize, capacity, allocator, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      bufferSize = 4096;
    if (!(($mask0 & 2) === 0))
      capacity = 1000;
    if (!(($mask0 & 4) === 0))
      allocator = DefaultAllocator_getInstance();
    DefaultBufferPool.call($this, bufferSize, capacity, allocator);
    return $this;
  }
  function DefaultBufferPool_init_$Create$(bufferSize, capacity, allocator, $mask0, $marker) {
    return DefaultBufferPool_init_$Init$(bufferSize, capacity, allocator, $mask0, $marker, Object.create(DefaultBufferPool.prototype));
  }
  function DefaultBufferPool(bufferSize, capacity, allocator) {
    DefaultPool.call(this, capacity);
    this._bufferSize = bufferSize;
    this._allocator = allocator;
  }
  DefaultBufferPool.prototype.produceInstance_0_k$ = function () {
    return new IoBuffer(this._allocator.alloc_ha5a7z_k$(this._bufferSize), null, this);
  };
  DefaultBufferPool.prototype.disposeInstance_wuvbse_k$ = function (instance) {
    this._allocator.free_hqwtqe_k$(instance._get_memory__0_k$());
    DefaultPool.prototype.disposeInstance_iav7o_k$.call(this, instance);
    instance.unlink_sv8swh_k$();
  };
  DefaultBufferPool.prototype.disposeInstance_iav7o_k$ = function (instance) {
    return this.disposeInstance_wuvbse_k$(instance instanceof IoBuffer ? instance : THROW_CCE());
  };
  DefaultBufferPool.prototype.validateInstance_wuvbse_k$ = function (instance) {
    DefaultPool.prototype.validateInstance_iav7o_k$.call(this, instance);
    if (instance === Companion_getInstance_20()._Empty_1) {
      {
        throw IllegalStateException_init_$Create$("IoBuffer.Empty couldn't be recycled");
      }
    }{
      var tmp0_check_0 = !(instance === Companion_getInstance_20()._Empty_1);
      {
      }
      if (!tmp0_check_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = "Empty instance couldn't be recycled";
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString_1(message_1));
      }}
    {
      var tmp1_check_0 = !(instance === Companion_getInstance_13()._get_Empty__0_k$());
      {
      }
      if (!tmp1_check_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = "Empty instance couldn't be recycled";
          break $l$block_0;
        }
        var message_1_0 = tmp$ret$1;
        throw IllegalStateException_init_$Create$(toString_1(message_1_0));
      }}
    {
      var tmp2_check_0 = !(instance === Companion_getInstance_16()._get_Empty__0_k$());
      {
      }
      if (!tmp2_check_0) {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = "Empty instance couldn't be recycled";
          break $l$block_1;
        }
        var message_1_1 = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString_1(message_1_1));
      }}
    {
      var tmp3_check_0 = instance._get_referenceCount__0_k$() === 0;
      {
      }
      if (!tmp3_check_0) {
        var tmp$ret$3;
        $l$block_2: {
          tmp$ret$3 = 'Unable to clear buffer: it is still in use.';
          break $l$block_2;
        }
        var message_1_2 = tmp$ret$3;
        throw IllegalStateException_init_$Create$(toString_1(message_1_2));
      }}
    {
      var tmp4_check_0 = instance._get_next__0_k$() == null;
      {
      }
      if (!tmp4_check_0) {
        var tmp$ret$4;
        $l$block_3: {
          tmp$ret$4 = "Recycled instance shouldn't be a part of a chain.";
          break $l$block_3;
        }
        var message_1_3 = tmp$ret$4;
        throw IllegalStateException_init_$Create$(toString_1(message_1_3));
      }}
    {
      var tmp5_check_0 = instance._get_origin__0_k$() == null;
      {
      }
      if (!tmp5_check_0) {
        var tmp$ret$5;
        $l$block_4: {
          tmp$ret$5 = "Recycled instance shouldn't be a view or another buffer.";
          break $l$block_4;
        }
        var message_1_4 = tmp$ret$5;
        throw IllegalStateException_init_$Create$(toString_1(message_1_4));
      }}
  };
  DefaultBufferPool.prototype.validateInstance_iav7o_k$ = function (instance) {
    return this.validateInstance_wuvbse_k$(instance instanceof IoBuffer ? instance : THROW_CCE());
  };
  DefaultBufferPool.prototype.clearInstance_qd709p_k$ = function (instance) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_apply_0 = DefaultPool.prototype.clearInstance_2c5_k$.call(this, instance);
      {
      }
      {
        tmp0_apply_0.unpark_sv8swh_k$();
        tmp0_apply_0.reset_sv8swh_k$();
      }
      tmp$ret$0 = tmp0_apply_0;
      break $l$block;
    }
    return tmp$ret$0;
  };
  DefaultBufferPool.prototype.clearInstance_2c5_k$ = function (instance) {
    return this.clearInstance_qd709p_k$(instance instanceof IoBuffer ? instance : THROW_CCE());
  };
  DefaultBufferPool.$metadata$ = {
    simpleName: 'DefaultBufferPool',
    kind: 'class',
    interfaces: []
  };
  function readFully(_this_, destination, offset, length) {
    var tmp$ret$2;
    $l$block_1: {
      {
      }
      var value_2;
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          var tmp0__anonymous__3_2 = _this_._memory;
          var tmp1__anonymous__3_2 = _this_._get_readPosition__0_k$();
          var tmp2__anonymous__3_2 = _this_._get_writePosition__0_k$();
          {
            var tmp0_require_0_3 = (tmp2__anonymous__3_2 - tmp1__anonymous__3_2 | 0) >= length;
            {
            }
            if (!tmp0_require_0_3) {
              var m_2_4 = new _no_name_provided__3_5_0(length);
              m_2_4.doFail_4_6_0_k$();
            }}
          value_2 = copyTo_1(tmp0__anonymous__3_2, destination, tmp1__anonymous__3_2, length, offset);
          tmp$ret$0 = length;
          break $l$block;
        }
        var rc_1 = tmp$ret$0;
        _this_.discardExact_majfzk_k$(rc_1);
        tmp$ret$1 = rc_1;
        break $l$block_0;
      }
      Unit_getInstance();
      tmp$ret$2 = value_2;
      break $l$block_1;
    }
  }
  function readFully$default(_this_, destination, offset, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      length = destination.length - offset | 0;
    return readFully(_this_, destination, offset, length);
  }
  function writeFully(_this_, src, length) {
    {
      var tmp0_require_0 = length >= 0;
      {
      }
      if (!tmp0_require_0) {
        var m_2 = new _no_name_provided__3_6(length);
        m_2.doFail_4_0_k$();
      }}
    {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = src._get_writePosition__0_k$() - src._get_readPosition__0_k$() | 0;
        break $l$block;
      }
      var tmp1_require_0 = length <= tmp$ret$0;
      {
      }
      if (!tmp1_require_0) {
        var m_2_0 = new _no_name_provided__3_7(length, src);
        m_2_0.doFail_4_0_k$();
      }}
    {
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = _this_._get_limit__0_k$() - _this_._get_writePosition__0_k$() | 0;
        break $l$block_0;
      }
      var tmp2_require_0 = length <= tmp$ret$1;
      {
      }
      if (!tmp2_require_0) {
        var m_2_1 = new _no_name_provided__3_8(length, _this_);
        m_2_1.doFail_4_0_k$();
      }}
    {
      {
      }
      var tmp$ret$3;
      $l$block_2: {
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          var tmp3__anonymous__2_2 = _this_._memory;
          var tmp4__anonymous__2_2 = _this_._get_writePosition__0_k$();
          var tmp5__anonymous__2_2 = _this_._get_limit__0_k$();
          var writeRemaining_3_3 = tmp5__anonymous__2_2 - tmp4__anonymous__2_2 | 0;
          if (writeRemaining_3_3 < length) {
            throw InsufficientSpaceException_init_$Create$('buffer readable content', length, writeRemaining_3_3);
          }{
            src._memory.copyTo_gl4spl_k$(tmp3__anonymous__2_2, src._get_readPosition__0_k$(), length, tmp4__anonymous__2_2);
            src.discardExact_majfzk_k$(length);
          }
          tmp$ret$2 = length;
          break $l$block_1;
        }
        var rc_1 = tmp$ret$2;
        _this_.commitWritten_majfzk_k$(rc_1);
        tmp$ret$3 = rc_1;
        break $l$block_2;
      }
      Unit_getInstance();
    }
  }
  function _no_name_provided__3_5_0($length) {
    this._$length = $length;
    RequireFailureCapture.call(this);
  }
  _no_name_provided__3_5_0.prototype.doFail_4_6_0_k$ = function () {
    throw new EOFException('' + 'Not enough bytes to read a byte array of size ' + this._$length + '.');
  };
  _no_name_provided__3_5_0.$metadata$ = {
    simpleName: '<no name provided>_3_5',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__3_6($length) {
    this._$length_0 = $length;
    RequireFailureCapture.call(this);
  }
  _no_name_provided__3_6.prototype.doFail_4_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = '' + "length shouldn't be negative: " + this._$length_0;
      break $l$block;
    }
    throw IllegalArgumentException_init_$Create$(tmp$ret$0);
  };
  _no_name_provided__3_6.$metadata$ = {
    simpleName: '<no name provided>_3',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__3_7($length, $src) {
    this._$length_1 = $length;
    this._$src = $src;
    RequireFailureCapture.call(this);
  }
  _no_name_provided__3_7.prototype.doFail_4_0_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = this._$src._get_writePosition__0_k$() - this._$src._get_readPosition__0_k$() | 0;
        break $l$block;
      }
      tmp$ret$1 = '' + "length shouldn't be greater than the source read remaining: " + this._$length_1 + ' > ' + tmp$ret$0;
      break $l$block_0;
    }
    throw IllegalArgumentException_init_$Create$(tmp$ret$1);
  };
  _no_name_provided__3_7.$metadata$ = {
    simpleName: '<no name provided>_3',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__3_8($length, $this_writeFully) {
    this._$length_2 = $length;
    this._$this_writeFully = $this_writeFully;
    RequireFailureCapture.call(this);
  }
  _no_name_provided__3_8.prototype.doFail_4_0_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = this._$this_writeFully._get_limit__0_k$() - this._$this_writeFully._get_writePosition__0_k$() | 0;
        break $l$block;
      }
      tmp$ret$1 = '' + "length shouldn't be greater than the destination write remaining space: " + this._$length_2 + ' > ' + tmp$ret$0;
      break $l$block_0;
    }
    throw IllegalArgumentException_init_$Create$(tmp$ret$1);
  };
  _no_name_provided__3_8.$metadata$ = {
    simpleName: '<no name provided>_3',
    kind: 'class',
    interfaces: []
  };
  function peekTo(_this_, destination, destinationOffset, offset, min, max) {
    var tmp$ret$4;
    $l$block_3: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = toLong(destination._view.byteLength);
        break $l$block;
      }
      var tmp0_minOf_0 = tmp$ret$0.minus_wiekkq_k$(destinationOffset);
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = _this_._get_writePosition__0_k$() - _this_._get_readPosition__0_k$() | 0;
        break $l$block_0;
      }
      var tmp1_minOf_0 = toLong(tmp$ret$1);
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = max.compareTo_wiekkq_k$(tmp1_minOf_0) <= 0 ? max : tmp1_minOf_0;
          break $l$block_1;
        }
        var tmp0_minOf_0_1 = tmp$ret$2;
        tmp$ret$3 = tmp0_minOf_0.compareTo_wiekkq_k$(tmp0_minOf_0_1) <= 0 ? tmp0_minOf_0 : tmp0_minOf_0_1;
        break $l$block_2;
      }
      tmp$ret$4 = tmp$ret$3;
      break $l$block_3;
    }
    var size_0 = tmp$ret$4;
    _this_._memory.copyTo_650o3g_k$(destination, numberToLong(_this_._get_readPosition__0_k$()).plus_wiekkq_k$(offset), size_0, destinationOffset);
    return size_0;
  }
  function EmptyBufferPoolImpl() {
    EmptyBufferPoolImpl_instance = this;
    NoPoolImpl.call(this);
  }
  EmptyBufferPoolImpl.prototype.borrow_0_k$ = function () {
    return Companion_getInstance_20()._Empty_1;
  };
  EmptyBufferPoolImpl.$metadata$ = {
    simpleName: 'EmptyBufferPoolImpl',
    kind: 'object',
    interfaces: []
  };
  var EmptyBufferPoolImpl_instance;
  function EmptyBufferPoolImpl_getInstance() {
    if (EmptyBufferPoolImpl_instance == null)
      new EmptyBufferPoolImpl();
    return EmptyBufferPoolImpl_instance;
  }
  function BufferLimitExceededException(message) {
    Exception_init_$Init$_0(message, this);
    captureStack(this, BufferLimitExceededException);
  }
  BufferLimitExceededException.$metadata$ = {
    simpleName: 'BufferLimitExceededException',
    kind: 'class',
    interfaces: []
  };
  function releaseAll(_this_, pool) {
    var current = _this_;
    while (!(current == null)) {
      var next = current.cleanNext_0_k$();
      current.release_fz49v2_k$(pool);
      current = next;
    }
  }
  function findTail(_this_) {
    var $this = _this_;
    while (true) {
      var $this_0 = $this;
      var tmp0_elvis_lhs = $this_0._get_next__0_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return $this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var next = tmp;
      $this = next;
      continue;
    }
  }
  function remainingAll(_this_) {
    return remainingAll_0(_this_, new Long(0, 0));
  }
  function remainingAll_0(_this_, n) {
    var $this = _this_;
    var n_0 = n;
    while (true) {
      var $this_0 = $this;
      var n_1 = n_0;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = $this_0._get_writePosition__0_k$() - $this_0._get_readPosition__0_k$() | 0;
        break $l$block;
      }
      var rem = toLong(tmp$ret$0).plus_wiekkq_k$(n_1);
      var tmp0_elvis_lhs = $this_0._get_next__0_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return rem;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var next = tmp;
      $this = next;
      n_0 = rem;
      continue;
    }
  }
  function BytePacketBuilderPlatformBase(pool) {
    BytePacketBuilderBase.call(this, pool);
  }
  BytePacketBuilderPlatformBase.$metadata$ = {
    simpleName: 'BytePacketBuilderPlatformBase',
    kind: 'class',
    interfaces: []
  };
  function BytePacketBuilderBase(pool) {
    AbstractOutput_init_$Init$(pool, this);
  }
  BytePacketBuilderBase.$metadata$ = {
    simpleName: 'BytePacketBuilderBase',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__3_9(this$0) {
    this._this$0_10 = this$0;
    RequireFailureCapture.call(this);
  }
  _no_name_provided__3_9.prototype.doFail_4_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = '' + "shouldn't be negative: headerSizeHint = " + this._this$0_10._headerSizeHint_0;
      break $l$block;
    }
    throw IllegalArgumentException_init_$Create$(tmp$ret$0);
  };
  _no_name_provided__3_9.$metadata$ = {
    simpleName: '<no name provided>_3',
    kind: 'class',
    interfaces: []
  };
  function BytePacketBuilder(headerSizeHint, pool) {
    BytePacketBuilderPlatformBase.call(this, pool);
    this._headerSizeHint_0 = headerSizeHint;
    {
      var tmp0_require_0 = this._headerSizeHint_0 >= 0;
      {
      }
      if (!tmp0_require_0) {
        var m_2 = new _no_name_provided__3_9(this);
        m_2.doFail_4_0_k$();
      }}
  }
  BytePacketBuilder.prototype._get_size__0_k$ = function () {
    return this._get__size__0_k$();
  };
  BytePacketBuilder.prototype.closeDestination_sv8swh_k$ = function () {
  };
  BytePacketBuilder.prototype.flush_isagme_k$ = function (source, offset, length) {
  };
  BytePacketBuilder.prototype.append_wi8o78_k$ = function (c) {
    var tmp = BytePacketBuilderPlatformBase.prototype.append_wi8o78_k$.call(this, c);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  BytePacketBuilder.prototype.append_v1o70a_k$ = function (csq) {
    var tmp = BytePacketBuilderPlatformBase.prototype.append_v1o70a_k$.call(this, csq);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  BytePacketBuilder.prototype.append_n5ylwa_k$ = function (csq, start, end) {
    var tmp = BytePacketBuilderPlatformBase.prototype.append_n5ylwa_k$.call(this, csq, start, end);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  BytePacketBuilder.prototype.build_0_k$ = function () {
    var size_0 = this._get_size__0_k$();
    var head = this.stealAll_0_k$();
    var tmp0_subject = head;
    return tmp0_subject == null ? Companion_getInstance_14()._Empty : new ByteReadPacket(head, toLong(size_0), this._get_pool__0_k$());
  };
  BytePacketBuilder.prototype.toString = function () {
    return '' + 'BytePacketBuilder(' + this._get_size__0_k$() + ' bytes written)';
  };
  BytePacketBuilder.$metadata$ = {
    simpleName: 'BytePacketBuilder',
    kind: 'class',
    interfaces: []
  };
  function Companion_15() {
    Companion_instance_14 = this;
    this._Empty = new ByteReadPacket(Companion_getInstance_16()._get_Empty__0_k$(), new Long(0, 0), Companion_getInstance_16()._EmptyPool);
  }
  Companion_15.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    if (Companion_instance_14 == null)
      new Companion_15();
    return Companion_instance_14;
  }
  function ByteReadPacket(head, remaining, pool) {
    Companion_getInstance_14();
    ByteReadPacketPlatformBase.call(this, head, remaining, pool);
    this.markNoMoreChunksAvailable_sv8swh_k$();
  }
  ByteReadPacket.prototype.fill_0_k$ = function () {
    return null;
  };
  ByteReadPacket.prototype.fill_rzxerb_k$ = function (destination, offset, length) {
    return 0;
  };
  ByteReadPacket.prototype.toString = function () {
    return '' + 'ByteReadPacket(' + this._get_remaining__0_k$() + ' bytes remaining)';
  };
  ByteReadPacket.$metadata$ = {
    simpleName: 'ByteReadPacket',
    kind: 'class',
    interfaces: [Input]
  };
  function ByteReadPacketPlatformBase(head, remaining, pool) {
    ByteReadPacketBase.call(this, head, remaining, pool);
  }
  ByteReadPacketPlatformBase.$metadata$ = {
    simpleName: 'ByteReadPacketPlatformBase',
    kind: 'class',
    interfaces: []
  };
  function discardExact(_this_, n) {
    discardExact_0(_this_, toLong(n));
  }
  function discardExact_0(_this_, n) {
    var discarded = _this_.discard_wiekkq_k$(n);
    if (!discarded.equals(n)) {
      throw IllegalStateException_init_$Create$('' + 'Only ' + discarded + ' bytes were discarded of ' + n + ' requested');
    }}
  function readFully_0(_this_, dst, offset, length) {
    {
      var tmp$ret$4;
      $l$block_3: {
        var remaining_1 = length;
        var dstOffset_2 = offset;
        var tmp$ret$0;
        $l$block: {
          var release_1 = true;
          var tmp0_elvis_lhs_3 = prepareReadFirstHead(_this_, 1);
          var tmp;
          if (tmp0_elvis_lhs_3 == null) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          } else {
            tmp = tmp0_elvis_lhs_3;
          }
          var current_2 = tmp;
          try {
            $l$break_0: do {
              var tmp$ret$3;
              $l$block_2: {
                var tmp0__anonymous__3_6 = current_2;
                var tmp$ret$2;
                $l$block_1: {
                  var tmp0_minOf_0_8 = remaining_1;
                  var tmp$ret$1;
                  $l$block_0: {
                    tmp$ret$1 = tmp0__anonymous__3_6._get_writePosition__0_k$() - tmp0__anonymous__3_6._get_readPosition__0_k$() | 0;
                    break $l$block_0;
                  }
                  var tmp1_minOf_0_9 = tmp$ret$1;
                  tmp$ret$2 = Math.min(tmp0_minOf_0_8, tmp1_minOf_0_9);
                  break $l$block_1;
                }
                var count_4_7 = tmp$ret$2;
                {
                  var tmp1__anonymous__5 = dstOffset_2;
                  readFully(tmp0__anonymous__3_6, dst, tmp1__anonymous__5, count_4_7);
                }
                remaining_1 = remaining_1 - count_4_7 | 0;
                dstOffset_2 = dstOffset_2 + count_4_7 | 0;
                tmp$ret$3 = remaining_1 > 0;
                break $l$block_2;
              }
              if (!tmp$ret$3) {
                break $l$break_0;
              } else {
              }
              release_1 = false;
              var tmp1_elvis_lhs_5 = prepareReadNextHead(_this_, current_2);
              var tmp_0;
              if (tmp1_elvis_lhs_5 == null) {
                break $l$break_0;
              } else {
                tmp_0 = tmp1_elvis_lhs_5;
              }
              var next_4 = tmp_0;
              current_2 = next_4;
              release_1 = true;
            }
             while (true);
          }finally {
            if (release_1) {
              completeReadHead(_this_, current_2);
            }}
        }
        tmp$ret$4 = remaining_1;
        break $l$block_3;
      }
      var tmp2_requireNoRemaining_0 = tmp$ret$4;
      if (tmp2_requireNoRemaining_0 > 0) {
        prematureEndOfStream(tmp2_requireNoRemaining_0);
      }}
  }
  function peekTo_0(_this_, destination, offset, min, max) {
    checkPeekTo(destination, offset, min, max);
    var tmp = toLong(destination._get_writePosition__0_k$());
    var tmp_0 = toLong(offset);
    var tmp_1 = toLong(min);
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = destination._get_limit__0_k$() - destination._get_writePosition__0_k$() | 0;
      break $l$block;
    }
    var copied = _this_.peekTo_aaoha9_k$(destination._memory, tmp, tmp_0, tmp_1, toLong(coerceAtMost(max, tmp$ret$0))).toInt_0_k$();
    destination.commitWritten_majfzk_k$(copied);
    return copied;
  }
  function peekTo$default(_this_, destination, offset, min, max, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      min = 1;
    if (!(($mask0 & 8) === 0))
      max = IntCompanionObject_getInstance()._MAX_VALUE_0;
    return peekTo_0(_this_, destination, offset, min, max);
  }
  function writeFully_0(_this_, src, length) {
    {
      var currentOffset_1 = 0;
      var remaining_2 = length;
      {
        var tail_1 = prepareWriteHead(_this_, 1, null);
        try {
          $l$break: while (true) {
            var tmp$ret$3;
            $l$block_1: {
              var tmp0__anonymous__3_2 = tail_1;
              var tmp$ret$2;
              $l$block_0: {
                var tmp0_minOf_0_4 = remaining_2;
                var tmp$ret$1;
                $l$block: {
                  tmp$ret$1 = tmp0__anonymous__3_2._get_limit__0_k$() - tmp0__anonymous__3_2._get_writePosition__0_k$() | 0;
                  break $l$block;
                }
                var tmp1_minOf_0_5 = tmp$ret$1;
                tmp$ret$2 = Math.min(tmp0_minOf_0_4, tmp1_minOf_0_5);
                break $l$block_0;
              }
              var size_4_3 = tmp$ret$2;
              {
                var tmp1__anonymous__5 = currentOffset_1;
                writeFully(tmp0__anonymous__3_2, src, size_4_3);
              }
              currentOffset_1 = currentOffset_1 + size_4_3 | 0;
              remaining_2 = remaining_2 - size_4_3 | 0;
              tmp$ret$3 = remaining_2 > 0;
              break $l$block_1;
            }
            if (!tmp$ret$3)
              break $l$break;
            else {
            }
            tail_1 = prepareWriteHead(_this_, 1, tail_1);
          }
        }finally {
          afterHeadWrite(_this_, tail_1);
        }
      }
    }
  }
  function writeFully$default(_this_, src, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      $l$block: {
        tmp$ret$0 = src._get_writePosition__0_k$() - src._get_readPosition__0_k$() | 0;
        tmp$ret$0_0 = Unit_getInstance();
        break $l$block;
      }
      length = tmp$ret$0;
    }return writeFully_0(_this_, src, length);
  }
  function Companion_16() {
    Companion_instance_15 = this;
  }
  Companion_16.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    if (Companion_instance_15 == null)
      new Companion_16();
    return Companion_instance_15;
  }
  function ByteReadPacketBase(head, remaining, pool) {
    Companion_getInstance_15();
    AbstractInput.call(this, head, remaining, pool);
  }
  ByteReadPacketBase.$metadata$ = {
    simpleName: 'ByteReadPacketBase',
    kind: 'class',
    interfaces: []
  };
  function prematureEndOfStream(size_0) {
    throw new EOFException('' + 'Premature end of stream: expected ' + size_0 + ' bytes');
  }
  function writeText(_this_, text, fromIndex, toIndex, charset) {
    if (charset === Charsets_getInstance()._UTF_8) {
      return writeTextUtf8(_this_, text, fromIndex, toIndex);
    }encodeToImpl(charset.newEncoder_0_k$(), _this_, text, fromIndex, toIndex);
    Unit_getInstance();
  }
  function writeTextUtf8(_this_, text, fromIndex, toIndex) {
    var index = fromIndex;
    {
      var tail_1 = prepareWriteHead(_this_, 1, null);
      try {
        var size_2;
        $l$break: while (true) {
          var tmp$ret$11;
          $l$block_10: {
            var tmp0__anonymous__3 = tail_1;
            var memory_4 = tmp0__anonymous__3._memory;
            var dstOffset_5 = tmp0__anonymous__3._get_writePosition__0_k$();
            var dstLimit_6 = tmp0__anonymous__3._get_limit__0_k$();
            var tmp0_container_7 = encodeUTF8(memory_4, text, index, toIndex, dstOffset_5, dstLimit_6);
            var tmp$ret$3;
            $l$block_2: {
              var tmp$ret$2;
              $l$block_1: {
                var tmp$ret$1;
                $l$block_0: {
                  var tmp$ret$0;
                  $l$block: {
                    var tmp0__get_highShort__0_10 = _EncodeResult___get_value__impl_(tmp0_container_7);
                    tmp$ret$0 = toShort(tmp0__get_highShort__0_10 >>> 16);
                    break $l$block;
                  }
                  var tmp1_toUShort_0_9 = tmp$ret$0;
                  tmp$ret$1 = _UShort___init__impl_(tmp1_toUShort_0_9);
                  break $l$block_0;
                }
                tmp$ret$2 = tmp$ret$1;
                break $l$block_1;
              }
              tmp$ret$3 = tmp$ret$2;
              break $l$block_2;
            }
            var characters_8 = tmp$ret$3;
            var tmp$ret$7;
            $l$block_6: {
              var tmp$ret$6;
              $l$block_5: {
                var tmp$ret$5;
                $l$block_4: {
                  var tmp$ret$4;
                  $l$block_3: {
                    var tmp2__get_lowShort__0_13 = _EncodeResult___get_value__impl_(tmp0_container_7);
                    tmp$ret$4 = toShort(tmp2__get_lowShort__0_13 & 65535);
                    break $l$block_3;
                  }
                  var tmp3_toUShort_0_12 = tmp$ret$4;
                  tmp$ret$5 = _UShort___init__impl_(tmp3_toUShort_0_12);
                  break $l$block_4;
                }
                tmp$ret$6 = tmp$ret$5;
                break $l$block_5;
              }
              tmp$ret$7 = tmp$ret$6;
              break $l$block_6;
            }
            var bytes_11 = tmp$ret$7;
            var tmp = index;
            var tmp$ret$8;
            $l$block_7: {
              tmp$ret$8 = _UShort___get_data__impl_(characters_8) & 65535;
              break $l$block_7;
            }
            index = tmp + tmp$ret$8 | 0;
            var tmp$ret$9;
            $l$block_8: {
              tmp$ret$9 = _UShort___get_data__impl_(bytes_11) & 65535;
              break $l$block_8;
            }
            tmp0__anonymous__3.commitWritten_majfzk_k$(tmp$ret$9);
            var tmp_0;
            var tmp_1;
            var tmp$ret$10;
            $l$block_9: {
              tmp$ret$10 = _UShort___get_data__impl_(characters_8) & 65535;
              break $l$block_9;
            }
            if (tmp$ret$10 === 0) {
              tmp_1 = index < toIndex;
            } else {
              {
                tmp_1 = false;
              }
            }
            if (tmp_1) {
              tmp_0 = 8;
            } else {
              if (index < toIndex) {
                tmp_0 = 1;
              } else {
                {
                  tmp_0 = 0;
                }
              }
            }
            tmp$ret$11 = tmp_0;
            break $l$block_10;
          }
          size_2 = tmp$ret$11;
          if (size_2 <= 0)
            break $l$break;
          tail_1 = prepareWriteHead(_this_, size_2, tail_1);
        }
      }finally {
        afterHeadWrite(_this_, tail_1);
      }
    }
  }
  function readBytes(_this_, n) {
    var tmp;
    if (!(n === 0)) {
      var tmp$ret$1;
      $l$block: {
        var tmp0_also_0 = new Int8Array(n);
        {
        }
        {
          readFully_0(_this_, tmp0_also_0, 0, n);
        }
        tmp$ret$1 = tmp0_also_0;
        break $l$block;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = EmptyByteArray;
    }
    return tmp;
  }
  function readBytes$default(_this_, n, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      $l$block: {
        var tmp0_coerceAtMostMaxIntOrFail_0 = _this_._get_remaining__0_k$();
        if (tmp0_coerceAtMostMaxIntOrFail_0.compareTo_wiekkq_k$(toLong(IntCompanionObject_getInstance()._MAX_VALUE_0)) > 0)
          throw IllegalArgumentException_init_$Create$('Unable to convert to a ByteArray: packet is too big');
        tmp$ret$0 = tmp0_coerceAtMostMaxIntOrFail_0.toInt_0_k$();
        tmp$ret$0_0 = Unit_getInstance();
        break $l$block;
      }
      n = tmp$ret$0;
    }return readBytes(_this_, n);
  }
  function _no_name_provided__3_10() {
    RequireFailureCapture.call(this);
  }
  _no_name_provided__3_10.prototype.doFail_4_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = 'Only ChunkBuffer.Empty instance could be recycled.';
      break $l$block;
    }
    throw IllegalArgumentException_init_$Create$(tmp$ret$0);
  };
  _no_name_provided__3_10.$metadata$ = {
    simpleName: '<no name provided>_3',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__44() {
  }
  _no_name_provided__44.prototype.borrow_0_k$ = function () {
    return DefaultChunkedBufferPool.borrow_0_k$();
  };
  _no_name_provided__44.prototype.recycle_kpwap4_k$ = function (instance) {
    if (!(instance instanceof IoBuffer)) {
      throw IllegalArgumentException_init_$Create$('Only IoBuffer instances can be recycled.');
    } else {
    }
    DefaultChunkedBufferPool.recycle_iav7o_k$(instance);
  };
  _no_name_provided__44.prototype.recycle_iav7o_k$ = function (instance) {
    return this.recycle_kpwap4_k$(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  _no_name_provided__44.$metadata$ = {
    kind: 'class',
    interfaces: [ObjectPool]
  };
  function _no_name_provided__45() {
  }
  _no_name_provided__45.prototype.borrow_0_k$ = function () {
    return Companion_getInstance_16()._get_Empty__0_k$();
  };
  _no_name_provided__45.prototype.recycle_kpwap4_k$ = function (instance) {
    {
      var tmp0_require_0 = instance === Companion_getInstance_16()._get_Empty__0_k$();
      {
      }
      if (!tmp0_require_0) {
        var m_2 = new _no_name_provided__3_10();
        m_2.doFail_4_0_k$();
      }}
  };
  _no_name_provided__45.prototype.recycle_iav7o_k$ = function (instance) {
    return this.recycle_kpwap4_k$(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  _no_name_provided__45.$metadata$ = {
    kind: 'class',
    interfaces: [ObjectPool]
  };
  function _no_name_provided__46() {
    NoPoolImpl.call(this);
  }
  _no_name_provided__46.prototype.borrow_0_k$ = function () {
    var tmp = DefaultAllocator_getInstance().alloc_ha5a7z_k$(4096);
    return new IoBuffer(tmp, null, isInterface(this, ObjectPool) ? this : THROW_CCE());
  };
  _no_name_provided__46.prototype.recycle_kpwap4_k$ = function (instance) {
    if (!(instance instanceof IoBuffer)) {
      throw IllegalArgumentException_init_$Create$('Only IoBuffer instances can be recycled.');
    } else {
    }
    DefaultAllocator_getInstance().free_hqwtqe_k$(instance._get_memory__0_k$());
  };
  _no_name_provided__46.prototype.recycle_iav7o_k$ = function (instance) {
    return this.recycle_kpwap4_k$(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  _no_name_provided__46.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__47() {
    NoPoolImpl.call(this);
  }
  _no_name_provided__47.prototype.borrow_0_k$ = function () {
    throw UnsupportedOperationException_init_$Create$_0("This pool doesn't support borrow");
  };
  _no_name_provided__47.prototype.recycle_kpwap4_k$ = function (instance) {
  };
  _no_name_provided__47.prototype.recycle_iav7o_k$ = function (instance) {
    return this.recycle_kpwap4_k$(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  _no_name_provided__47.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _set_origin_($this, _set___) {
    return $this._origin$delegate.setValue_gbl9e2_k$($this, origin$factory(), _set___);
  }
  function appendNext($this, chunk) {
    if (!$this._nextRef.atomicfu$compareAndSet(null, chunk)) {
      throw IllegalStateException_init_$Create$('This chunk has already a next chunk.');
    }}
  function Companion_17() {
    Companion_instance_16 = this;
    var tmp = this;
    tmp._Pool = new _no_name_provided__44();
    var tmp_0 = this;
    tmp_0._EmptyPool = new _no_name_provided__45();
    var tmp_1 = this;
    tmp_1._NoPool = new _no_name_provided__46();
    var tmp_2 = this;
    tmp_2._NoPoolManuallyManaged = new _no_name_provided__47();
  }
  Companion_17.prototype._get_Empty__0_k$ = function () {
    return Companion_getInstance_20()._Empty_1;
  };
  Companion_17.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    if (Companion_instance_16 == null)
      new Companion_17();
    return Companion_instance_16;
  }
  function _no_name_provided__3_11() {
    RequireFailureCapture.call(this);
  }
  _no_name_provided__3_11.prototype.doFail_4_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = "A chunk couldn't be a view of itself.";
      break $l$block;
    }
    throw IllegalArgumentException_init_$Create$(tmp$ret$0);
  };
  _no_name_provided__3_11.$metadata$ = {
    simpleName: '<no name provided>_3',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__3_12() {
    RequireFailureCapture.call(this);
  }
  _no_name_provided__3_12.prototype.doFail_4_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = 'Unable to reset buffer with origin';
      break $l$block;
    }
    throw IllegalArgumentException_init_$Create$(tmp$ret$0);
  };
  _no_name_provided__3_12.$metadata$ = {
    simpleName: '<no name provided>_3',
    kind: 'class',
    interfaces: []
  };
  function ChunkBuffer(memory, origin, parentPool) {
    Companion_getInstance_16();
    Buffer.call(this, memory);
    this._parentPool = parentPool;
    {
      var tmp0_require_0 = !(origin === this);
      {
      }
      if (!tmp0_require_0) {
        var m_2 = new _no_name_provided__3_11();
        m_2.doFail_4_0_k$();
      }}
    this._nextRef = atomic(null);
    this._refCount = atomic_1(1);
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new _no_name_provided__49(origin);
      break $l$block;
    }
    tmp._origin$delegate = tmp$ret$0;
  }
  ChunkBuffer.prototype._get_origin__0_k$ = function () {
    return this._origin$delegate.getValue_d8h4ck_k$(this, origin$factory_0());
  };
  ChunkBuffer.prototype._set_next__638tqt_k$ = function (newValue) {
    if (newValue == null) {
      this.cleanNext_0_k$();
      Unit_getInstance();
    } else {
      appendNext(this, newValue);
    }
  };
  ChunkBuffer.prototype._get_next__0_k$ = function () {
    return this._nextRef._value_1;
  };
  ChunkBuffer.prototype._get_referenceCount__0_k$ = function () {
    return this._refCount._value_3;
  };
  ChunkBuffer.prototype.cleanNext_0_k$ = function () {
    return this._nextRef.atomicfu$getAndSet(null);
  };
  ChunkBuffer.prototype.duplicate_0_k$ = function () {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_elvis_lhs = this._get_origin__0_k$();
      var tmp0_let_0 = tmp0_elvis_lhs == null ? this : tmp0_elvis_lhs;
      {
      }
      var tmp$ret$1;
      $l$block_0: {
        tmp0_let_0.acquire_sv8swh_k$();
        var tmp$ret$0;
        $l$block: {
          var tmp0_also_0_2 = new ChunkBuffer(this._get_memory__0_k$(), tmp0_let_0, this._parentPool);
          {
          }
          {
            this.duplicateTo_2zb9pw_k$(tmp0_also_0_2);
          }
          tmp$ret$0 = tmp0_also_0_2;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  };
  ChunkBuffer.prototype.release_fz49v2_k$ = function (pool) {
    if (this.release_0_k$()) {
      var origin = this._get_origin__0_k$();
      if (!(origin == null)) {
        this.unlink_sv8swh_k$();
        origin.release_fz49v2_k$(pool);
      } else {
        var tmp0_elvis_lhs = this._parentPool;
        var poolToUse = tmp0_elvis_lhs == null ? pool : tmp0_elvis_lhs;
        poolToUse.recycle_iav7o_k$(this);
      }
    }};
  ChunkBuffer.prototype.unlink_sv8swh_k$ = function () {
    if (!this._refCount.atomicfu$compareAndSet(0, -1)) {
      throw IllegalStateException_init_$Create$('Unable to unlink: buffer is in use.');
    }this.cleanNext_0_k$();
    Unit_getInstance();
    _set_origin_(this, null);
  };
  ChunkBuffer.prototype.acquire_sv8swh_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_update_0 = this._refCount;
      while (true) {
        var cur_1 = tmp0_update_0._value_3;
        var tmp$ret$0;
        $l$block: {
          if (cur_1 <= 0)
            throw IllegalStateException_init_$Create$('Unable to acquire chunk: it is already released.');
          tmp$ret$0 = cur_1 + 1 | 0;
          break $l$block;
        }
        var upd_2 = tmp$ret$0;
        if (tmp0_update_0.atomicfu$compareAndSet(cur_1, upd_2)) {
          tmp$ret$1 = Unit_getInstance();
          break $l$block_0;
        }}
    }
  };
  ChunkBuffer.prototype.unpark_sv8swh_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_update_0 = this._refCount;
      while (true) {
        var cur_1 = tmp0_update_0._value_3;
        var tmp$ret$0;
        $l$block: {
          if (cur_1 < 0) {
            throw IllegalStateException_init_$Create$("This instance is already disposed and couldn't be borrowed.");
          }if (cur_1 > 0) {
            throw IllegalStateException_init_$Create$('This instance is already in use but somehow appeared in the pool.');
          }tmp$ret$0 = 1;
          break $l$block;
        }
        var upd_2 = tmp$ret$0;
        if (tmp0_update_0.atomicfu$compareAndSet(cur_1, upd_2)) {
          tmp$ret$1 = Unit_getInstance();
          break $l$block_0;
        }}
    }
  };
  ChunkBuffer.prototype.release_0_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_updateAndGet_0 = this._refCount;
      while (true) {
        var cur_1 = tmp0_updateAndGet_0._value_3;
        var tmp$ret$0;
        $l$block: {
          if (cur_1 <= 0)
            throw IllegalStateException_init_$Create$('Unable to release: it is already released.');
          tmp$ret$0 = cur_1 - 1 | 0;
          break $l$block;
        }
        var upd_2 = tmp$ret$0;
        if (tmp0_updateAndGet_0.atomicfu$compareAndSet(cur_1, upd_2)) {
          tmp$ret$1 = upd_2;
          break $l$block_0;
        }}
    }
    return tmp$ret$1 === 0;
  };
  ChunkBuffer.prototype.reset_sv8swh_k$ = function () {
    {
      var tmp0_require_0 = this._get_origin__0_k$() == null;
      {
      }
      if (!tmp0_require_0) {
        var m_2 = new _no_name_provided__3_12();
        m_2.doFail_4_0_k$();
      }}
    Buffer.prototype.reset_sv8swh_k$.call(this);
    this._set_attachment__qi8yb4_k$(null);
    this._nextRef._value_1 = null;
  };
  ChunkBuffer.$metadata$ = {
    simpleName: 'ChunkBuffer',
    kind: 'class',
    interfaces: []
  };
  function origin$factory() {
    return getPropertyCallableRef('origin', 1, KMutableProperty1, function (receiver) {
      return receiver._get_origin__0_k$();
    }, function (receiver_0, value) {
      return _set_origin_(receiver_0, value);
    });
  }
  function origin$factory_0() {
    return getPropertyCallableRef('origin', 1, KMutableProperty1, function (receiver) {
      return receiver._get_origin__0_k$();
    }, function (receiver_0, value) {
      return _set_origin_(receiver_0, value);
    });
  }
  function failLongToIntConversion(value, name) {
    throw IllegalArgumentException_init_$Create$('' + 'Long value ' + value + ' of ' + name + " doesn't fit into 32-bit integer");
  }
  function RequireFailureCapture() {
  }
  RequireFailureCapture.$metadata$ = {
    simpleName: 'RequireFailureCapture',
    kind: 'class',
    interfaces: []
  };
  function _EncodeResult___init__impl_(value) {
    return value;
  }
  function _EncodeResult___get_value__impl_(this_0) {
    return this_0;
  }
  function _EncodeResult___init__impl__0(characters, bytes) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _UShort___get_data__impl_(characters) & 65535;
      break $l$block;
    }
    var tmp = tmp$ret$0 << 16;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = _UShort___get_data__impl_(bytes) & 65535;
      break $l$block_0;
    }
    var tmp_0 = _EncodeResult___init__impl_(tmp | tmp$ret$1);
    return tmp_0;
  }
  function encodeUTF8(_this_, text, from, to_1, dstOffset, dstLimit) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        Companion_getInstance_3();
        var tmp0_toInt_0 = _UShort___init__impl_(-1);
        tmp$ret$0 = _UShort___get_data__impl_(tmp0_toInt_0) & 65535;
        break $l$block;
      }
      var tmp1_minOf_0 = from + tmp$ret$0 | 0;
      tmp$ret$1 = Math.min(to_1, tmp1_minOf_0);
      break $l$block_0;
    }
    var lastCharIndex = tmp$ret$1;
    var tmp$ret$2;
    $l$block_1: {
      Companion_getInstance_3();
      var tmp2_toInt_0 = _UShort___init__impl_(-1);
      tmp$ret$2 = _UShort___get_data__impl_(tmp2_toInt_0) & 65535;
      break $l$block_1;
    }
    var resultLimit = coerceAtMost(dstLimit, tmp$ret$2);
    var resultPosition = dstOffset;
    var index = from;
    $l$break: do {
      if (resultPosition >= resultLimit ? true : index >= lastCharIndex) {
        var tmp$ret$3;
        $l$block_2: {
          var tmp3_toUShort_0 = index - from | 0;
          tmp$ret$3 = _UShort___init__impl_(toShort(tmp3_toUShort_0));
          break $l$block_2;
        }
        var tmp = tmp$ret$3;
        var tmp$ret$4;
        $l$block_3: {
          var tmp4_toUShort_0 = resultPosition - dstOffset | 0;
          tmp$ret$4 = _UShort___init__impl_(toShort(tmp4_toUShort_0));
          break $l$block_3;
        }
        return _EncodeResult___init__impl__0(tmp, tmp$ret$4);
      }var tmp0 = index;
      index = tmp0 + 1 | 0;
      var character = charSequenceGet(text, tmp0).toInt_0_k$() & 65535;
      if ((character & 65408) === 0) {
        {
          var tmp1 = resultPosition;
          resultPosition = tmp1 + 1 | 0;
          var tmp5_storeAt_0 = tmp1;
          var tmp6_storeAt_0 = toByte(character);
          _this_._view.setInt8(tmp5_storeAt_0, tmp6_storeAt_0);
        }
      } else {
        break $l$break;
      }
    }
     while (true);
    var tmp2 = index;
    index = tmp2 - 1 | 0;
    Unit_getInstance();
    return encodeUTF8Stage1(_this_, text, index, lastCharIndex, from, resultPosition, resultLimit, dstOffset);
  }
  function encodeUTF8Stage1(_this_, text, index1, lastCharIndex, from, resultPosition1, resultLimit, dstOffset) {
    var index = index1;
    var resultPosition = resultPosition1;
    var stage1Limit = resultLimit - 3 | 0;
    $l$break: do {
      var freeSpace = stage1Limit - resultPosition | 0;
      if (freeSpace <= 0 ? true : index >= lastCharIndex) {
        break $l$break;
      }var tmp0 = index;
      index = tmp0 + 1 | 0;
      var character = charSequenceGet(text, tmp0);
      var tmp;
      if (isHighSurrogate(character)) {
        var tmp_0;
        if (index === lastCharIndex ? true : !isLowSurrogate(charSequenceGet(text, index))) {
          tmp_0 = 63;
        } else {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          tmp_0 = codePoint(character, charSequenceGet(text, tmp1));
        }
        tmp = tmp_0;
      } else {
        tmp = character.toInt_0_k$();
      }
      var codepoint = tmp;
      var tmp$ret$9;
      $l$block_8: {
        var tmp0_putUtf8Char_0 = resultPosition;
        var tmp_1;
        if (0 <= codepoint ? codepoint <= 127 : false) {
          {
            var tmp0_storeAt_0_1 = toByte(codepoint);
            _this_._view.setInt8(tmp0_putUtf8Char_0, tmp0_storeAt_0_1);
          }
          tmp_1 = 1;
        } else if (128 <= codepoint ? codepoint <= 2047 : false) {
          var tmp$ret$0;
          $l$block: {
            var tmp1_set_0_2 = toByte(192 | codepoint >> 6 & 31);
            tmp$ret$0 = _this_._view.setInt8(tmp0_putUtf8Char_0, tmp1_set_0_2);
            break $l$block;
          }
          var tmp$ret$1;
          $l$block_0: {
            var tmp2_set_0_3 = tmp0_putUtf8Char_0 + 1 | 0;
            var tmp3_set_0_4 = toByte(128 | codepoint & 63);
            tmp$ret$1 = _this_._view.setInt8(tmp2_set_0_3, tmp3_set_0_4);
            break $l$block_0;
          }
          tmp_1 = 2;
        } else if (2048 <= codepoint ? codepoint <= 65535 : false) {
          var tmp$ret$2;
          $l$block_1: {
            var tmp4_set_0_5 = toByte(224 | codepoint >> 12 & 15);
            tmp$ret$2 = _this_._view.setInt8(tmp0_putUtf8Char_0, tmp4_set_0_5);
            break $l$block_1;
          }
          var tmp$ret$3;
          $l$block_2: {
            var tmp5_set_0_6 = tmp0_putUtf8Char_0 + 1 | 0;
            var tmp6_set_0_7 = toByte(128 | codepoint >> 6 & 63);
            tmp$ret$3 = _this_._view.setInt8(tmp5_set_0_6, tmp6_set_0_7);
            break $l$block_2;
          }
          var tmp$ret$4;
          $l$block_3: {
            var tmp7_set_0_8 = tmp0_putUtf8Char_0 + 2 | 0;
            var tmp8_set_0_9 = toByte(128 | codepoint & 63);
            tmp$ret$4 = _this_._view.setInt8(tmp7_set_0_8, tmp8_set_0_9);
            break $l$block_3;
          }
          tmp_1 = 3;
        } else if (65536 <= codepoint ? codepoint <= 1114111 : false) {
          var tmp$ret$5;
          $l$block_4: {
            var tmp9_set_0_10 = toByte(240 | codepoint >> 18 & 7);
            tmp$ret$5 = _this_._view.setInt8(tmp0_putUtf8Char_0, tmp9_set_0_10);
            break $l$block_4;
          }
          var tmp$ret$6;
          $l$block_5: {
            var tmp10_set_0_11 = tmp0_putUtf8Char_0 + 1 | 0;
            var tmp11_set_0_12 = toByte(128 | codepoint >> 12 & 63);
            tmp$ret$6 = _this_._view.setInt8(tmp10_set_0_11, tmp11_set_0_12);
            break $l$block_5;
          }
          var tmp$ret$7;
          $l$block_6: {
            var tmp12_set_0_13 = tmp0_putUtf8Char_0 + 2 | 0;
            var tmp13_set_0_14 = toByte(128 | codepoint >> 6 & 63);
            tmp$ret$7 = _this_._view.setInt8(tmp12_set_0_13, tmp13_set_0_14);
            break $l$block_6;
          }
          var tmp$ret$8;
          $l$block_7: {
            var tmp14_set_0_15 = tmp0_putUtf8Char_0 + 3 | 0;
            var tmp15_set_0_16 = toByte(128 | codepoint & 63);
            tmp$ret$8 = _this_._view.setInt8(tmp14_set_0_15, tmp15_set_0_16);
            break $l$block_7;
          }
          tmp_1 = 4;
        } else {
          malformedCodePoint(codepoint);
        }
        tmp$ret$9 = tmp_1;
        break $l$block_8;
      }
      var size_0 = tmp$ret$9;
      resultPosition = resultPosition + size_0 | 0;
    }
     while (true);
    if (resultPosition === stage1Limit) {
      return encodeUTF8Stage2(_this_, text, index, lastCharIndex, from, resultPosition, resultLimit, dstOffset);
    }var tmp$ret$10;
    $l$block_9: {
      var tmp1_toUShort_0 = index - from | 0;
      tmp$ret$10 = _UShort___init__impl_(toShort(tmp1_toUShort_0));
      break $l$block_9;
    }
    var tmp_2 = tmp$ret$10;
    var tmp$ret$11;
    $l$block_10: {
      var tmp2_toUShort_0 = resultPosition - dstOffset | 0;
      tmp$ret$11 = _UShort___init__impl_(toShort(tmp2_toUShort_0));
      break $l$block_10;
    }
    return _EncodeResult___init__impl__0(tmp_2, tmp$ret$11);
  }
  function malformedCodePoint(value) {
    throw IllegalArgumentException_init_$Create$('' + 'Malformed code-point ' + value + ' found');
  }
  function codePoint(high, low) {
    var highValue = high.toInt_0_k$() - 55232 | 0;
    var lowValue = low.toInt_0_k$() - 56320 | 0;
    return highValue << 10 | lowValue;
  }
  function encodeUTF8Stage2(_this_, text, index1, lastCharIndex, from, resultPosition1, resultLimit, dstOffset) {
    var index = index1;
    var resultPosition = resultPosition1;
    $l$break_0: do {
      var freeSpace = resultLimit - resultPosition | 0;
      if (freeSpace <= 0 ? true : index >= lastCharIndex) {
        break $l$break_0;
      }var tmp0 = index;
      index = tmp0 + 1 | 0;
      var character = charSequenceGet(text, tmp0);
      var tmp;
      if (!isHighSurrogate(character)) {
        tmp = character.toInt_0_k$();
      } else {
        var tmp_0;
        if (index === lastCharIndex ? true : !isLowSurrogate(charSequenceGet(text, index))) {
          tmp_0 = 63;
        } else {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          tmp_0 = codePoint(character, charSequenceGet(text, tmp1));
        }
        tmp = tmp_0;
      }
      var codepoint = tmp;
      var tmp$ret$0;
      $l$block: {
        var tmp_1;
        if (1 <= codepoint ? codepoint <= 127 : false) {
          tmp_1 = 1;
        } else if (128 <= codepoint ? codepoint <= 2047 : false) {
          tmp_1 = 2;
        } else if (2048 <= codepoint ? codepoint <= 65535 : false) {
          tmp_1 = 3;
        } else if (65536 <= codepoint ? codepoint <= 1114111 : false) {
          tmp_1 = 4;
        } else {
          malformedCodePoint(codepoint);
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      }
      if (tmp$ret$0 > freeSpace) {
        var tmp2 = index;
        index = tmp2 - 1 | 0;
        Unit_getInstance();
        break $l$break_0;
      } else {
      }
      var tmp$ret$10;
      $l$block_9: {
        var tmp0_putUtf8Char_0 = resultPosition;
        var tmp_2;
        if (0 <= codepoint ? codepoint <= 127 : false) {
          {
            var tmp0_storeAt_0_1 = toByte(codepoint);
            _this_._view.setInt8(tmp0_putUtf8Char_0, tmp0_storeAt_0_1);
          }
          tmp_2 = 1;
        } else if (128 <= codepoint ? codepoint <= 2047 : false) {
          var tmp$ret$1;
          $l$block_0: {
            var tmp1_set_0_2 = toByte(192 | codepoint >> 6 & 31);
            tmp$ret$1 = _this_._view.setInt8(tmp0_putUtf8Char_0, tmp1_set_0_2);
            break $l$block_0;
          }
          var tmp$ret$2;
          $l$block_1: {
            var tmp2_set_0_3 = tmp0_putUtf8Char_0 + 1 | 0;
            var tmp3_set_0_4 = toByte(128 | codepoint & 63);
            tmp$ret$2 = _this_._view.setInt8(tmp2_set_0_3, tmp3_set_0_4);
            break $l$block_1;
          }
          tmp_2 = 2;
        } else if (2048 <= codepoint ? codepoint <= 65535 : false) {
          var tmp$ret$3;
          $l$block_2: {
            var tmp4_set_0_5 = toByte(224 | codepoint >> 12 & 15);
            tmp$ret$3 = _this_._view.setInt8(tmp0_putUtf8Char_0, tmp4_set_0_5);
            break $l$block_2;
          }
          var tmp$ret$4;
          $l$block_3: {
            var tmp5_set_0_6 = tmp0_putUtf8Char_0 + 1 | 0;
            var tmp6_set_0_7 = toByte(128 | codepoint >> 6 & 63);
            tmp$ret$4 = _this_._view.setInt8(tmp5_set_0_6, tmp6_set_0_7);
            break $l$block_3;
          }
          var tmp$ret$5;
          $l$block_4: {
            var tmp7_set_0_8 = tmp0_putUtf8Char_0 + 2 | 0;
            var tmp8_set_0_9 = toByte(128 | codepoint & 63);
            tmp$ret$5 = _this_._view.setInt8(tmp7_set_0_8, tmp8_set_0_9);
            break $l$block_4;
          }
          tmp_2 = 3;
        } else if (65536 <= codepoint ? codepoint <= 1114111 : false) {
          var tmp$ret$6;
          $l$block_5: {
            var tmp9_set_0_10 = toByte(240 | codepoint >> 18 & 7);
            tmp$ret$6 = _this_._view.setInt8(tmp0_putUtf8Char_0, tmp9_set_0_10);
            break $l$block_5;
          }
          var tmp$ret$7;
          $l$block_6: {
            var tmp10_set_0_11 = tmp0_putUtf8Char_0 + 1 | 0;
            var tmp11_set_0_12 = toByte(128 | codepoint >> 12 & 63);
            tmp$ret$7 = _this_._view.setInt8(tmp10_set_0_11, tmp11_set_0_12);
            break $l$block_6;
          }
          var tmp$ret$8;
          $l$block_7: {
            var tmp12_set_0_13 = tmp0_putUtf8Char_0 + 2 | 0;
            var tmp13_set_0_14 = toByte(128 | codepoint >> 6 & 63);
            tmp$ret$8 = _this_._view.setInt8(tmp12_set_0_13, tmp13_set_0_14);
            break $l$block_7;
          }
          var tmp$ret$9;
          $l$block_8: {
            var tmp14_set_0_15 = tmp0_putUtf8Char_0 + 3 | 0;
            var tmp15_set_0_16 = toByte(128 | codepoint & 63);
            tmp$ret$9 = _this_._view.setInt8(tmp14_set_0_15, tmp15_set_0_16);
            break $l$block_8;
          }
          tmp_2 = 4;
        } else {
          malformedCodePoint(codepoint);
        }
        tmp$ret$10 = tmp_2;
        break $l$block_9;
      }
      var size_0 = tmp$ret$10;
      resultPosition = resultPosition + size_0 | 0;
    }
     while (true);
    var tmp$ret$11;
    $l$block_10: {
      var tmp1_toUShort_0 = index - from | 0;
      tmp$ret$11 = _UShort___init__impl_(toShort(tmp1_toUShort_0));
      break $l$block_10;
    }
    var tmp_3 = tmp$ret$11;
    var tmp$ret$12;
    $l$block_11: {
      var tmp2_toUShort_0 = resultPosition - dstOffset | 0;
      tmp$ret$12 = _UShort___init__impl_(toShort(tmp2_toUShort_0));
      break $l$block_11;
    }
    return _EncodeResult___init__impl__0(tmp_3, tmp$ret$12);
  }
  var EmptyByteArray;
  function prepareWriteHead(_this_, capacity, current) {
    if (_this_ instanceof AbstractOutput) {
      if (!(current == null)) {
        _this_.afterHeadWrite_sv8swh_k$();
      }return _this_.prepareWriteHead_ha5a7z_k$(capacity);
    } else {
    }
    return prepareWriteHeadFallback(_this_, current);
  }
  function afterHeadWrite(_this_, current) {
    if (_this_ instanceof AbstractOutput) {
      return _this_.afterHeadWrite_sv8swh_k$();
    } else {
    }
    afterWriteHeadFallback(_this_, current);
  }
  function prepareReadFirstHead(_this_, minSize) {
    if (_this_ instanceof AbstractInput) {
      return _this_.prepareReadHead_ha5a7z_k$(minSize);
    } else {
    }
    if (_this_ instanceof ChunkBuffer) {
      var tmp;
      var tmp$ret$0;
      $l$block: {
        var tmp0_canRead_0 = _this_;
        tmp$ret$0 = tmp0_canRead_0._get_writePosition__0_k$() > tmp0_canRead_0._get_readPosition__0_k$();
        break $l$block;
      }
      if (tmp$ret$0) {
        tmp = _this_;
      } else {
        {
          tmp = null;
        }
      }
      return tmp;
    } else {
    }
    return prepareReadHeadFallback(_this_, minSize);
  }
  function completeReadHead(_this_, current) {
    if (current === _this_) {
      return Unit_getInstance();
    }if (_this_ instanceof AbstractInput) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = current._get_writePosition__0_k$() > current._get_readPosition__0_k$();
        break $l$block;
      }
      if (!tmp$ret$0) {
        _this_.ensureNext_dq8ghz_k$(current);
        Unit_getInstance();
      } else {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = current._capacity - current._get_limit__0_k$() | 0;
          break $l$block_0;
        }
        var tmp = tmp$ret$1;
        Companion_getInstance_13();
        if (tmp < 8) {
          _this_.fixGapAfterRead_kpwap4_k$(current);
        } else {
          {
            _this_._set_headPosition__majfzk_k$(current._get_readPosition__0_k$());
          }
        }
      }
      return Unit_getInstance();
    } else {
    }
    completeReadHeadFallback(_this_, current);
  }
  function prepareWriteHeadFallback(_this_, current) {
    if (!(current == null)) {
      writeFully$default(_this_, current, 0, 2, null);
      current.resetForWrite_sv8swh_k$();
      return current;
    }return Companion_getInstance_16()._Pool.borrow_0_k$();
  }
  function afterWriteHeadFallback(_this_, current) {
    writeFully$default(_this_, current, 0, 2, null);
    current.release_fz49v2_k$(Companion_getInstance_16()._Pool);
  }
  function prepareReadHeadFallback(_this_, minSize) {
    if (_this_._get_endOfInput__0_k$())
      return null;
    var buffer = Companion_getInstance_16()._Pool.borrow_0_k$();
    var tmp = buffer._get_memory__0_k$();
    var tmp_0 = toLong(buffer._get_writePosition__0_k$());
    var tmp_1 = new Long(0, 0);
    var tmp_2 = toLong(minSize);
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = buffer._get_limit__0_k$() - buffer._get_writePosition__0_k$() | 0;
      break $l$block;
    }
    var copied = _this_.peekTo_aaoha9_k$(tmp, tmp_0, tmp_1, tmp_2, toLong(tmp$ret$0)).toInt_0_k$();
    buffer.commitWritten_majfzk_k$(copied);
    if (copied < minSize) {
      prematureEndOfStream(minSize);
    }return buffer;
  }
  function completeReadHeadFallback(_this_, current) {
    var tmp = current._get_capacity__0_k$();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = current._get_limit__0_k$() - current._get_writePosition__0_k$() | 0;
      break $l$block;
    }
    var tmp_0 = tmp - tmp$ret$0 | 0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = current._get_writePosition__0_k$() - current._get_readPosition__0_k$() | 0;
      break $l$block_0;
    }
    var discardAmount = tmp_0 - tmp$ret$1 | 0;
    discardExact(_this_, discardAmount);
    current.release_fz49v2_k$(Companion_getInstance_16()._Pool);
  }
  function prepareReadNextHead(_this_, current) {
    if (current === _this_) {
      var tmp;
      var tmp$ret$0;
      $l$block: {
        var tmp0_canRead_0 = _this_;
        tmp$ret$0 = tmp0_canRead_0._get_writePosition__0_k$() > tmp0_canRead_0._get_readPosition__0_k$();
        break $l$block;
      }
      if (tmp$ret$0) {
        tmp = _this_;
      } else {
        {
          tmp = null;
        }
      }
      return tmp;
    }if (_this_ instanceof AbstractInput) {
      return _this_.ensureNextHead_dq8ghz_k$(current);
    } else {
    }
    return prepareNextReadHeadFallback(_this_, current);
  }
  function prepareNextReadHeadFallback(_this_, current) {
    var tmp = current._get_capacity__0_k$();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = current._get_limit__0_k$() - current._get_writePosition__0_k$() | 0;
      break $l$block;
    }
    var tmp_0 = tmp - tmp$ret$0 | 0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = current._get_writePosition__0_k$() - current._get_readPosition__0_k$() | 0;
      break $l$block_0;
    }
    var discardAmount = tmp_0 - tmp$ret$1 | 0;
    discardExact(_this_, discardAmount);
    current.resetForWrite_sv8swh_k$();
    var tmp_1;
    if (_this_._get_endOfInput__0_k$()) {
      tmp_1 = true;
    } else {
      tmp_1 = peekTo$default(_this_, current, 0, 0, 0, 14, null) <= 0;
    }
    if (tmp_1) {
      current.release_fz49v2_k$(Companion_getInstance_16()._Pool);
      return null;
    } else {
    }
    return current;
  }
  function checkPeekTo(destination, offset, min, max) {
    {
      var tmp0_require_0 = offset >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = '' + "offset shouldn't be negative: " + offset + '.';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_1(message_1));
      }}
    {
      var tmp1_require_0 = min >= 0;
      {
      }
      if (!tmp1_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = '' + "min shouldn't be negative: " + min + '.';
          break $l$block_0;
        }
        var message_1_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString_1(message_1_0));
      }}
    {
      var tmp2_require_0 = max >= min;
      {
      }
      if (!tmp2_require_0) {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = '' + "max should't be less than min: max = " + max + ', min = ' + min + '.';
          break $l$block_1;
        }
        var message_1_1 = tmp$ret$2;
        throw IllegalArgumentException_init_$Create$(toString_1(message_1_1));
      }}
    {
      var tmp$ret$3;
      $l$block_2: {
        tmp$ret$3 = destination._get_limit__0_k$() - destination._get_writePosition__0_k$() | 0;
        break $l$block_2;
      }
      var tmp3_require_0 = min <= tmp$ret$3;
      {
      }
      if (!tmp3_require_0) {
        var tmp$ret$5;
        $l$block_4: {
          var tmp$ret$4;
          $l$block_3: {
            tmp$ret$4 = destination._get_limit__0_k$() - destination._get_writePosition__0_k$() | 0;
            break $l$block_3;
          }
          tmp$ret$5 = 'Not enough free space in the destination buffer ' + ('' + 'to write the specified minimum number of bytes: min = ' + min + ', free = ' + tmp$ret$4 + '.');
          break $l$block_4;
        }
        var message_1_2 = tmp$ret$5;
        throw IllegalArgumentException_init_$Create$(toString_1(message_1_2));
      }}
  }
  var ByteArrayPool;
  function _no_name_provided__48() {
    DefaultPool.call(this, 128);
  }
  _no_name_provided__48.prototype.produceInstance_0_k$ = function () {
    return new Int8Array(4096);
  };
  _no_name_provided__48.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function ByteArrayPool$init$() {
    return new _no_name_provided__48();
  }
  function ObjectPool() {
  }
  ObjectPool.$metadata$ = {
    simpleName: 'ObjectPool',
    kind: 'interface',
    interfaces: [Closeable]
  };
  function NoPoolImpl() {
  }
  NoPoolImpl.prototype.recycle_iav7o_k$ = function (instance) {
  };
  NoPoolImpl.$metadata$ = {
    simpleName: 'NoPoolImpl',
    kind: 'class',
    interfaces: [ObjectPool]
  };
  function DefaultAllocator() {
    DefaultAllocator_instance = this;
  }
  DefaultAllocator.prototype.alloc_ha5a7z_k$ = function (size_0) {
    return new Memory(new DataView(new ArrayBuffer(size_0)));
  };
  DefaultAllocator.prototype.free_hqwtqe_k$ = function (instance) {
  };
  DefaultAllocator.$metadata$ = {
    simpleName: 'DefaultAllocator',
    kind: 'object',
    interfaces: [Allocator]
  };
  var DefaultAllocator_instance;
  function DefaultAllocator_getInstance() {
    if (DefaultAllocator_instance == null)
      new DefaultAllocator();
    return DefaultAllocator_instance;
  }
  function Companion_18() {
    Companion_instance_17 = this;
    this._Empty_0 = new Memory(new DataView(new ArrayBuffer(0)));
  }
  Companion_18.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    if (Companion_instance_17 == null)
      new Companion_18();
    return Companion_instance_17;
  }
  function Memory(view) {
    Companion_getInstance_17();
    this._view = view;
  }
  Memory.prototype.slice_27zxwg_k$ = function (offset, length) {
    {
      var tmp0_require_0 = offset >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = '' + "offset shouldn't be negative: " + offset;
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_1(message_1));
      }}
    {
      var tmp1_require_0 = length >= 0;
      {
      }
      if (!tmp1_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = '' + "length shouldn't be negative: " + length;
          break $l$block_0;
        }
        var message_1_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString_1(message_1_0));
      }}
    var tmp = toLong(offset + length | 0);
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = toLong(this._view.byteLength);
      break $l$block_1;
    }
    if (tmp.compareTo_wiekkq_k$(tmp$ret$2) > 0) {
      var tmp$ret$3;
      $l$block_2: {
        tmp$ret$3 = toLong(this._view.byteLength);
        break $l$block_2;
      }
      throw IndexOutOfBoundsException_init_$Create$('' + 'offset + length > size: ' + offset + ' + ' + length + ' > ' + tmp$ret$3);
    } else {
    }
    return new Memory(new DataView(this._view.buffer, this._view.byteOffset + offset | 0, length));
  };
  Memory.prototype.copyTo_gl4spl_k$ = function (destination, offset, length, destinationOffset) {
    var src = new Int8Array(this._view.buffer, this._view.byteOffset + offset | 0, length);
    var dst = new Int8Array(destination._view.buffer, destination._view.byteOffset + destinationOffset | 0, length);
    dst.set(src);
  };
  Memory.prototype.copyTo_650o3g_k$ = function (destination, offset, length, destinationOffset) {
    var tmp$ret$0;
    $l$block: {
      if (offset.compareTo_wiekkq_k$(toLong(IntCompanionObject_getInstance()._MAX_VALUE_0)) >= 0) {
        failLongToIntConversion(offset, 'offset');
      }tmp$ret$0 = offset.toInt_0_k$();
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      if (length.compareTo_wiekkq_k$(toLong(IntCompanionObject_getInstance()._MAX_VALUE_0)) >= 0) {
        failLongToIntConversion(length, 'length');
      }tmp$ret$1 = length.toInt_0_k$();
      break $l$block_0;
    }
    var tmp_0 = tmp$ret$1;
    var tmp$ret$2;
    $l$block_1: {
      if (destinationOffset.compareTo_wiekkq_k$(toLong(IntCompanionObject_getInstance()._MAX_VALUE_0)) >= 0) {
        failLongToIntConversion(destinationOffset, 'destinationOffset');
      }tmp$ret$2 = destinationOffset.toInt_0_k$();
      break $l$block_1;
    }
    this.copyTo_gl4spl_k$(destination, tmp, tmp_0, tmp$ret$2);
  };
  Memory.$metadata$ = {
    simpleName: 'Memory',
    kind: 'class',
    interfaces: []
  };
  function copyTo(_this_, destination, offset, length, destinationOffset) {
    copyTo_0(_this_.buffer, destination, offset + _this_.byteOffset | 0, length, destinationOffset);
  }
  function copyTo_0(_this_, destination, offset, length, destinationOffset) {
    var from = new Int8Array(_this_, offset, length);
    var to_1 = new Int8Array(destination._view.buffer, destination._view.byteOffset + destinationOffset | 0, length);
    to_1.set(from, 0);
  }
  function copyTo_1(_this_, destination, offset, length, destinationOffset) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = destination;
      break $l$block;
    }
    var to_1 = tmp$ret$0;
    var from = new Int8Array(_this_._view.buffer, _this_._view.byteOffset + offset | 0, length);
    to_1.set(from, destinationOffset);
  }
  var isLittleEndianPlatform;
  function Companion_19() {
    Companion_instance_18 = this;
  }
  Companion_19.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_18;
  function Companion_getInstance_18() {
    if (Companion_instance_18 == null)
      new Companion_19();
    return Companion_instance_18;
  }
  function Charset(_name) {
    Companion_getInstance_18();
    this.__name = _name;
  }
  Charset.$metadata$ = {
    simpleName: 'Charset',
    kind: 'class',
    interfaces: []
  };
  function Charsets() {
    Charsets_instance = this;
    this._UTF_8 = new CharsetImpl('UTF-8');
    this._ISO_8859_1 = new CharsetImpl('ISO-8859-1');
  }
  Charsets.$metadata$ = {
    simpleName: 'Charsets',
    kind: 'object',
    interfaces: []
  };
  var Charsets_instance;
  function Charsets_getInstance() {
    if (Charsets_instance == null)
      new Charsets();
    return Charsets_instance;
  }
  function CharsetEncoder(_charset) {
    this.__charset = _charset;
  }
  CharsetEncoder.$metadata$ = {
    simpleName: 'CharsetEncoder',
    kind: 'class',
    interfaces: []
  };
  function CharsetImpl(name) {
    Charset.call(this, name);
    this._name_1 = name;
  }
  CharsetImpl.prototype.newEncoder_0_k$ = function () {
    return new CharsetEncoderImpl(this);
  };
  CharsetImpl.prototype.toString = function () {
    return '' + 'CharsetImpl(name=' + this._name_1 + ')';
  };
  CharsetImpl.prototype.hashCode = function () {
    return getStringHashCode(this._name_1);
  };
  CharsetImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetImpl))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CharsetImpl ? other : THROW_CCE();
    if (!(this._name_1 === tmp0_other_with_cast._name_1))
      return false;
    return true;
  };
  CharsetImpl.$metadata$ = {
    simpleName: 'CharsetImpl',
    kind: 'class',
    interfaces: []
  };
  function CharsetEncoderImpl(charset) {
    CharsetEncoder.call(this, charset);
    this._charset = charset;
  }
  CharsetEncoderImpl.prototype.toString = function () {
    return '' + 'CharsetEncoderImpl(charset=' + this._charset + ')';
  };
  CharsetEncoderImpl.prototype.hashCode = function () {
    return hashCode(this._charset);
  };
  CharsetEncoderImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CharsetEncoderImpl ? other : THROW_CCE();
    if (!equals_1(this._charset, tmp0_other_with_cast._charset))
      return false;
    return true;
  };
  CharsetEncoderImpl.$metadata$ = {
    simpleName: 'CharsetEncoderImpl',
    kind: 'class',
    interfaces: []
  };
  function encodeImpl(_this_, input, fromIndex, toIndex, dst) {
    {
      var tmp0_require_0 = fromIndex <= toIndex;
      {
      }
      {
        {
        }
        if (!tmp0_require_0) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'Failed requirement.';
            break $l$block;
          }
          var message_2_1 = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString_1(message_2_1));
        }}
    }
    if (equals_1(_get_charset_(_this_), Charsets_getInstance()._ISO_8859_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }{
      var tmp1_require_0 = _get_charset_(_this_) === Charsets_getInstance()._UTF_8;
      {
      }
      if (!tmp1_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 'Only UTF-8 encoding is supported in JS';
          break $l$block_0;
        }
        var message_1 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString_1(message_1));
      }}
    var encoder = new TextEncoder();
    var start = fromIndex;
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = dst._get_limit__0_k$() - dst._get_writePosition__0_k$() | 0;
      break $l$block_1;
    }
    var dstRemaining = tmp$ret$2;
    $l$break: while (start < toIndex ? dstRemaining > 0 : false) {
      var tmp$ret$3;
      $l$block_2: {
        var tmp2_minOf_0 = toIndex - start | 0;
        var tmp3_minOf_0 = dstRemaining / 6 | 0;
        tmp$ret$3 = Math.min(tmp2_minOf_0, tmp3_minOf_0);
        break $l$block_2;
      }
      var numChars = coerceAtLeast(tmp$ret$3, 1);
      var dropLastChar = isHighSurrogate(charSequenceGet(input, (start + numChars | 0) - 1 | 0));
      var endIndexExclusive = (dropLastChar ? numChars === 1 : false) ? start + 2 | 0 : dropLastChar ? (start + numChars | 0) - 1 | 0 : start + numChars | 0;
      var tmp$ret$4;
      $l$block_3: {
        var tmp4_substring_0 = start;
        tmp$ret$4 = toString_1(charSequenceSubSequence(input, tmp4_substring_0, endIndexExclusive));
        break $l$block_3;
      }
      var array1 = encoder.encode(tmp$ret$4);
      if (array1.length > dstRemaining)
        break $l$break;
      writeFully$default_0(dst, array1, 0, 0, 6, null);
      start = endIndexExclusive;
      dstRemaining = dstRemaining - array1.length | 0;
    }
    return start - fromIndex | 0;
  }
  function encodeComplete(_this_, dst) {
    return true;
  }
  function MalformedInputException(message) {
    extendThrowable(this, message, void 1);
    captureStack(this, MalformedInputException);
  }
  MalformedInputException.$metadata$ = {
    simpleName: 'MalformedInputException',
    kind: 'class',
    interfaces: []
  };
  function _get_charset_(_this_) {
    return _this_.__charset;
  }
  function encodeToByteArray(_this_, input, fromIndex, toIndex) {
    return encodeToByteArrayImpl1(_this_, input, fromIndex, toIndex);
  }
  function encodeISO88591(input, fromIndex, toIndex, dst) {
    if (fromIndex >= toIndex)
      return 0;
    var tmp$ret$4;
    $l$block_3: {
      {
      }
      var tmp$ret$3;
      $l$block_2: {
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          var tmp0__anonymous__2_2 = dst._memory;
          var tmp1__anonymous__2_2 = dst._get_writePosition__0_k$();
          var tmp2__anonymous__2_2 = dst._get_limit__0_k$();
          var tmp$ret$1;
          $l$block_0: {
            var tmp3__anonymous__3 = tmp0__anonymous__2_2.slice_27zxwg_k$(tmp1__anonymous__2_2, tmp2__anonymous__2_2 - tmp1__anonymous__2_2 | 0)._view;
            var i8_4 = new Int8Array(tmp3__anonymous__3.buffer, tmp3__anonymous__3.byteOffset, tmp3__anonymous__3.byteLength);
            var writeIndex_5 = 0;
            var inductionVariable = fromIndex;
            if (inductionVariable < toIndex)
              do {
                var index_7 = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var character_8 = charSequenceGet(input, index_7).toInt_0_k$();
                if (character_8 > 255) {
                  failedToMapError(character_8);
                }{
                  var tmp1_10 = writeIndex_5;
                  writeIndex_5 = tmp1_10 + 1 | 0;
                  var tmp0_set_0_9 = tmp1_10;
                  var tmp1_set_0_11 = toByte(character_8);
                  var tmp$ret$0;
                  $l$block: {
                    tmp$ret$0 = i8_4;
                    break $l$block;
                  }
                  tmp$ret$0[tmp0_set_0_9] = tmp1_set_0_11;
                }
              }
               while (inductionVariable < toIndex);
            tmp$ret$1 = writeIndex_5;
            break $l$block_0;
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block_1;
        }
        var rc_1 = tmp$ret$2;
        dst.commitWritten_majfzk_k$(rc_1);
        tmp$ret$3 = rc_1;
        break $l$block_2;
      }
      tmp$ret$4 = tmp$ret$3;
      break $l$block_3;
    }
    Unit_getInstance();
    return toIndex - fromIndex | 0;
  }
  function failedToMapError(ch) {
    throw new MalformedInputException('' + 'The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
  }
  function _no_name_provided__49($value) {
    this._$value = $value;
    this._value_6 = this._$value;
  }
  _no_name_provided__49.prototype.getValue_1rt9ub_k$ = function (thisRef, property) {
    return this._value_6;
  };
  _no_name_provided__49.prototype.getValue_d8h4ck_k$ = function (thisRef, property) {
    return this.getValue_1rt9ub_k$(isObject(thisRef) ? thisRef : THROW_CCE(), property);
  };
  _no_name_provided__49.prototype.setValue_8gqndb_k$ = function (thisRef, property, value) {
    this._value_6 = value;
  };
  _no_name_provided__49.prototype.setValue_gbl9e2_k$ = function (thisRef, property, value) {
    var tmp = isObject(thisRef) ? thisRef : THROW_CCE();
    return this.setValue_8gqndb_k$(tmp, property, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  _no_name_provided__49.$metadata$ = {
    kind: 'class',
    interfaces: [ReadWriteProperty]
  };
  function AbstractInputSharedState(head, remaining) {
    this._head_1 = head;
    this._headMemory = this._head_1._get_memory__0_k$();
    this._headPosition = this._head_1._get_readPosition__0_k$();
    this._headEndExclusive = this._head_1._get_writePosition__0_k$();
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      var tmp0_minus_0 = this._headEndExclusive - this._headPosition | 0;
      tmp$ret$0 = remaining.minus_wiekkq_k$(toLong(tmp0_minus_0));
      break $l$block;
    }
    tmp._tailRemaining = tmp$ret$0;
  }
  AbstractInputSharedState.$metadata$ = {
    simpleName: 'AbstractInputSharedState',
    kind: 'class',
    interfaces: []
  };
  function AbstractOutputSharedState() {
    this._head_2 = null;
    this._tail_0 = null;
    this._tailMemory = Companion_getInstance_17()._Empty_0;
    this._tailPosition = 0;
    this._tailEndExclusive = 0;
    this._tailInitialPosition = 0;
    this._chainedSize = 0;
  }
  AbstractOutputSharedState.$metadata$ = {
    simpleName: 'AbstractOutputSharedState',
    kind: 'class',
    interfaces: []
  };
  function BufferSharedState(limit) {
    this._limit_0 = limit;
    this._readPosition = 0;
    this._writePosition = 0;
    this._startGap = 0;
    this._attachment = null;
  }
  BufferSharedState.$metadata$ = {
    simpleName: 'BufferSharedState',
    kind: 'class',
    interfaces: []
  };
  var ByteOrder_BIG_ENDIAN_instance;
  var ByteOrder_LITTLE_ENDIAN_instance;
  function Companion_20() {
    Companion_instance_19 = this;
    var buffer = new ArrayBuffer(4);
    var arr = new Int32Array(buffer);
    var view = new DataView(buffer);
    {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = arr;
        break $l$block;
      }
      tmp$ret$0[0] = 287454020;
    }
    this._native = view.getInt32(0, true) === 287454020 ? ByteOrder_LITTLE_ENDIAN_getInstance() : ByteOrder_BIG_ENDIAN_getInstance();
  }
  Companion_20.prototype.nativeOrder_0_k$ = function () {
    return this._native;
  };
  Companion_20.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_19;
  function Companion_getInstance_19() {
    if (Companion_instance_19 == null)
      new Companion_20();
    return Companion_instance_19;
  }
  var ByteOrder_entriesInitialized;
  function ByteOrder_initEntries() {
    if (ByteOrder_entriesInitialized)
      return Unit_getInstance();
    ByteOrder_entriesInitialized = true;
    ByteOrder_BIG_ENDIAN_instance = new ByteOrder('BIG_ENDIAN', 0);
    ByteOrder_LITTLE_ENDIAN_instance = new ByteOrder('LITTLE_ENDIAN', 1);
    Companion_getInstance_19();
  }
  function ByteOrder(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  ByteOrder.$metadata$ = {
    simpleName: 'ByteOrder',
    kind: 'class',
    interfaces: []
  };
  function ByteOrder_BIG_ENDIAN_getInstance() {
    ByteOrder_initEntries();
    return ByteOrder_BIG_ENDIAN_instance;
  }
  function ByteOrder_LITTLE_ENDIAN_getInstance() {
    ByteOrder_initEntries();
    return ByteOrder_LITTLE_ENDIAN_instance;
  }
  function Closeable() {
  }
  Closeable.$metadata$ = {
    simpleName: 'Closeable',
    kind: 'interface',
    interfaces: []
  };
  function Input() {
  }
  Input.$metadata$ = {
    simpleName: 'Input',
    kind: 'interface',
    interfaces: [Closeable]
  };
  function _no_name_provided__2_0($instance) {
    this._$instance = $instance;
    RequireFailureCapture.call(this);
  }
  _no_name_provided__2_0.prototype.doFail_3_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = '' + 'unable to recycle buffer: buffer view is in use (refCount = ' + this._$instance._get_referenceCount__0_k$() + ')';
      break $l$block;
    }
    throw IllegalArgumentException_init_$Create$(tmp$ret$0);
  };
  _no_name_provided__2_0.$metadata$ = {
    simpleName: '<no name provided>_2',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__2_1() {
    RequireFailureCapture.call(this);
  }
  _no_name_provided__2_1.prototype.doFail_3_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = "Unable to recycle buffer view: view copy shouldn't be recycled";
      break $l$block;
    }
    throw IllegalArgumentException_init_$Create$(tmp$ret$0);
  };
  _no_name_provided__2_1.$metadata$ = {
    simpleName: '<no name provided>_2',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__50() {
    DefaultPool.call(this, 100);
  }
  _no_name_provided__50.prototype.produceInstance_0_k$ = function () {
    return new IoBuffer(DefaultAllocator_getInstance().alloc_ha5a7z_k$(4096), null, this);
  };
  _no_name_provided__50.prototype.clearInstance_qd709p_k$ = function (instance) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_apply_0 = DefaultPool.prototype.clearInstance_2c5_k$.call(this, instance);
      {
      }
      {
        tmp0_apply_0.unpark_sv8swh_k$();
        tmp0_apply_0.reset_sv8swh_k$();
      }
      tmp$ret$0 = tmp0_apply_0;
      break $l$block;
    }
    return tmp$ret$0;
  };
  _no_name_provided__50.prototype.clearInstance_2c5_k$ = function (instance) {
    return this.clearInstance_qd709p_k$(instance instanceof IoBuffer ? instance : THROW_CCE());
  };
  _no_name_provided__50.prototype.validateInstance_wuvbse_k$ = function (instance) {
    DefaultPool.prototype.validateInstance_iav7o_k$.call(this, instance);
    {
      var tmp0_require_0 = instance._get_referenceCount__0_k$() === 0;
      {
      }
      if (!tmp0_require_0) {
        var m_1 = new _no_name_provided__2_0(instance);
        m_1.doFail_3_0_k$();
      }}
    {
      var tmp1_require_0 = instance._get_origin__0_k$() == null;
      {
      }
      if (!tmp1_require_0) {
        var m_1_0 = new _no_name_provided__2_1();
        m_1_0.doFail_3_0_k$();
      }}
  };
  _no_name_provided__50.prototype.validateInstance_iav7o_k$ = function (instance) {
    return this.validateInstance_wuvbse_k$(instance instanceof IoBuffer ? instance : THROW_CCE());
  };
  _no_name_provided__50.prototype.disposeInstance_wuvbse_k$ = function (instance) {
    DefaultAllocator_getInstance().free_hqwtqe_k$(instance._get_memory__0_k$());
    instance.unlink_sv8swh_k$();
  };
  _no_name_provided__50.prototype.disposeInstance_iav7o_k$ = function (instance) {
    return this.disposeInstance_wuvbse_k$(instance instanceof IoBuffer ? instance : THROW_CCE());
  };
  _no_name_provided__50.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__51() {
    NoPoolImpl.call(this);
  }
  _no_name_provided__51.prototype.borrow_0_k$ = function () {
    return new IoBuffer(DefaultAllocator_getInstance().alloc_ha5a7z_k$(4096), null, this);
  };
  _no_name_provided__51.prototype.recycle_wuvbse_k$ = function (instance) {
    DefaultAllocator_getInstance().free_hqwtqe_k$(instance._get_memory__0_k$());
  };
  _no_name_provided__51.prototype.recycle_iav7o_k$ = function (instance) {
    return this.recycle_wuvbse_k$(instance instanceof IoBuffer ? instance : THROW_CCE());
  };
  _no_name_provided__51.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function Companion_21() {
    Companion_instance_20 = this;
    this._EmptyBuffer = new ArrayBuffer(0);
    this._EmptyDataView = new DataView(this._EmptyBuffer);
    this._Empty_1 = new IoBuffer(Companion_getInstance_17()._Empty_0, null, EmptyBufferPoolImpl_getInstance());
    var tmp = this;
    tmp._Pool_0 = new _no_name_provided__50();
    var tmp_0 = this;
    tmp_0._NoPool_0 = new _no_name_provided__51();
    this._EmptyPool_0 = EmptyBufferPoolImpl_getInstance();
  }
  Companion_21.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_20;
  function Companion_getInstance_20() {
    if (Companion_instance_20 == null)
      new Companion_21();
    return Companion_instance_20;
  }
  function IoBuffer(memory, origin, parentPool) {
    Companion_getInstance_20();
    ChunkBuffer.call(this, memory, origin, (!(parentPool == null) ? isInterface(parentPool, ObjectPool) : false) ? parentPool : null);
  }
  IoBuffer.prototype._get_endOfInput__0_k$ = function () {
    return this._get_writePosition__0_k$() === this._get_readPosition__0_k$();
  };
  IoBuffer.prototype.peekTo_aaoha9_k$ = function (destination, destinationOffset, offset, min, max) {
    return peekTo(this instanceof Buffer ? this : THROW_CCE(), destination, destinationOffset, offset, min, max);
  };
  IoBuffer.prototype.append_n5ylwa_k$ = function (csq, start, end) {
    var tmp0_elvis_lhs = csq;
    var idx = appendChars(this, tmp0_elvis_lhs == null ? 'null' : tmp0_elvis_lhs, start, end);
    if (!(idx === end))
      throw IllegalStateException_init_$Create$('Not enough free space to append char sequence');
    return this;
  };
  IoBuffer.prototype.append_v1o70a_k$ = function (csq) {
    return csq == null ? this.append_v1o70a_k$('null') : this.append_n5ylwa_k$(csq, 0, charSequenceLength(csq));
  };
  IoBuffer.prototype.append_wi8o78_k$ = function (c) {
    append(this instanceof Buffer ? this : THROW_CCE(), c);
    Unit_getInstance();
    return this;
  };
  IoBuffer.prototype.toString = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = this._get_writePosition__0_k$() - this._get_readPosition__0_k$() | 0;
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = this._get_limit__0_k$() - this._get_writePosition__0_k$() | 0;
      break $l$block_0;
    }
    var tmp_0 = tmp$ret$1;
    var tmp_1 = this._get_startGap__0_k$();
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = this._capacity - this._get_limit__0_k$() | 0;
      break $l$block_1;
    }
    return '' + 'Buffer[readable = ' + tmp + ', writable = ' + tmp_0 + ', startGap = ' + tmp_1 + ', endGap = ' + tmp$ret$2 + ']';
  };
  IoBuffer.$metadata$ = {
    simpleName: 'IoBuffer',
    kind: 'class',
    interfaces: [Input, Output]
  };
  function writeFully_1(_this_, src, offset, length) {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp0__anonymous__2 = _this_._memory;
        var tmp1__anonymous__2 = _this_._get_writePosition__0_k$();
        var tmp2__anonymous__2 = _this_._get_limit__0_k$();
        if ((tmp2__anonymous__2 - tmp1__anonymous__2 | 0) < length) {
          throw new InsufficientSpaceException('' + 'Not enough free space to write ' + length + ' bytes');
        }copyTo(src, tmp0__anonymous__2, offset, length, tmp1__anonymous__2);
        tmp$ret$0 = length;
        break $l$block;
      }
      var rc_1 = tmp$ret$0;
      _this_.commitWritten_majfzk_k$(rc_1);
      tmp$ret$1 = rc_1;
      break $l$block_0;
    }
    Unit_getInstance();
  }
  function writeFully$default_0(_this_, src, offset, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      length = src.byteLength - offset | 0;
    return writeFully_1(_this_, src, offset, length);
  }
  function Output() {
  }
  Output.$metadata$ = {
    simpleName: 'Output',
    kind: 'interface',
    interfaces: [Appendable, Closeable]
  };
  var PACKET_MAX_COPY_SIZE;
  function BytePacketBuilder_0(headerSizeHint) {
    return new BytePacketBuilder(headerSizeHint, Companion_getInstance_16()._Pool);
  }
  function EOFException(message) {
    IOException_init_$Init$(message, this);
    captureStack(this, EOFException);
  }
  EOFException.$metadata$ = {
    simpleName: 'EOFException',
    kind: 'class',
    interfaces: []
  };
  function IOException_init_$Init$(message, $this) {
    IOException.call($this, message, null);
    return $this;
  }
  function IOException(message, cause) {
    Exception_init_$Init$_1(message, cause, this);
    captureStack(this, IOException);
  }
  IOException.$metadata$ = {
    simpleName: 'IOException',
    kind: 'class',
    interfaces: []
  };
  var ENCODING_ALIASES;
  var REPLACEMENT;
  function REPLACEMENT$init$() {
    var tmp$ret$0;
    $l$block: {
      var tmp0_byteArrayOf_0 = new Int8Array([-17, -65, -67]);
      tmp$ret$0 = tmp0_byteArrayOf_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  var WIN1252_TABLE;
  function WIN1252_TABLE$init$() {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new Int32Array([8364, -1, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, -1, 381, -1, -1, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, -1, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function DefaultPool(capacity) {
    this._capacity_0 = capacity;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      var tmp0_arrayOfNulls_0 = this._capacity_0;
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
      break $l$block;
    }
    tmp._instances = tmp$ret$0;
    this._size_1 = 0;
  }
  DefaultPool.prototype.disposeInstance_iav7o_k$ = function (instance) {
  };
  DefaultPool.prototype.clearInstance_2c5_k$ = function (instance) {
    return instance;
  };
  DefaultPool.prototype.validateInstance_iav7o_k$ = function (instance) {
  };
  DefaultPool.prototype.borrow_0_k$ = function () {
    if (this._size_1 === 0)
      return this.produceInstance_0_k$();
    var tmp0_this = this;
    tmp0_this._size_1 = tmp0_this._size_1 - 1 | 0;
    var idx = tmp0_this._size_1;
    var tmp = this._instances[idx];
    var instance = isObject(tmp) ? tmp : THROW_CCE();
    this._instances[idx] = null;
    return this.clearInstance_2c5_k$(instance);
  };
  DefaultPool.prototype.recycle_iav7o_k$ = function (instance) {
    this.validateInstance_iav7o_k$(instance);
    if (this._size_1 === this._capacity_0) {
      this.disposeInstance_iav7o_k$(instance);
    } else {
      var tmp0_this = this;
      var tmp1 = tmp0_this._size_1;
      tmp0_this._size_1 = tmp1 + 1 | 0;
      this._instances[tmp1] = instance;
    }
  };
  DefaultPool.$metadata$ = {
    simpleName: 'DefaultPool',
    kind: 'class',
    interfaces: [ObjectPool]
  };
  function AttributeKey(name) {
    this._name_2 = name;
  }
  AttributeKey.prototype.toString = function () {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      var tmp0_isEmpty_0 = this._name_2;
      tmp$ret$0 = charSequenceLength(tmp0_isEmpty_0) === 0;
      break $l$block;
    }
    if (tmp$ret$0) {
      tmp = anyToString(this);
    } else {
      {
        tmp = '' + 'AttributeKey: ' + this._name_2;
      }
    }
    return tmp;
  };
  AttributeKey.$metadata$ = {
    simpleName: 'AttributeKey',
    kind: 'class',
    interfaces: []
  };
  function Attributes() {
  }
  Attributes.$metadata$ = {
    simpleName: 'Attributes',
    kind: 'interface',
    interfaces: []
  };
  var BASE64_INVERSE_ALPHABET;
  function BASE64_INVERSE_ALPHABET$init$() {
    var tmp = 0;
    var tmp_0 = 256;
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$0;
      $l$block: {
        var tmp_3 = numberToChar(tmp_2);
        tmp$ret$0 = indexOf$default('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', tmp_3, 0, false, 6, null);
        break $l$block;
      }
      tmp_1[tmp_2] = tmp$ret$0;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function _no_name_provided__52() {
  }
  _no_name_provided__52.prototype.invoke_5syhgw_k$ = function ($this$$receiver) {
    return new Entry_0($this$$receiver._get_key__0_k$()._content, $this$$receiver._get_value__0_k$());
  };
  _no_name_provided__52.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_5syhgw_k$((!(p1 == null) ? isInterface(p1, MutableEntry) : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__52.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__53() {
  }
  _no_name_provided__53.prototype.invoke_907dh8_k$ = function ($this$$receiver) {
    return new Entry_0(caseInsensitive($this$$receiver._get_key__0_k$()), $this$$receiver._get_value__0_k$());
  };
  _no_name_provided__53.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_907dh8_k$((!(p1 == null) ? isInterface(p1, MutableEntry) : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__53.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function CaseInsensitiveMap() {
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      break $l$block;
    }
    tmp._delegate_1 = tmp$ret$0;
  }
  CaseInsensitiveMap.prototype._get_size__0_k$ = function () {
    return this._delegate_1._get_size__0_k$();
  };
  CaseInsensitiveMap.prototype.containsKey_6wfw3l_k$ = function (key) {
    return this._delegate_1.containsKey_2bw_k$(new CaseInsensitiveString(key));
  };
  CaseInsensitiveMap.prototype.containsKey_2bw_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    else {
    }
    return this.containsKey_6wfw3l_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  CaseInsensitiveMap.prototype.get_6wfw3l_k$ = function (key) {
    return this._delegate_1.get_2bw_k$(caseInsensitive(key));
  };
  CaseInsensitiveMap.prototype.get_2bw_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    else {
    }
    return this.get_6wfw3l_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  CaseInsensitiveMap.prototype.put_h4i4hb_k$ = function (key, value) {
    return this._delegate_1.put_1q9pf_k$(caseInsensitive(key), value);
  };
  CaseInsensitiveMap.prototype.put_1q9pf_k$ = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.put_h4i4hb_k$(tmp, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  CaseInsensitiveMap.prototype.putAll_g47t4z_k$ = function (from) {
    {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = from._get_entries__0_k$().iterator_0_k$();
        break $l$block;
      }
      var tmp0_iterator_1 = tmp$ret$0;
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        {
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = element_2._get_key__0_k$();
            break $l$block_0;
          }
          var key_4 = tmp$ret$1;
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = element_2._get_value__0_k$();
            break $l$block_1;
          }
          var value_5 = tmp$ret$2;
          this.put_h4i4hb_k$(key_4, value_5);
          Unit_getInstance();
        }
      }
    }
  };
  CaseInsensitiveMap.prototype.putAll_nn707j_k$ = function (from) {
    return this.putAll_g47t4z_k$(from);
  };
  CaseInsensitiveMap.prototype._get_entries__0_k$ = function () {
    var tmp = this._delegate_1._get_entries__0_k$();
    var tmp_0 = _no_name_provided_$factory_36();
    return new DelegatingMutableSet(tmp, tmp_0, _no_name_provided_$factory_37());
  };
  CaseInsensitiveMap.prototype.equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof CaseInsensitiveMap);
    }
    if (tmp)
      return false;
    else {
    }
    return equals_1(other._delegate_1, this._delegate_1);
  };
  CaseInsensitiveMap.prototype.hashCode = function () {
    return hashCode(this._delegate_1);
  };
  CaseInsensitiveMap.$metadata$ = {
    simpleName: 'CaseInsensitiveMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function Entry_0(key, value) {
    this._key_1 = key;
    this._value_7 = value;
  }
  Entry_0.prototype._get_key__0_k$ = function () {
    return this._key_1;
  };
  Entry_0.prototype._get_value__0_k$ = function () {
    return this._value_7;
  };
  Entry_0.prototype.setValue_ooresu_k$ = function (newValue) {
    this._value_7 = newValue;
    return this._value_7;
  };
  Entry_0.prototype.setValue_2c7_k$ = function (newValue) {
    return this.setValue_ooresu_k$((newValue == null ? true : isObject(newValue)) ? newValue : THROW_CCE());
  };
  Entry_0.prototype.hashCode = function () {
    return (527 + hashCode(ensureNotNull(this._key_1)) | 0) + hashCode(ensureNotNull(this._value_7)) | 0;
  };
  Entry_0.prototype.equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(!(other == null) ? isInterface(other, Entry) : false);
    }
    if (tmp)
      return false;
    else {
    }
    return equals_1(other._get_key__0_k$(), this._key_1) ? equals_1(other._get_value__0_k$(), this._value_7) : false;
  };
  Entry_0.prototype.toString = function () {
    return '' + this._key_1 + '=' + this._value_7;
  };
  Entry_0.$metadata$ = {
    simpleName: 'Entry',
    kind: 'class',
    interfaces: [MutableEntry]
  };
  function _no_name_provided_$factory_36() {
    var i = new _no_name_provided__52();
    return function (p1) {
      return i.invoke_5syhgw_k$(p1);
    };
  }
  function _no_name_provided_$factory_37() {
    var i = new _no_name_provided__53();
    return function (p1) {
      return i.invoke_907dh8_k$(p1);
    };
  }
  function toCharArray(_this_) {
    var tmp = 0;
    var tmp_0 = _this_.length;
    var tmp_1 = charArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = charSequenceGet(_this_, tmp_2);
        break $l$block;
      }
      tmp_1[tmp_2] = tmp$ret$0;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function caseInsensitiveMap() {
    return new CaseInsensitiveMap();
  }
  var digits;
  function _no_name_provided__54(this$0) {
    this._this$0_11 = this$0;
    this._delegateIterator = this._this$0_11._delegate_2.iterator_0_k$();
  }
  _no_name_provided__54.prototype.hasNext_0_k$ = function () {
    return this._delegateIterator.hasNext_0_k$();
  };
  _no_name_provided__54.prototype.next_0_k$ = function () {
    return this._this$0_11._convertTo(this._delegateIterator.next_0_k$());
  };
  _no_name_provided__54.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function DelegatingMutableSet(delegate, convertTo, convert) {
    this._delegate_2 = delegate;
    this._convertTo = convertTo;
    this._convert = convert;
    this._size_2 = this._delegate_2._get_size__0_k$();
  }
  DelegatingMutableSet.prototype.convert_g6kque_k$ = function (_this__0) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(_this__0, 10));
        var tmp0_iterator_1_2 = _this__0.iterator_0_k$();
        while (tmp0_iterator_1_2.hasNext_0_k$()) {
          var item_2_3 = tmp0_iterator_1_2.next_0_k$();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = this._convert(item_2_3);
            break $l$block;
          }
          tmp0_mapTo_0_1.add_2bq_k$(tmp$ret$0);
          Unit_getInstance();
        }
        tmp$ret$1 = tmp0_mapTo_0_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  };
  DelegatingMutableSet.prototype.convertTo_409b0r_k$ = function (_this__0) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(_this__0, 10));
        var tmp0_iterator_1_2 = _this__0.iterator_0_k$();
        while (tmp0_iterator_1_2.hasNext_0_k$()) {
          var item_2_3 = tmp0_iterator_1_2.next_0_k$();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = this._convertTo(item_2_3);
            break $l$block;
          }
          tmp0_mapTo_0_1.add_2bq_k$(tmp$ret$0);
          Unit_getInstance();
        }
        tmp$ret$1 = tmp0_mapTo_0_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  };
  DelegatingMutableSet.prototype._get_size__0_k$ = function () {
    return this._size_2;
  };
  DelegatingMutableSet.prototype.add_20je_k$ = function (element) {
    return this._delegate_2.add_2bq_k$(this._convert(element));
  };
  DelegatingMutableSet.prototype.add_2bq_k$ = function (element) {
    return this.add_20je_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  DelegatingMutableSet.prototype.addAll_5jm4fo_k$ = function (elements) {
    return this._delegate_2.addAll_dxd4eo_k$(this.convert_g6kque_k$(elements));
  };
  DelegatingMutableSet.prototype.addAll_dxd4eo_k$ = function (elements) {
    return this.addAll_5jm4fo_k$(elements);
  };
  DelegatingMutableSet.prototype.contains_20je_k$ = function (element) {
    return this._delegate_2.contains_2bq_k$(this._convert(element));
  };
  DelegatingMutableSet.prototype.contains_2bq_k$ = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.contains_20je_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  DelegatingMutableSet.prototype.containsAll_5jm4fo_k$ = function (elements) {
    return this._delegate_2.containsAll_dxd4eo_k$(this.convert_g6kque_k$(elements));
  };
  DelegatingMutableSet.prototype.containsAll_dxd4eo_k$ = function (elements) {
    return this.containsAll_5jm4fo_k$(elements);
  };
  DelegatingMutableSet.prototype.isEmpty_0_k$ = function () {
    return this._delegate_2.isEmpty_0_k$();
  };
  DelegatingMutableSet.prototype.iterator_0_k$ = function () {
    return new _no_name_provided__54(this);
  };
  DelegatingMutableSet.prototype.hashCode = function () {
    return hashCode(this._delegate_2);
  };
  DelegatingMutableSet.prototype.equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(!(other == null) ? isInterface(other, Set) : false);
    }
    if (tmp)
      return false;
    else {
    }
    var elements = this.convertTo_409b0r_k$(this._delegate_2);
    var tmp_0;
    if (other.containsAll_dxd4eo_k$(elements)) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_containsAll_0 = other;
        tmp$ret$0 = elements.containsAll_dxd4eo_k$(tmp0_containsAll_0);
        break $l$block;
      }
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  DelegatingMutableSet.prototype.toString = function () {
    return toString_1(this.convertTo_409b0r_k$(this._delegate_2));
  };
  DelegatingMutableSet.$metadata$ = {
    simpleName: 'DelegatingMutableSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function toLowerCasePreservingASCIIRules(_this_) {
    var tmp$ret$1;
    $l$block_1: {
      var inductionVariable = 0;
      var last_0 = charSequenceLength(_this_) - 1 | 0;
      if (inductionVariable <= last_0)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          $l$block: {
            var tmp0__anonymous__3 = charSequenceGet(_this_, index_2);
            tmp$ret$0 = !toLowerCasePreservingASCII(tmp0__anonymous__3).equals(tmp0__anonymous__3);
            break $l$block;
          }
          if (tmp$ret$0) {
            tmp$ret$1 = index_2;
            break $l$block_1;
          } else {
          }
        }
         while (inductionVariable <= last_0);
      tmp$ret$1 = -1;
      break $l$block_1;
    }
    var firstIndex = tmp$ret$1;
    if (firstIndex === -1) {
      return _this_;
    }var original = _this_;
    var tmp$ret$3;
    $l$block_3: {
      var tmp1_buildString_0 = _this_.length;
      {
      }
      var tmp$ret$2;
      $l$block_2: {
        var tmp0_apply_0_1 = StringBuilder_init_$Create$(tmp1_buildString_0);
        {
        }
        {
          tmp0_apply_0_1.append_n5ylwa_k$(original, 0, firstIndex);
          Unit_getInstance();
          var inductionVariable_0 = firstIndex;
          var last_1 = _get_lastIndex__0(original);
          if (inductionVariable_0 <= last_1)
            do {
              var index_4 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              tmp0_apply_0_1.append_wi8o78_k$(toLowerCasePreservingASCII(charSequenceGet(original, index_4)));
              Unit_getInstance();
            }
             while (!(index_4 === last_1));
        }
        tmp$ret$2 = tmp0_apply_0_1;
        break $l$block_2;
      }
      tmp$ret$3 = tmp$ret$2.toString();
      break $l$block_3;
    }
    return tmp$ret$3;
  }
  function toLowerCasePreservingASCII(ch) {
    var tmp0_subject = ch;
    var tmp;
    if (new Char(65) <= tmp0_subject ? tmp0_subject <= new Char(90) : false) {
      tmp = ch.plus_ha5a7z_k$(32);
    } else if (new Char(0) <= tmp0_subject ? tmp0_subject <= new Char(127) : false) {
      tmp = ch;
    } else {
      var tmp$ret$4;
      $l$block_3: {
        var tmp$ret$3;
        $l$block_2: {
          var tmp$ret$2;
          $l$block_1: {
            var tmp$ret$1;
            $l$block_0: {
              var tmp$ret$0;
              $l$block: {
                var tmp0_asDynamic_0_2_2 = ch.toString();
                tmp$ret$0 = tmp0_asDynamic_0_2_2;
                break $l$block;
              }
              var tmp1_unsafeCast_0_1_1 = tmp$ret$0.toLowerCase();
              tmp$ret$1 = tmp1_unsafeCast_0_1_1;
              break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
          }
          tmp$ret$3 = charSequenceGet(tmp$ret$2, 0);
          break $l$block_2;
        }
        tmp$ret$4 = tmp$ret$3;
        break $l$block_3;
      }
      tmp = tmp$ret$4;
    }
    return tmp;
  }
  function CaseInsensitiveString(content) {
    this._content = content;
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_toLowerCase_0 = this._content;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_toLowerCase_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.toLowerCase();
      break $l$block_0;
    }
    tmp._hash = getStringHashCode(tmp$ret$1);
  }
  CaseInsensitiveString.prototype.equals = function (other) {
    var tmp0_safe_receiver = other instanceof CaseInsensitiveString ? other : null;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._content;
    return (tmp1_safe_receiver == null ? null : equals_0(tmp1_safe_receiver, this._content, true)) === true;
  };
  CaseInsensitiveString.prototype.hashCode = function () {
    return this._hash;
  };
  CaseInsensitiveString.prototype.toString = function () {
    return this._content;
  };
  CaseInsensitiveString.$metadata$ = {
    simpleName: 'CaseInsensitiveString',
    kind: 'class',
    interfaces: []
  };
  function caseInsensitive(_this_) {
    return new CaseInsensitiveString(_this_);
  }
  function Attributes_0(concurrent) {
    return Attributes_1(concurrent === void 1 ? false : concurrent);
  }
  function Attributes_1(concurrent) {
    return new AttributesJs();
  }
  function AttributesJs() {
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      break $l$block;
    }
    tmp._map_1 = tmp$ret$0;
  }
  AttributesJs.$metadata$ = {
    simpleName: 'AttributesJs',
    kind: 'class',
    interfaces: [Attributes]
  };
  var _crypto$delegate;
  function _no_name_provided__55() {
  }
  _no_name_provided__55.prototype.invoke_0_k$ = function () {
    var tmp;
    if (PlatformUtils_getInstance()._IS_NODE) {
      tmp = eval('require')('crypto');
    } else {
      tmp = window.crypto ? window.crypto : window.msCrypto;
    }
    return tmp;
  };
  _no_name_provided__55.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_38() {
    var i = new _no_name_provided__55();
    return function () {
      return i.invoke_0_k$();
    };
  }
  function PlatformUtils() {
    PlatformUtils_instance = this;
    var tmp = this;
    var tmp_0 = typeof window !== 'undefined' && typeof window.document !== 'undefined';
    tmp._IS_BROWSER = (!(tmp_0 == null) ? typeof tmp_0 === 'boolean' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = this;
    var tmp_2 = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
    tmp_1._IS_NODE = (!(tmp_2 == null) ? typeof tmp_2 === 'boolean' : false) ? tmp_2 : THROW_CCE();
    this._IS_JVM = false;
    this._IS_NATIVE = false;
    this._IS_DEVELOPMENT_MODE = false;
  }
  PlatformUtils.$metadata$ = {
    simpleName: 'PlatformUtils',
    kind: 'object',
    interfaces: []
  };
  var PlatformUtils_instance;
  function PlatformUtils_getInstance() {
    if (PlatformUtils_instance == null)
      new PlatformUtils();
    return PlatformUtils_instance;
  }
  var URL_ALPHABET;
  var URL_ALPHABET_CHARS;
  var HEX_ALPHABET;
  var URL_PROTOCOL_PART;
  var VALID_PATH_PART;
  var OAUTH_SYMBOLS;
  var LETTERS_AND_NUMBERS;
  var TOKENS;
  function URL_ALPHABET$init$() {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_map_0 = plus(plus_0((new Char(97)).rangeTo_wi8o78_k$(new Char(122)), (new Char(65)).rangeTo_wi8o78_k$(new Char(90))), (new Char(48)).rangeTo_wi8o78_k$(new Char(57)));
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0, 10));
        var tmp0_iterator_1_2 = tmp0_map_0.iterator_0_k$();
        while (tmp0_iterator_1_2.hasNext_0_k$()) {
          var item_2_3 = tmp0_iterator_1_2.next_0_k$();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = item_2_3.toByte_0_k$();
            break $l$block;
          }
          tmp0_mapTo_0_1.add_2bq_k$(tmp$ret$0);
          Unit_getInstance();
        }
        tmp$ret$1 = tmp0_mapTo_0_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function URL_PROTOCOL_PART$init$() {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_map_0 = listOf([new Char(58), new Char(47), new Char(63), new Char(35), new Char(91), new Char(93), new Char(64), new Char(33), new Char(36), new Char(38), new Char(39), new Char(40), new Char(41), new Char(42), new Char(44), new Char(59), new Char(61), new Char(45), new Char(46), new Char(95), new Char(126), new Char(43)]);
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0, 10));
        var tmp0_iterator_1_2 = tmp0_map_0.iterator_0_k$();
        while (tmp0_iterator_1_2.hasNext_0_k$()) {
          var item_2_3 = tmp0_iterator_1_2.next_0_k$();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = item_2_3.toByte_0_k$();
            break $l$block;
          }
          tmp0_mapTo_0_1.add_2bq_k$(tmp$ret$0);
          Unit_getInstance();
        }
        tmp$ret$1 = tmp0_mapTo_0_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function OAUTH_SYMBOLS$init$() {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_map_0 = listOf([new Char(45), new Char(46), new Char(95), new Char(126)]);
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0, 10));
        var tmp0_iterator_1_2 = tmp0_map_0.iterator_0_k$();
        while (tmp0_iterator_1_2.hasNext_0_k$()) {
          var item_2_3 = tmp0_iterator_1_2.next_0_k$();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = item_2_3.toByte_0_k$();
            break $l$block;
          }
          tmp0_mapTo_0_1.add_2bq_k$(tmp$ret$0);
          Unit_getInstance();
        }
        tmp$ret$1 = tmp0_mapTo_0_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function ContentType_init_$Init$(contentType, contentSubtype, parameters, $this) {
    ContentType.call($this, contentType, contentSubtype, '' + contentType + '/' + contentSubtype, parameters);
    return $this;
  }
  function ContentType_init_$Create$(contentType, contentSubtype, parameters) {
    return ContentType_init_$Init$(contentType, contentSubtype, parameters, Object.create(ContentType.prototype));
  }
  function ContentType_init_$Init$_0(contentType, contentSubtype, parameters, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      parameters = emptyList();
    ContentType_init_$Init$(contentType, contentSubtype, parameters, $this);
    return $this;
  }
  function ContentType_init_$Create$_0(contentType, contentSubtype, parameters, $mask0, $marker) {
    return ContentType_init_$Init$_0(contentType, contentSubtype, parameters, $mask0, $marker, Object.create(ContentType.prototype));
  }
  function Companion_22() {
    Companion_instance_21 = this;
    var tmp = this;
    tmp._Any = ContentType_init_$Create$_0('*', '*', null, 4, null);
  }
  Companion_22.prototype.parse_6wfw3l_k$ = function (value) {
    if (isBlank(value))
      return this._Any;
    var tmp$ret$10;
    $l$block_9: {
      var tmp0_parse_0 = Companion_getInstance_22();
      var headerValue_1 = single_0(parseHeaderValue(value));
      var tmp$ret$9;
      $l$block_8: {
        var tmp1__anonymous__2 = headerValue_1._value_9;
        var tmp2__anonymous__2 = headerValue_1._params;
        var tmp = new Char(47);
        var slash_3 = indexOf$default(tmp1__anonymous__2, tmp, 0, false, 6, null);
        if (slash_3 === -1) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = toString_1(trim(isCharSequence(tmp1__anonymous__2) ? tmp1__anonymous__2 : THROW_CCE()));
            break $l$block;
          }
          if (tmp$ret$0 === '*') {
            return Companion_getInstance_21()._Any;
          } else {
          }
          throw new BadContentTypeFormatException(value);
        }var tmp$ret$3;
        $l$block_2: {
          var tmp$ret$2;
          $l$block_1: {
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = tmp1__anonymous__2;
              break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1.substring(0, slash_3);
            break $l$block_1;
          }
          var tmp0_trim_0_5 = tmp$ret$2;
          tmp$ret$3 = toString_1(trim(isCharSequence(tmp0_trim_0_5) ? tmp0_trim_0_5 : THROW_CCE()));
          break $l$block_2;
        }
        var type_4 = tmp$ret$3;
        var tmp$ret$4;
        $l$block_3: {
          tmp$ret$4 = charSequenceLength(type_4) === 0;
          break $l$block_3;
        }
        if (tmp$ret$4) {
          throw new BadContentTypeFormatException(value);
        } else {
        }
        var tmp$ret$7;
        $l$block_6: {
          var tmp$ret$6;
          $l$block_5: {
            var tmp1_substring_0_8 = slash_3 + 1 | 0;
            var tmp$ret$5;
            $l$block_4: {
              tmp$ret$5 = tmp1__anonymous__2;
              break $l$block_4;
            }
            tmp$ret$6 = tmp$ret$5.substring(tmp1_substring_0_8);
            break $l$block_5;
          }
          var tmp2_trim_0_7 = tmp$ret$6;
          tmp$ret$7 = toString_1(trim(isCharSequence(tmp2_trim_0_7) ? tmp2_trim_0_7 : THROW_CCE()));
          break $l$block_6;
        }
        var subtype_6 = tmp$ret$7;
        var tmp_0;
        var tmp_1 = new Char(32);
        if (contains$default(type_4, tmp_1, false, 2, null)) {
          tmp_0 = true;
        } else {
          {
            var tmp_2 = new Char(32);
            tmp_0 = contains$default(subtype_6, tmp_2, false, 2, null);
          }
        }
        if (tmp_0) {
          throw new BadContentTypeFormatException(value);
        } else {
        }
        var tmp_3;
        var tmp$ret$8;
        $l$block_7: {
          tmp$ret$8 = charSequenceLength(subtype_6) === 0;
          break $l$block_7;
        }
        if (tmp$ret$8) {
          tmp_3 = true;
        } else {
          {
            var tmp_4 = new Char(47);
            tmp_3 = contains$default(subtype_6, tmp_4, false, 2, null);
          }
        }
        if (tmp_3) {
          throw new BadContentTypeFormatException(value);
        } else {
        }
        tmp$ret$9 = ContentType_init_$Create$(type_4, subtype_6, tmp2__anonymous__2);
        break $l$block_8;
      }
      tmp$ret$10 = tmp$ret$9;
      break $l$block_9;
    }
    return tmp$ret$10;
  };
  Companion_22.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_21;
  function Companion_getInstance_21() {
    if (Companion_instance_21 == null)
      new Companion_22();
    return Companion_instance_21;
  }
  function ContentType(contentType, contentSubtype, existingContent, parameters) {
    Companion_getInstance_21();
    HeaderValueWithParameters.call(this, existingContent, parameters);
    this._contentType = contentType;
    this._contentSubtype = contentSubtype;
  }
  ContentType.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof ContentType) {
      tmp_1 = equals_0(this._contentType, other._contentType, true);
    } else {
      {
        tmp_1 = false;
      }
    }
    if (tmp_1) {
      tmp_0 = equals_0(this._contentSubtype, other._contentSubtype, true);
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      tmp = equals_1(this._get_parameters__0_k$(), other._get_parameters__0_k$());
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  ContentType.prototype.hashCode = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_toLowerCase_0 = this._contentType;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_toLowerCase_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.toLowerCase();
      break $l$block_0;
    }
    var result = getStringHashCode(tmp$ret$1);
    var tmp = result;
    var tmp_0 = imul(31, result);
    var tmp$ret$3;
    $l$block_2: {
      var tmp1_toLowerCase_0 = this._contentSubtype;
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = tmp1_toLowerCase_0;
        break $l$block_1;
      }
      tmp$ret$3 = tmp$ret$2.toLowerCase();
      break $l$block_2;
    }
    result = tmp + (tmp_0 + getStringHashCode(tmp$ret$3) | 0) | 0;
    result = result + imul(31, hashCode(this._get_parameters__0_k$())) | 0;
    return result;
  };
  ContentType.$metadata$ = {
    simpleName: 'ContentType',
    kind: 'class',
    interfaces: []
  };
  function BadContentTypeFormatException(value) {
    Exception_init_$Init$_0('' + 'Bad Content-Type format: ' + value, this);
    captureStack(this, BadContentTypeFormatException);
  }
  BadContentTypeFormatException.$metadata$ = {
    simpleName: 'BadContentTypeFormatException',
    kind: 'class',
    interfaces: []
  };
  var loweredPartNames;
  var clientCookieHeaderPattern;
  var cookieCharsShouldBeEscaped;
  function clientCookieHeaderPattern$init$() {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Regex_init_$Create$('(^|;)\\s*([^()<>@;:/\\\\"\\[\\]\\?=\\{\\}\\s]+)\\s*(=\\s*("[^"]*"|[^;]*))?');
      break $l$block;
    }
    return tmp$ret$0;
  }
  var HTTP_DATE_FORMATS;
  var contentTypesByExtensions$delegate;
  var extensionsByContentType$delegate;
  function groupByPairs(_this_) {
    var tmp$ret$12;
    $l$block_11: {
      var tmp$ret$4;
      $l$block_3: {
        var tmp$ret$3;
        $l$block_2: {
          var tmp0_groupByTo_0_1 = LinkedHashMap_init_$Create$();
          var tmp0_iterator_1_2 = _this_.iterator_0_k$();
          while (tmp0_iterator_1_2.hasNext_0_k$()) {
            var element_2_3 = tmp0_iterator_1_2.next_0_k$();
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = element_2_3._first;
              break $l$block;
            }
            var key_3_4 = tmp$ret$0;
            var tmp$ret$2;
            $l$block_1: {
              var value_1_6 = tmp0_groupByTo_0_1.get_2bw_k$(key_3_4);
              var tmp;
              if (value_1_6 == null) {
                var tmp$ret$1;
                $l$block_0: {
                  tmp$ret$1 = ArrayList_init_$Create$();
                  break $l$block_0;
                }
                var answer_2_7 = tmp$ret$1;
                tmp0_groupByTo_0_1.put_1q9pf_k$(key_3_4, answer_2_7);
                Unit_getInstance();
                tmp = answer_2_7;
              } else {
                tmp = value_1_6;
              }
              tmp$ret$2 = tmp;
              break $l$block_1;
            }
            var list_4_5 = tmp$ret$2;
            list_4_5.add_2bq_k$(element_2_3);
            Unit_getInstance();
          }
          tmp$ret$3 = tmp0_groupByTo_0_1;
          break $l$block_2;
        }
        tmp$ret$4 = tmp$ret$3;
        break $l$block_3;
      }
      var tmp0_mapValues_0 = tmp$ret$4;
      var tmp$ret$11;
      $l$block_10: {
        var tmp1_mapValuesTo_0_1 = LinkedHashMap_init_$Create$_1(mapCapacity(tmp0_mapValues_0._get_size__0_k$()));
        var tmp$ret$10;
        $l$block_9: {
          var tmp0_associateByTo_0_2 = tmp0_mapValues_0._get_entries__0_k$();
          var tmp0_iterator_1_3 = tmp0_associateByTo_0_2.iterator_0_k$();
          while (tmp0_iterator_1_3.hasNext_0_k$()) {
            var element_2_4 = tmp0_iterator_1_3.next_0_k$();
            var tmp$ret$5;
            $l$block_4: {
              tmp$ret$5 = element_2_4._get_key__0_k$();
              break $l$block_4;
            }
            var tmp_0 = tmp$ret$5;
            var tmp$ret$9;
            $l$block_8: {
              var tmp$ret$8;
              $l$block_7: {
                var tmp0_map_0_6 = element_2_4._get_value__0_k$();
                var tmp$ret$7;
                $l$block_6: {
                  var tmp0_mapTo_0_1_7 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0_6, 10));
                  var tmp0_iterator_1_2_8 = tmp0_map_0_6.iterator_0_k$();
                  while (tmp0_iterator_1_2_8.hasNext_0_k$()) {
                    var item_2_3_9 = tmp0_iterator_1_2_8.next_0_k$();
                    var tmp$ret$6;
                    $l$block_5: {
                      tmp$ret$6 = item_2_3_9._second;
                      break $l$block_5;
                    }
                    tmp0_mapTo_0_1_7.add_2bq_k$(tmp$ret$6);
                    Unit_getInstance();
                  }
                  tmp$ret$7 = tmp0_mapTo_0_1_7;
                  break $l$block_6;
                }
                tmp$ret$8 = tmp$ret$7;
                break $l$block_7;
              }
              tmp$ret$9 = tmp$ret$8;
              break $l$block_8;
            }
            tmp1_mapValuesTo_0_1.put_1q9pf_k$(tmp_0, tmp$ret$9);
            Unit_getInstance();
          }
          tmp$ret$10 = tmp1_mapValuesTo_0_1;
          break $l$block_9;
        }
        tmp$ret$11 = tmp$ret$10;
        break $l$block_10;
      }
      tmp$ret$12 = tmp$ret$11;
      break $l$block_11;
    }
    return tmp$ret$12;
  }
  function toContentType(_this_) {
    var tmp;
    try {
      tmp = Companion_getInstance_21().parse_6wfw3l_k$(_this_);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        throw IllegalArgumentException_init_$Create$_0('' + 'Failed to parse ' + _this_, $p);
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function _no_name_provided__56() {
  }
  _no_name_provided__56.prototype.invoke_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_apply_0 = caseInsensitiveMap();
      {
      }
      {
        tmp0_apply_0.putAll_nn707j_k$(groupByPairs(asSequence(_get_mimes_())));
      }
      tmp$ret$0 = tmp0_apply_0;
      break $l$block;
    }
    return tmp$ret$0;
  };
  _no_name_provided__56.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__57() {
  }
  _no_name_provided__57.prototype.invoke_pcol05_k$ = function (_name_for_destructuring_parameter_0_) {
    var first_0 = _name_for_destructuring_parameter_0_.component1_0_k$();
    var second = _name_for_destructuring_parameter_0_.component2_0_k$();
    return to(second, first_0);
  };
  _no_name_provided__57.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_pcol05_k$(p1 instanceof Pair ? p1 : THROW_CCE());
  };
  _no_name_provided__57.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__58() {
  }
  _no_name_provided__58.prototype.invoke_0_k$ = function () {
    var tmp = asSequence(_get_mimes_());
    return groupByPairs(map(tmp, _no_name_provided_$factory_41()));
  };
  _no_name_provided__58.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_39() {
    var i = new _no_name_provided__56();
    return function () {
      return i.invoke_0_k$();
    };
  }
  function _no_name_provided_$factory_40() {
    var i = new _no_name_provided__58();
    return function () {
      return i.invoke_0_k$();
    };
  }
  function _no_name_provided_$factory_41() {
    var i = new _no_name_provided__57();
    return function (p1) {
      return i.invoke_pcol05_k$(p1);
    };
  }
  var HeaderFieldValueSeparators;
  function Companion_23() {
    Companion_instance_22 = this;
  }
  Companion_23.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_22;
  function Companion_getInstance_22() {
    if (Companion_instance_22 == null)
      new Companion_23();
    return Companion_instance_22;
  }
  function HeaderValueWithParameters(content, parameters) {
    Companion_getInstance_22();
    this._content_0 = content;
    this._parameters = parameters;
  }
  HeaderValueWithParameters.prototype._get_parameters__0_k$ = function () {
    return this._parameters;
  };
  HeaderValueWithParameters.prototype.toString = function () {
    var tmp;
    if (this._parameters.isEmpty_0_k$()) {
      tmp = this._content_0;
    } else {
      var tmp_0 = this._content_0.length;
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_sumBy_0 = this._parameters;
        var sum_1 = 0;
        var tmp0_iterator_2 = tmp0_sumBy_0.iterator_0_k$();
        while (tmp0_iterator_2.hasNext_0_k$()) {
          var element_3 = tmp0_iterator_2.next_0_k$();
          var tmp_1 = sum_1;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = (element_3._name_3.length + element_3._value_8.length | 0) + 3 | 0;
            break $l$block;
          }
          sum_1 = tmp_1 + tmp$ret$0 | 0;
        }
        tmp$ret$1 = sum_1;
        break $l$block_0;
      }
      var size_0 = tmp_0 + tmp$ret$1 | 0;
      var tmp$ret$2;
      $l$block_1: {
        var tmp1_apply_0 = StringBuilder_init_$Create$(size_0);
        {
        }
        {
          tmp1_apply_0.append_uch40_k$(this._content_0);
          Unit_getInstance();
          var inductionVariable = 0;
          var last_0 = this._parameters._get_size__0_k$();
          if (inductionVariable < last_0)
            do {
              var index_3 = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var tmp1_container_4 = this._parameters.get_ha5a7z_k$(index_3);
              var name_5 = tmp1_container_4.component1_0_k$();
              var value_6 = tmp1_container_4.component2_0_k$();
              tmp1_apply_0.append_uch40_k$('; ');
              Unit_getInstance();
              tmp1_apply_0.append_uch40_k$(name_5);
              Unit_getInstance();
              tmp1_apply_0.append_uch40_k$('=');
              Unit_getInstance();
              {
                if (checkNeedEscape$accessor$vynnj(value_6)) {
                  tmp1_apply_0.append_uch40_k$(quote(value_6));
                  Unit_getInstance();
                } else {
                  tmp1_apply_0.append_uch40_k$(value_6);
                  Unit_getInstance();
                }
              }
            }
             while (inductionVariable < last_0);
        }
        tmp$ret$2 = tmp1_apply_0;
        break $l$block_1;
      }
      tmp = tmp$ret$2.toString();
    }
    return tmp;
  };
  HeaderValueWithParameters.$metadata$ = {
    simpleName: 'HeaderValueWithParameters',
    kind: 'class',
    interfaces: []
  };
  function checkNeedEscape(_this_) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = charSequenceLength(_this_) === 0;
      break $l$block;
    }
    if (tmp$ret$0)
      return true;
    else {
    }
    if (isQuoted(_this_))
      return false;
    var inductionVariable = 0;
    var last_0 = _this_.length;
    if (inductionVariable < last_0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (HeaderFieldValueSeparators.contains_2bq_k$(charSequenceGet(_this_, index)))
          return true;
      }
       while (inductionVariable < last_0);
    return false;
  }
  function quote(_this_) {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp0_apply_0_1 = StringBuilder_init_$Create$_0();
        {
        }
        {
          quoteTo(_this_, tmp0_apply_0_1);
        }
        tmp$ret$0 = tmp0_apply_0_1;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.toString();
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function isQuoted(_this_) {
    if (_this_.length < 2) {
      return false;
    }if (!first(_this_).equals(new Char(34)) ? true : !last(_this_).equals(new Char(34))) {
      return false;
    }var startIndex = 1;
    $l$break: do {
      var tmp = new Char(34);
      var tmp_0 = startIndex;
      var index = indexOf$default(_this_, tmp, tmp_0, false, 4, null);
      if (index === _get_lastIndex__0(_this_)) {
        break $l$break;
      }var slashesCount = 0;
      var slashIndex = index - 1 | 0;
      while (charSequenceGet(_this_, slashIndex).equals(new Char(92))) {
        var tmp0 = slashesCount;
        slashesCount = tmp0 + 1 | 0;
        Unit_getInstance();
        var tmp1 = slashIndex;
        slashIndex = tmp1 - 1 | 0;
        Unit_getInstance();
      }
      if (slashesCount % 2 === 0) {
        return false;
      }startIndex = index + 1 | 0;
    }
     while (startIndex < _this_.length);
    return true;
  }
  function quoteTo(_this_, out) {
    out.append_uch40_k$('"');
    Unit_getInstance();
    var inductionVariable = 0;
    var last_0 = _this_.length;
    if (inductionVariable < last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ch = charSequenceGet(_this_, i);
        var tmp1_subject = ch;
        if (tmp1_subject.equals(new Char(92))) {
          out.append_uch40_k$('\\\\');
          Unit_getInstance();
        } else if (tmp1_subject.equals(new Char(10))) {
          out.append_uch40_k$('\\n');
          Unit_getInstance();
        } else if (tmp1_subject.equals(new Char(13))) {
          out.append_uch40_k$('\\r');
          Unit_getInstance();
        } else if (tmp1_subject.equals(new Char(9))) {
          out.append_uch40_k$('\\t');
          Unit_getInstance();
        } else if (tmp1_subject.equals(new Char(34))) {
          out.append_uch40_k$('\\"');
          Unit_getInstance();
        } else {
          out.append_wi8o78_k$(ch);
          Unit_getInstance();
        }
      }
       while (inductionVariable < last_0);
    out.append_uch40_k$('"');
    Unit_getInstance();
  }
  function checkNeedEscape$accessor$vynnj(_this_) {
    return checkNeedEscape(_this_);
  }
  function HeaderValueParam(name, value) {
    this._name_3 = name;
    this._value_8 = value;
  }
  HeaderValueParam.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof HeaderValueParam) {
      tmp_0 = equals_0(other._name_3, this._name_3, true);
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      tmp = equals_0(other._value_8, this._value_8, true);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  HeaderValueParam.prototype.hashCode = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_toLowerCase_0 = this._name_3;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_toLowerCase_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.toLowerCase();
      break $l$block_0;
    }
    var result = getStringHashCode(tmp$ret$1);
    var tmp = result;
    var tmp_0 = imul(31, result);
    var tmp$ret$3;
    $l$block_2: {
      var tmp1_toLowerCase_0 = this._value_8;
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = tmp1_toLowerCase_0;
        break $l$block_1;
      }
      tmp$ret$3 = tmp$ret$2.toLowerCase();
      break $l$block_2;
    }
    result = tmp + (tmp_0 + getStringHashCode(tmp$ret$3) | 0) | 0;
    return result;
  };
  HeaderValueParam.prototype.component1_0_k$ = function () {
    return this._name_3;
  };
  HeaderValueParam.prototype.component2_0_k$ = function () {
    return this._value_8;
  };
  HeaderValueParam.prototype.toString = function () {
    return '' + 'HeaderValueParam(name=' + this._name_3 + ', value=' + this._value_8 + ')';
  };
  HeaderValueParam.$metadata$ = {
    simpleName: 'HeaderValueParam',
    kind: 'class',
    interfaces: []
  };
  function HeaderValue(value, params) {
    this._value_9 = value;
    this._params = params;
    var tmp = this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_firstOrNull_0 = this._params;
      var tmp0_iterator_1 = tmp0_firstOrNull_0.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$1;
        $l$block: {
          tmp$ret$1 = element_2._name_3 === 'q';
          break $l$block;
        }
        if (tmp$ret$1) {
          tmp$ret$2 = element_2;
          break $l$block_1;
        } else {
        }
      }
      tmp$ret$2 = null;
      break $l$block_1;
    }
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._value_8;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : toDoubleOrNull(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$4;
      $l$block_3: {
        {
        }
        var tmp_1;
        var tmp$ret$3;
        $l$block_2: {
          tmp$ret$3 = rangeTo(0.0, 1.0).contains_2c5_k$(tmp2_safe_receiver);
          break $l$block_2;
        }
        if (tmp$ret$3) {
          tmp_1 = tmp2_safe_receiver;
        } else {
          {
            tmp_1 = null;
          }
        }
        tmp$ret$4 = tmp_1;
        break $l$block_3;
      }
      tmp_0 = tmp$ret$4;
    }
    var tmp3_elvis_lhs = tmp_0;
    tmp._quality = tmp3_elvis_lhs == null ? 1.0 : tmp3_elvis_lhs;
  }
  HeaderValue.prototype.toString = function () {
    return '' + 'HeaderValue(value=' + this._value_9 + ', params=' + this._params + ')';
  };
  HeaderValue.prototype.hashCode = function () {
    var result = getStringHashCode(this._value_9);
    result = imul(result, 31) + hashCode(this._params) | 0;
    return result;
  };
  HeaderValue.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HeaderValue))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof HeaderValue ? other : THROW_CCE();
    if (!(this._value_9 === tmp0_other_with_cast._value_9))
      return false;
    if (!equals_1(this._params, tmp0_other_with_cast._params))
      return false;
    return true;
  };
  HeaderValue.$metadata$ = {
    simpleName: 'HeaderValue',
    kind: 'class',
    interfaces: []
  };
  function parseHeaderValue(text) {
    return parseHeaderValue_0(text, false);
  }
  function parseHeaderValue_0(text, parametersOnly) {
    if (text == null) {
      return emptyList();
    }var position = 0;
    var tmp = LazyThreadSafetyMode_NONE_getInstance();
    var items = lazy_0(tmp, _no_name_provided_$factory_42());
    while (position <= _get_lastIndex__0(text)) {
      position = parseHeaderValueItem(text, position, items, parametersOnly);
    }
    return valueOrEmpty(items);
  }
  function parseHeaderValueItem(text, start, items, parametersOnly) {
    var position = start;
    var tmp = LazyThreadSafetyMode_NONE_getInstance();
    var parameters = lazy_0(tmp, _no_name_provided_$factory_43());
    var valueEnd = parametersOnly ? position : null;
    while (position <= _get_lastIndex__0(text)) {
      var tmp0_subject = charSequenceGet(text, position);
      if (tmp0_subject.equals(new Char(44))) {
        var tmp_0 = items._get_value__0_k$();
        var tmp1_elvis_lhs = valueEnd;
        tmp_0.add_2bq_k$(new HeaderValue(subtrim(text, start, tmp1_elvis_lhs == null ? position : tmp1_elvis_lhs), valueOrEmpty(parameters)));
        Unit_getInstance();
        return position + 1 | 0;
      } else if (tmp0_subject.equals(new Char(59))) {
        if (valueEnd == null)
          valueEnd = position;
        position = parseHeaderValueParameter(text, position + 1 | 0, parameters);
      } else {
        var tmp_1;
        if (parametersOnly) {
          tmp_1 = parseHeaderValueParameter(text, position, parameters);
        } else {
          tmp_1 = position + 1 | 0;
        }
        position = tmp_1;
      }
    }
    var tmp_2 = items._get_value__0_k$();
    var tmp2_elvis_lhs = valueEnd;
    tmp_2.add_2bq_k$(new HeaderValue(subtrim(text, start, tmp2_elvis_lhs == null ? position : tmp2_elvis_lhs), valueOrEmpty(parameters)));
    Unit_getInstance();
    return position;
  }
  function valueOrEmpty(_this_) {
    return _this_.isInitialized_0_k$() ? _this_._get_value__0_k$() : emptyList();
  }
  function subtrim(_this_, start, end) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _this_;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0.substring(start, end);
        break $l$block_0;
      }
      var tmp0_trim_0 = tmp$ret$1;
      tmp$ret$2 = toString_1(trim(isCharSequence(tmp0_trim_0) ? tmp0_trim_0 : THROW_CCE()));
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function parseHeaderValueParameter(text, start, parameters) {
    var position = start;
    while (position <= _get_lastIndex__0(text)) {
      var tmp0_subject = charSequenceGet(text, position);
      if (tmp0_subject.equals(new Char(61))) {
        var tmp1_container = parseHeaderValueParameterValue(text, position + 1 | 0);
        var paramEnd = tmp1_container.component1_0_k$();
        var paramValue = tmp1_container.component2_0_k$();
        parseHeaderValueParameter$addParam(parameters, text, start, position, paramValue);
        return paramEnd;
      } else if (tmp0_subject.equals(new Char(59)) ? true : tmp0_subject.equals(new Char(44))) {
        parseHeaderValueParameter$addParam(parameters, text, start, position, '');
        return position;
      } else {
        var tmp2 = position;
        position = tmp2 + 1 | 0;
        Unit_getInstance();
      }
    }
    parseHeaderValueParameter$addParam(parameters, text, start, position, '');
    return position;
  }
  function parseHeaderValueParameterValue(value, start) {
    if (value.length === start) {
      return to(start, '');
    }var position = start;
    if (charSequenceGet(value, start).equals(new Char(34))) {
      return parseHeaderValueParameterValueQuoted(value, position + 1 | 0);
    }while (position <= _get_lastIndex__0(value)) {
      var tmp0_subject = charSequenceGet(value, position);
      if (tmp0_subject.equals(new Char(59)) ? true : tmp0_subject.equals(new Char(44)))
        return to(position, subtrim(value, start, position));
      else {
        var tmp1 = position;
        position = tmp1 + 1 | 0;
        Unit_getInstance();
      }
    }
    return to(position, subtrim(value, start, position));
  }
  function parseHeaderValueParameterValueQuoted(value, start) {
    var position = start;
    var builder = StringBuilder_init_$Create$_0();
    loop: while (position <= _get_lastIndex__0(value)) {
      var currentChar = charSequenceGet(value, position);
      if (currentChar.equals(new Char(34)) ? nextIsSemicolonOrEnd(value, position) : false) {
        return to(position + 1 | 0, builder.toString());
      } else if (currentChar.equals(new Char(92)) ? position < (_get_lastIndex__0(value) - 2 | 0) : false) {
        builder.append_wi8o78_k$(charSequenceGet(value, position + 1 | 0));
        Unit_getInstance();
        position = position + 2 | 0;
        continue loop;
      }builder.append_wi8o78_k$(currentChar);
      Unit_getInstance();
      var tmp0 = position;
      position = tmp0 + 1 | 0;
      Unit_getInstance();
    }
    var tmp = position;
    var tmp$ret$0;
    $l$block: {
      var tmp0_plus_0 = builder.toString();
      tmp$ret$0 = '"' + tmp0_plus_0;
      break $l$block;
    }
    return to(tmp, tmp$ret$0);
  }
  function nextIsSemicolonOrEnd(_this_, start) {
    var position = start + 1 | 0;
    loop: while (position < _this_.length ? charSequenceGet(_this_, position).equals(new Char(32)) : false) {
      position = position + 1 | 0;
    }
    return position === _this_.length ? true : charSequenceGet(_this_, position).equals(new Char(59));
  }
  function parseHeaderValueParameter$addParam($parameters, text, start, end, value) {
    var name = subtrim(text, start, end);
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = charSequenceLength(name) === 0;
      break $l$block;
    }
    if (tmp$ret$0) {
      return Unit_getInstance();
    } else {
    }
    $parameters._get_value__0_k$().add_2bq_k$(new HeaderValueParam(name, value));
    Unit_getInstance();
  }
  function _no_name_provided__59() {
  }
  _no_name_provided__59.prototype.invoke_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  _no_name_provided__59.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__60() {
  }
  _no_name_provided__60.prototype.invoke_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  _no_name_provided__60.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_42() {
    var i = new _no_name_provided__59();
    return function () {
      return i.invoke_0_k$();
    };
  }
  function _no_name_provided_$factory_43() {
    var i = new _no_name_provided__60();
    return function () {
      return i.invoke_0_k$();
    };
  }
  function Companion_24() {
    Companion_instance_23 = this;
    this._Get = new HttpMethod('GET');
    this._Post = new HttpMethod('POST');
    this._Put = new HttpMethod('PUT');
    this._Patch = new HttpMethod('PATCH');
    this._Delete = new HttpMethod('DELETE');
    this._Head = new HttpMethod('HEAD');
    this._Options = new HttpMethod('OPTIONS');
    this._DefaultMethods = listOf([this._Get, this._Post, this._Put, this._Patch, this._Delete, this._Head, this._Options]);
  }
  Companion_24.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_23;
  function Companion_getInstance_23() {
    if (Companion_instance_23 == null)
      new Companion_24();
    return Companion_instance_23;
  }
  function HttpMethod(value) {
    Companion_getInstance_23();
    this._value_10 = value;
  }
  HttpMethod.prototype.toString = function () {
    return '' + 'HttpMethod(value=' + this._value_10 + ')';
  };
  HttpMethod.prototype.hashCode = function () {
    return getStringHashCode(this._value_10);
  };
  HttpMethod.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpMethod))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof HttpMethod ? other : THROW_CCE();
    if (!(this._value_10 === tmp0_other_with_cast._value_10))
      return false;
    return true;
  };
  HttpMethod.$metadata$ = {
    simpleName: 'HttpMethod',
    kind: 'class',
    interfaces: []
  };
  var IPv4address;
  var IPv6address;
  var IP_PARSER;
  function _get_mimes_() {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = mimes$factory();
      tmp$ret$0 = mimes$delegate._get_value__0_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  var mimes$delegate;
  function loadMimes() {
    var tmp = lineSequence(_get_rawMimes_());
    return toList(mapNotNull(tmp, _no_name_provided_$factory_45()));
  }
  function _get_rawMimes_() {
    return '\n.123,application/vnd.lotus-1-2-3\n.3dmf,x-world/x-3dmf\n.3dml,text/vnd.in3d.3dml\n.3dm,x-world/x-3dmf\n.3g2,video/3gpp2\n.3gp,video/3gpp\n.7z,application/x-7z-compressed\n.aab,application/x-authorware-bin\n.aac,audio/aac\n.aam,application/x-authorware-map\n.a,application/octet-stream\n.aas,application/x-authorware-seg\n.abc,text/vnd.abc\n.abw,application/x-abiword\n.ac,application/pkix-attr-cert\n.acc,application/vnd.americandynamics.acc\n.ace,application/x-ace-compressed\n.acgi,text/html\n.acu,application/vnd.acucobol\n.adp,audio/adpcm\n.aep,application/vnd.audiograph\n.afl,video/animaflex\n.afp,application/vnd.ibm.modcap\n.ahead,application/vnd.ahead.space\n.ai,application/postscript\n.aif,audio/aiff\n.aifc,audio/aiff\n.aiff,audio/aiff\n.aim,application/x-aim\n.aip,text/x-audiosoft-intra\n.air,application/vnd.adobe.air-application-installer-package+zip\n.ait,application/vnd.dvb.ait\n.ami,application/vnd.amiga.ami\n.ani,application/x-navi-animation\n.aos,application/x-nokia-9000-communicator-add-on-software\n.apk,application/vnd.android.package-archive\n.application,application/x-ms-application\n,application/pgp-encrypted\n.apr,application/vnd.lotus-approach\n.aps,application/mime\n.arc,application/octet-stream\n.arj,application/arj\n.arj,application/octet-stream\n.art,image/x-jg\n.asf,video/x-ms-asf\n.asm,text/x-asm\n.aso,application/vnd.accpac.simply.aso\n.asp,text/asp\n.asx,application/x-mplayer2\n.asx,video/x-ms-asf\n.asx,video/x-ms-asf-plugin\n.atc,application/vnd.acucorp\n.atomcat,application/atomcat+xml\n.atomsvc,application/atomsvc+xml\n.atom,application/atom+xml\n.atx,application/vnd.antix.game-component\n.au,audio/basic\n.au,audio/x-au\n.avi,video/avi\n.avi,video/msvideo\n.avi,video/x-msvideo\n.avs,video/avs-video\n.aw,application/applixware\n.azf,application/vnd.airzip.filesecure.azf\n.azs,application/vnd.airzip.filesecure.azs\n.azw,application/vnd.amazon.ebook\n.bcpio,application/x-bcpio\n.bdf,application/x-font-bdf\n.bdm,application/vnd.syncml.dm+wbxml\n.bed,application/vnd.realvnc.bed\n.bh2,application/vnd.fujitsu.oasysprs\n.bin,application/macbinary\n.bin,application/mac-binary\n.bin,application/octet-stream\n.bin,application/x-binary\n.bin,application/x-macbinary\n.bmi,application/vnd.bmi\n.bm,image/bmp\n.bmp,image/bmp\n.bmp,image/x-windows-bmp\n.boo,application/book\n.book,application/book\n.box,application/vnd.previewsystems.box\n.boz,application/x-bzip2\n.bsh,application/x-bsh\n.btif,image/prs.btif\n.bz2,application/x-bzip2\n.bz,application/x-bzip\n.c11amc,application/vnd.cluetrust.cartomobile-config\n.c11amz,application/vnd.cluetrust.cartomobile-config-pkg\n.c4g,application/vnd.clonk.c4group\n.cab,application/vnd.ms-cab-compressed\n.car,application/vnd.curl.car\n.cat,application/vnd.ms-pki.seccat\n.ccad,application/clariscad\n.cco,application/x-cocoa\n.cc,text/plain\n.cc,text/x-c\n.ccxml,application/ccxml+xml,\n.cdbcmsg,application/vnd.contact.cmsg\n.cdf,application/cdf\n.cdf,application/x-cdf\n.cdf,application/x-netcdf\n.cdkey,application/vnd.mediastation.cdkey\n.cdmia,application/cdmi-capability\n.cdmic,application/cdmi-container\n.cdmid,application/cdmi-domain\n.cdmio,application/cdmi-object\n.cdmiq,application/cdmi-queue\n.cdx,chemical/x-cdx\n.cdxml,application/vnd.chemdraw+xml\n.cdy,application/vnd.cinderella\n.cer,application/pkix-cert\n.cgm,image/cgm\n.cha,application/x-chat\n.chat,application/x-chat\n.chm,application/vnd.ms-htmlhelp\n.chrt,application/vnd.kde.kchart\n.cif,chemical/x-cif\n.cii,application/vnd.anser-web-certificate-issue-initiation\n.cil,application/vnd.ms-artgalry\n.cla,application/vnd.claymore\n.class,application/java\n.class,application/java-byte-code\n.class,application/java-vm\n.class,application/x-java-class\n.clkk,application/vnd.crick.clicker.keyboard\n.clkp,application/vnd.crick.clicker.palette\n.clkt,application/vnd.crick.clicker.template\n.clkw,application/vnd.crick.clicker.wordbank\n.clkx,application/vnd.crick.clicker\n.clp,application/x-msclip\n.cmc,application/vnd.cosmocaller\n.cmdf,chemical/x-cmdf\n.cml,chemical/x-cml\n.cmp,application/vnd.yellowriver-custom-menu\n.cmx,image/x-cmx\n.cod,application/vnd.rim.cod\n.com,application/octet-stream\n.com,text/plain\n.conf,text/plain\n.cpio,application/x-cpio\n.cpp,text/x-c\n.cpt,application/mac-compactpro\n.cpt,application/x-compactpro\n.cpt,application/x-cpt\n.crd,application/x-mscardfile\n.crl,application/pkcs-crl\n.crl,application/pkix-crl\n.crt,application/pkix-cert\n.crt,application/x-x509-ca-cert\n.crt,application/x-x509-user-cert\n.cryptonote,application/vnd.rig.cryptonote\n.csh,application/x-csh\n.csh,text/x-script.csh\n.csml,chemical/x-csml\n.csp,application/vnd.commonspace\n.css,text/css\n.csv,text/csv\n.c,text/plain\n.c++,text/plain\n.c,text/x-c\n.cu,application/cu-seeme\n.curl,text/vnd.curl\n.cww,application/prs.cww\n.cxx,text/plain\n.dat,binary/octet-stream\n.dae,model/vnd.collada+xml\n.daf,application/vnd.mobius.daf\n.davmount,application/davmount+xml\n.dcr,application/x-director\n.dcurl,text/vnd.curl.dcurl\n.dd2,application/vnd.oma.dd2+xml\n.ddd,application/vnd.fujixerox.ddd\n.deb,application/x-debian-package\n.deepv,application/x-deepv\n.def,text/plain\n.der,application/x-x509-ca-cert\n.dfac,application/vnd.dreamfactory\n.dif,video/x-dv\n.dir,application/x-director\n.dis,application/vnd.mobius.dis\n.djvu,image/vnd.djvu\n.dl,video/dl\n.dl,video/x-dl\n.dna,application/vnd.dna\n.doc,application/msword\n.docm,application/vnd.ms-word.document.macroenabled.12\n.docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document\n.dot,application/msword\n.dotm,application/vnd.ms-word.template.macroenabled.12\n.dotx,application/vnd.openxmlformats-officedocument.wordprocessingml.template\n.dp,application/commonground\n.dp,application/vnd.osgi.dp\n.dpg,application/vnd.dpgraph\n.dra,audio/vnd.dra\n.drw,application/drafting\n.dsc,text/prs.lines.tag\n.dssc,application/dssc+der\n.dtb,application/x-dtbook+xml\n.dtd,application/xml-dtd\n.dts,audio/vnd.dts\n.dtshd,audio/vnd.dts.hd\n.dump,application/octet-stream\n.dvi,application/x-dvi\n.dv,video/x-dv\n.dwf,model/vnd.dwf\n.dwg,application/acad\n.dwg,image/vnd.dwg\n.dwg,image/x-dwg\n.dxf,application/dxf\n.dxf,image/vnd.dwg\n.dxf,image/vnd.dxf\n.dxf,image/x-dwg\n.dxp,application/vnd.spotfire.dxp\n.dxr,application/x-director\n.ecelp4800,audio/vnd.nuera.ecelp4800\n.ecelp7470,audio/vnd.nuera.ecelp7470\n.ecelp9600,audio/vnd.nuera.ecelp9600\n.edm,application/vnd.novadigm.edm\n.edx,application/vnd.novadigm.edx\n.efif,application/vnd.picsel\n.ei6,application/vnd.pg.osasli\n.elc,application/x-elc\n.el,text/x-script.elisp\n.eml,message/rfc822\n.emma,application/emma+xml\n.env,application/x-envoy\n.eol,audio/vnd.digital-winds\n.eot,application/vnd.ms-fontobject\n.eps,application/postscript\n.epub,application/epub+zip\n.es3,application/vnd.eszigno3+xml\n.es,application/ecmascript\n.es,application/x-esrehber\n.esf,application/vnd.epson.esf\n.etx,text/x-setext\n.evy,application/envoy\n.evy,application/x-envoy\n.exe,application/octet-stream\n.exe,application/x-msdownload\n.exi,application/exi\n.ext,application/vnd.novadigm.ext\n.ez2,application/vnd.ezpix-album\n.ez3,application/vnd.ezpix-package\n.f4v,video/x-f4v\n.f77,text/x-fortran\n.f90,text/plain\n.f90,text/x-fortran\n.fbs,image/vnd.fastbidsheet\n.fcs,application/vnd.isac.fcs\n.fdf,application/vnd.fdf\n.fe_launch,application/vnd.denovo.fcselayout-link\n.fg5,application/vnd.fujitsu.oasysgp\n.fh,image/x-freehand\n.fif,application/fractals\n.fif,image/fif\n.fig,application/x-xfig\n.fli,video/fli\n.fli,video/x-fli\n.flo,application/vnd.micrografx.flo\n.flo,image/florian\n.flv,video/x-flv\n.flw,application/vnd.kde.kivio\n.flx,text/vnd.fmi.flexstor\n.fly,text/vnd.fly\n.fm,application/vnd.framemaker\n.fmf,video/x-atomic3d-feature\n.fnc,application/vnd.frogans.fnc\n.for,text/plain\n.for,text/x-fortran\n.fpx,image/vnd.fpx\n.fpx,image/vnd.net-fpx\n.frl,application/freeloader\n.fsc,application/vnd.fsc.weblaunch\n.fst,image/vnd.fst\n.ftc,application/vnd.fluxtime.clip\n.f,text/plain\n.f,text/x-fortran\n.fti,application/vnd.anser-web-funds-transfer-initiation\n.funk,audio/make\n.fvt,video/vnd.fvt\n.fxp,application/vnd.adobe.fxp\n.fzs,application/vnd.fuzzysheet\n.g2w,application/vnd.geoplan\n.g3,image/g3fax\n.g3w,application/vnd.geospace\n.gac,application/vnd.groove-account\n.gdl,model/vnd.gdl\n.geo,application/vnd.dynageo\n.gex,application/vnd.geometry-explorer\n.ggb,application/vnd.geogebra.file\n.ggt,application/vnd.geogebra.tool\n.ghf,application/vnd.groove-help\n.gif,image/gif\n.gim,application/vnd.groove-identity-message\n.gl,video/gl\n.gl,video/x-gl\n.gmx,application/vnd.gmx\n.gnumeric,application/x-gnumeric\n.gph,application/vnd.flographit\n.gqf,application/vnd.grafeq\n.gram,application/srgs\n.grv,application/vnd.groove-injector\n.grxml,application/srgs+xml\n.gsd,audio/x-gsm\n.gsf,application/x-font-ghostscript\n.gsm,audio/x-gsm\n.gsp,application/x-gsp\n.gss,application/x-gss\n.gtar,application/x-gtar\n.g,text/plain\n.gtm,application/vnd.groove-tool-message\n.gtw,model/vnd.gtw\n.gv,text/vnd.graphviz\n.gxt,application/vnd.geonext\n.gz,application/x-compressed\n.gz,application/x-gzip\n.gzip,application/x-gzip\n.gzip,multipart/x-gzip\n.h261,video/h261\n.h263,video/h263\n.h264,video/h264\n.hal,application/vnd.hal+xml\n.hbci,application/vnd.hbci\n.hdf,application/x-hdf\n.help,application/x-helpfile\n.hgl,application/vnd.hp-hpgl\n.hh,text/plain\n.hh,text/x-h\n.hlb,text/x-script\n.hlp,application/hlp\n.hlp,application/winhlp\n.hlp,application/x-helpfile\n.hlp,application/x-winhelp\n.hpg,application/vnd.hp-hpgl\n.hpgl,application/vnd.hp-hpgl\n.hpid,application/vnd.hp-hpid\n.hps,application/vnd.hp-hps\n.hqx,application/binhex\n.hqx,application/binhex4\n.hqx,application/mac-binhex\n.hqx,application/mac-binhex40\n.hqx,application/x-binhex40\n.hqx,application/x-mac-binhex40\n.hta,application/hta\n.htc,text/x-component\n.h,text/plain\n.h,text/x-h\n.htke,application/vnd.kenameaapp\n.htmls,text/html\n.html,text/html\n.htm,text/html\n.htt,text/webviewhtml\n.htx,text/html\n.hvd,application/vnd.yamaha.hv-dic\n.hvp,application/vnd.yamaha.hv-voice\n.hvs,application/vnd.yamaha.hv-script\n.i2g,application/vnd.intergeo\n.icc,application/vnd.iccprofile\n.ice,x-conference/x-cooltalk\n.ico,image/x-icon\n.ics,text/calendar\n.idc,text/plain\n.ief,image/ief\n.iefs,image/ief\n.iff,application/iff\n.ifm,application/vnd.shana.informed.formdata\n.iges,application/iges\n.iges,model/iges\n.igl,application/vnd.igloader\n.igm,application/vnd.insors.igm\n.igs,application/iges\n.igs,model/iges\n.igx,application/vnd.micrografx.igx\n.iif,application/vnd.shana.informed.interchange\n.ima,application/x-ima\n.imap,application/x-httpd-imap\n.imp,application/vnd.accpac.simply.imp\n.ims,application/vnd.ms-ims\n.inf,application/inf\n.ins,application/x-internett-signup\n.ip,application/x-ip2\n.ipfix,application/ipfix\n.ipk,application/vnd.shana.informed.package\n.irm,application/vnd.ibm.rights-management\n.irp,application/vnd.irepository.package+xml\n.isu,video/x-isvideo\n.it,audio/it\n.itp,application/vnd.shana.informed.formtemplate\n.iv,application/x-inventor\n.ivp,application/vnd.immervision-ivp\n.ivr,i-world/i-vrml\n.ivu,application/vnd.immervision-ivu\n.ivy,application/x-livescreen\n.jad,text/vnd.sun.j2me.app-descriptor\n.jam,application/vnd.jam\n.jam,audio/x-jam\n.jar,application/java-archive\n.java,text/plain\n.java,text/x-java-source\n.jav,text/plain\n.jav,text/x-java-source\n.jcm,application/x-java-commerce\n.jfif,image/jpeg\n.jfif,image/pjpeg\n.jfif-tbnl,image/jpeg\n.jisp,application/vnd.jisp\n.jlt,application/vnd.hp-jlyt\n.jnlp,application/x-java-jnlp-file\n.joda,application/vnd.joost.joda-archive\n.jpeg,image/jpeg\n.jpe,image/jpeg\n.jpg,image/jpeg\n.jpgv,video/jpeg\n.jpm,video/jpm\n.jps,image/x-jps\n.js,application/javascript\n.json,application/json\n.jut,image/jutvision\n.kar,audio/midi\n.karbon,application/vnd.kde.karbon\n.kar,music/x-karaoke\n.key,application/pgp-keys\n.keychain,application/octet-stream\n.kfo,application/vnd.kde.kformula\n.kia,application/vnd.kidspiration\n.kml,application/vnd.google-earth.kml+xml\n.kmz,application/vnd.google-earth.kmz\n.kne,application/vnd.kinar\n.kon,application/vnd.kde.kontour\n.kpr,application/vnd.kde.kpresenter\n.ksh,application/x-ksh\n.ksh,text/x-script.ksh\n.ksp,application/vnd.kde.kspread\n.ktx,image/ktx\n.ktz,application/vnd.kahootz\n.kwd,application/vnd.kde.kword\n.la,audio/nspaudio\n.la,audio/x-nspaudio\n.lam,audio/x-liveaudio\n.lasxml,application/vnd.las.las+xml\n.latex,application/x-latex\n.lbd,application/vnd.llamagraphics.life-balance.desktop\n.lbe,application/vnd.llamagraphics.life-balance.exchange+xml\n.les,application/vnd.hhe.lesson-player\n.lha,application/lha\n.lha,application/x-lha\n.link66,application/vnd.route66.link66+xml\n.list,text/plain\n.lma,audio/nspaudio\n.lma,audio/x-nspaudio\n.log,text/plain\n.lrm,application/vnd.ms-lrm\n.lsp,application/x-lisp\n.lsp,text/x-script.lisp\n.lst,text/plain\n.lsx,text/x-la-asf\n.ltf,application/vnd.frogans.ltf\n.ltx,application/x-latex\n.lvp,audio/vnd.lucent.voice\n.lwp,application/vnd.lotus-wordpro\n.lzh,application/octet-stream\n.lzh,application/x-lzh\n.lzx,application/lzx\n.lzx,application/octet-stream\n.lzx,application/x-lzx\n.m1v,video/mpeg\n.m21,application/mp21\n.m2a,audio/mpeg\n.m2v,video/mpeg\n.m3u8,application/vnd.apple.mpegurl\n.m3u,audio/x-mpegurl\n.m4a,audio/mp4\n.m4v,video/mp4\n.ma,application/mathematica\n.mads,application/mads+xml\n.mag,application/vnd.ecowin.chart\n.man,application/x-troff-man\n.map,application/x-navimap\n.mar,text/plain\n.mathml,application/mathml+xml\n.mbd,application/mbedlet\n.mbk,application/vnd.mobius.mbk\n.mbox,application/mbox\n.mc1,application/vnd.medcalcdata\n.mc$,application/x-magic-cap-package-1.0\n.mcd,application/mcad\n.mcd,application/vnd.mcd\n.mcd,application/x-mathcad\n.mcf,image/vasa\n.mcf,text/mcf\n.mcp,application/netmc\n.mcurl,text/vnd.curl.mcurl\n.mdb,application/x-msaccess\n.mdi,image/vnd.ms-modi\n.me,application/x-troff-me\n.meta4,application/metalink4+xml\n.mets,application/mets+xml\n.mfm,application/vnd.mfmp\n.mgp,application/vnd.osgeo.mapguide.package\n.mgz,application/vnd.proteus.magazine\n.mht,message/rfc822\n.mhtml,message/rfc822\n.mid,application/x-midi\n.mid,audio/midi\n.mid,audio/x-mid\n.midi,application/x-midi\n.midi,audio/midi\n.midi,audio/x-mid\n.midi,audio/x-midi\n.midi,music/crescendo\n.midi,x-music/x-midi\n.mid,music/crescendo\n.mid,x-music/x-midi\n.mif,application/vnd.mif\n.mif,application/x-frame\n.mif,application/x-mif\n.mime,message/rfc822\n.mime,www/mime\n.mj2,video/mj2\n.mjf,audio/x-vnd.audioexplosion.mjuicemediafile\n.mjpg,video/x-motion-jpeg\n.mkv,video/x-matroska\n.mkv,audio/x-matroska\n.mlp,application/vnd.dolby.mlp\n.mm,application/base64\n.mm,application/x-meme\n.mmd,application/vnd.chipnuts.karaoke-mmd\n.mme,application/base64\n.mmf,application/vnd.smaf\n.mmr,image/vnd.fujixerox.edmics-mmr\n.mny,application/x-msmoney\n.mod,audio/mod\n.mod,audio/x-mod\n.mods,application/mods+xml\n.moov,video/quicktime\n.movie,video/x-sgi-movie\n.mov,video/quicktime\n.mp2,audio/mpeg\n.mp2,audio/x-mpeg\n.mp2,video/mpeg\n.mp2,video/x-mpeg\n.mp2,video/x-mpeq2a\n.mp3,audio/mpeg\n.mp3,audio/mpeg3\n.mp4a,audio/mp4\n.mp4,video/mp4\n.mp4,application/mp4\n.mpa,audio/mpeg\n.mpc,application/vnd.mophun.certificate\n.mpc,application/x-project\n.mpeg,video/mpeg\n.mpe,video/mpeg\n.mpga,audio/mpeg\n.mpg,video/mpeg\n.mpg,audio/mpeg\n.mpkg,application/vnd.apple.installer+xml\n.mpm,application/vnd.blueice.multipass\n.mpn,application/vnd.mophun.application\n.mpp,application/vnd.ms-project\n.mpt,application/x-project\n.mpv,application/x-project\n.mpx,application/x-project\n.mpy,application/vnd.ibm.minipay\n.mqy,application/vnd.mobius.mqy\n.mrc,application/marc\n.mrcx,application/marcxml+xml\n.ms,application/x-troff-ms\n.mscml,application/mediaservercontrol+xml\n.mseq,application/vnd.mseq\n.msf,application/vnd.epson.msf\n.msg,application/vnd.ms-outlook\n.msh,model/mesh\n.msl,application/vnd.mobius.msl\n.msty,application/vnd.muvee.style\n.m,text/plain\n.m,text/x-m\n.mts,model/vnd.mts\n.mus,application/vnd.musician\n.musicxml,application/vnd.recordare.musicxml+xml\n.mvb,application/x-msmediaview\n.mv,video/x-sgi-movie\n.mwf,application/vnd.mfer\n.mxf,application/mxf\n.mxl,application/vnd.recordare.musicxml\n.mxml,application/xv+xml\n.mxs,application/vnd.triscape.mxs\n.mxu,video/vnd.mpegurl\n.my,audio/make\n.mzz,application/x-vnd.audioexplosion.mzz\n.n3,text/n3\nN/A,application/andrew-inset\n.nap,image/naplps\n.naplps,image/naplps\n.nbp,application/vnd.wolfram.player\n.nc,application/x-netcdf\n.ncm,application/vnd.nokia.configuration-message\n.ncx,application/x-dtbncx+xml\n.n-gage,application/vnd.nokia.n-gage.symbian.install\n.ngdat,application/vnd.nokia.n-gage.data\n.niff,image/x-niff\n.nif,image/x-niff\n.nix,application/x-mix-transfer\n.nlu,application/vnd.neurolanguage.nlu\n.nml,application/vnd.enliven\n.nnd,application/vnd.noblenet-directory\n.nns,application/vnd.noblenet-sealer\n.nnw,application/vnd.noblenet-web\n.npx,image/vnd.net-fpx\n.nsc,application/x-conference\n.nsf,application/vnd.lotus-notes\n.nvd,application/x-navidoc\n.oa2,application/vnd.fujitsu.oasys2\n.oa3,application/vnd.fujitsu.oasys3\n.o,application/octet-stream\n.oas,application/vnd.fujitsu.oasys\n.obd,application/x-msbinder\n.oda,application/oda\n.odb,application/vnd.oasis.opendocument.database\n.odc,application/vnd.oasis.opendocument.chart\n.odf,application/vnd.oasis.opendocument.formula\n.odft,application/vnd.oasis.opendocument.formula-template\n.odg,application/vnd.oasis.opendocument.graphics\n.odi,application/vnd.oasis.opendocument.image\n.odm,application/vnd.oasis.opendocument.text-master\n.odp,application/vnd.oasis.opendocument.presentation\n.ods,application/vnd.oasis.opendocument.spreadsheet\n.odt,application/vnd.oasis.opendocument.text\n.oga,audio/ogg\n.ogg,audio/ogg\n.ogv,video/ogg\n.ogx,application/ogg\n.omc,application/x-omc\n.omcd,application/x-omcdatamaker\n.omcr,application/x-omcregerator\n.onetoc,application/onenote\n.opf,application/oebps-package+xml\n.org,application/vnd.lotus-organizer\n.osf,application/vnd.yamaha.openscoreformat\n.osfpvg,application/vnd.yamaha.openscoreformat.osfpvg+xml\n.otc,application/vnd.oasis.opendocument.chart-template\n.otf,application/x-font-otf\n.otg,application/vnd.oasis.opendocument.graphics-template\n.oth,application/vnd.oasis.opendocument.text-web\n.oti,application/vnd.oasis.opendocument.image-template\n.otp,application/vnd.oasis.opendocument.presentation-template\n.ots,application/vnd.oasis.opendocument.spreadsheet-template\n.ott,application/vnd.oasis.opendocument.text-template\n.oxt,application/vnd.openofficeorg.extension\n.p10,application/pkcs10\n.p12,application/pkcs-12\n.p7a,application/x-pkcs7-signature\n.p7b,application/x-pkcs7-certificates\n.p7c,application/pkcs7-mime\n.p7m,application/pkcs7-mime\n.p7r,application/x-pkcs7-certreqresp\n.p7s,application/pkcs7-signature\n.p8,application/pkcs8\n.pages,application/vnd.apple.pages\n.part,application/pro_eng\n.par,text/plain-bas\n.pas,text/pascal\n.paw,application/vnd.pawaafile\n.pbd,application/vnd.powerbuilder6\n.pbm,image/x-portable-bitmap\n.pcf,application/x-font-pcf\n.pcl,application/vnd.hp-pcl\n.pcl,application/x-pcl\n.pclxl,application/vnd.hp-pclxl\n.pct,image/x-pict\n.pcurl,application/vnd.curl.pcurl\n.pcx,image/x-pcx\n.pdb,application/vnd.palm\n.pdb,chemical/x-pdb\n.pdf,application/pdf\n.pem,application/x-pem-file\n.pfa,application/x-font-type1\n.pfr,application/font-tdpfr\n.pfunk,audio/make\n.pfunk,audio/make.my.funk\n.pfx,application/x-pkcs12\n.pgm,image/x-portable-graymap\n.pgn,application/x-chess-pgn\n.pgp,application/pgp-signature\n.pic,image/pict\n.pict,image/pict\n.pkg,application/x-newton-compatible-pkg\n.pki,application/pkixcmp\n.pkipath,application/pkix-pkipath\n.pko,application/vnd.ms-pki.pko\n.plb,application/vnd.3gpp.pic-bw-large\n.plc,application/vnd.mobius.plc\n.plf,application/vnd.pocketlearn\n.pls,application/pls+xml\n.pl,text/plain\n.pl,text/x-script.perl\n.plx,application/x-pixclscript\n.pm4,application/x-pagemaker\n.pm5,application/x-pagemaker\n.pm,image/x-xpixmap\n.pml,application/vnd.ctc-posml\n.pm,text/x-script.perl-module\n.png,image/png\n.pnm,application/x-portable-anymap\n.pnm,image/x-portable-anymap\n.portpkg,application/vnd.macports.portpkg\n.pot,application/mspowerpoint\n.pot,application/vnd.ms-powerpoint\n.potm,application/vnd.ms-powerpoint.template.macroenabled.12\n.potx,application/vnd.openxmlformats-officedocument.presentationml.template\n.pov,model/x-pov\n.ppa,application/vnd.ms-powerpoint\n.ppam,application/vnd.ms-powerpoint.addin.macroenabled.12\n.ppd,application/vnd.cups-ppd\n.ppm,image/x-portable-pixmap\n.pps,application/mspowerpoint\n.pps,application/vnd.ms-powerpoint\n.ppsm,application/vnd.ms-powerpoint.slideshow.macroenabled.12\n.ppsx,application/vnd.openxmlformats-officedocument.presentationml.slideshow\n.ppt,application/mspowerpoint\n.ppt,application/powerpoint\n.ppt,application/vnd.ms-powerpoint\n.ppt,application/x-mspowerpoint\n.pptm,application/vnd.ms-powerpoint.presentation.macroenabled.12\n.pptx,application/vnd.openxmlformats-officedocument.presentationml.presentation\n.ppz,application/mspowerpoint\n.prc,application/x-mobipocket-ebook\n.pre,application/vnd.lotus-freelance\n.pre,application/x-freelance\n.prf,application/pics-rules\n.prt,application/pro_eng\n.ps,application/postscript\n.psb,application/vnd.3gpp.pic-bw-small\n.psd,application/octet-stream\n.psd,image/vnd.adobe.photoshop\n.psf,application/x-font-linux-psf\n.pskcxml,application/pskc+xml\n.p,text/x-pascal\n.ptid,application/vnd.pvi.ptid1\n.pub,application/x-mspublisher\n.pvb,application/vnd.3gpp.pic-bw-var\n.pvu,paleovu/x-pv\n.pwn,application/vnd.3m.post-it-notes\n.pwz,application/vnd.ms-powerpoint\n.pya,audio/vnd.ms-playready.media.pya\n.pyc,application/x-bytecode.python\n.py,text/x-script.python\n.pyv,video/vnd.ms-playready.media.pyv\n.qam,application/vnd.epson.quickanime\n.qbo,application/vnd.intu.qbo\n.qcp,audio/vnd.qcelp\n.qd3d,x-world/x-3dmf\n.qd3,x-world/x-3dmf\n.qfx,application/vnd.intu.qfx\n.qif,image/x-quicktime\n.qps,application/vnd.publishare-delta-tree\n.qtc,video/x-qtc\n.qtif,image/x-quicktime\n.qti,image/x-quicktime\n.qt,video/quicktime\n.qxd,application/vnd.quark.quarkxpress\n.ra,audio/x-pn-realaudio\n.ra,audio/x-pn-realaudio-plugin\n.ra,audio/x-realaudio\n.ram,audio/x-pn-realaudio\n.rar,application/x-rar-compressed\n.ras,application/x-cmu-raster\n.ras,image/cmu-raster\n.ras,image/x-cmu-raster\n.rast,image/cmu-raster\n.rcprofile,application/vnd.ipunplugged.rcprofile\n.rdf,application/rdf+xml\n.rdz,application/vnd.data-vision.rdz\n.rep,application/vnd.businessobjects\n.res,application/x-dtbresource+xml\n.rexx,text/x-script.rexx\n.rf,image/vnd.rn-realflash\n.rgb,image/x-rgb\n.rif,application/reginfo+xml\n.rip,audio/vnd.rip\n.rl,application/resource-lists+xml\n.rlc,image/vnd.fujixerox.edmics-rlc\n.rld,application/resource-lists-diff+xml\n.rm,application/vnd.rn-realmedia\n.rm,audio/x-pn-realaudio\n.rmi,audio/mid\n.rmm,audio/x-pn-realaudio\n.rmp,audio/x-pn-realaudio\n.rmp,audio/x-pn-realaudio-plugin\n.rms,application/vnd.jcp.javame.midlet-rms\n.rnc,application/relax-ng-compact-syntax\n.rng,application/ringing-tones\n.rng,application/vnd.nokia.ringing-tone\n.rnx,application/vnd.rn-realplayer\n.roff,application/x-troff\n.rp9,application/vnd.cloanto.rp9\n.rp,image/vnd.rn-realpix\n.rpm,audio/x-pn-realaudio-plugin\n.rpm,application/x-rpm\n.rpss,application/vnd.nokia.radio-presets\n.rpst,application/vnd.nokia.radio-preset\n.rq,application/sparql-query\n.rs,application/rls-services+xml\n.rsd,application/rsd+xml\n.rss,application/rss+xml\n.rtf,application/rtf\n.rtf,text/rtf\n.rt,text/richtext\n.rt,text/vnd.rn-realtext\n.rtx,application/rtf\n.rtx,text/richtext\n.rv,video/vnd.rn-realvideo\n.s3m,audio/s3m\n.saf,application/vnd.yamaha.smaf-audio\n.saveme,application/octet-stream\n.sbk,application/x-tbook\n.sbml,application/sbml+xml\n.sc,application/vnd.ibm.secure-container\n.scd,application/x-msschedule\n.scm,application/vnd.lotus-screencam\n.scm,application/x-lotusscreencam\n.scm,text/x-script.guile\n.scm,text/x-script.scheme\n.scm,video/x-scm\n.scq,application/scvp-cv-request\n.scs,application/scvp-cv-response\n.scurl,text/vnd.curl.scurl\n.sda,application/vnd.stardivision.draw\n.sdc,application/vnd.stardivision.calc\n.sdd,application/vnd.stardivision.impress\n.sdf,application/octet-stream\n.sdkm,application/vnd.solent.sdkm+xml\n.sdml,text/plain\n.sdp,application/sdp\n.sdp,application/x-sdp\n.sdr,application/sounder\n.sdw,application/vnd.stardivision.writer\n.sea,application/sea\n.sea,application/x-sea\n.see,application/vnd.seemail\n.seed,application/vnd.fdsn.seed\n.sema,application/vnd.sema\n.semd,application/vnd.semd\n.semf,application/vnd.semf\n.ser,application/java-serialized-object\n.set,application/set\n.setpay,application/set-payment-initiation\n.setreg,application/set-registration-initiation\n.sfd-hdstx,application/vnd.hydrostatix.sof-data\n.sfs,application/vnd.spotfire.sfs\n.sgl,application/vnd.stardivision.writer-global\n.sgml,text/sgml\n.sgml,text/x-sgml\n.sgm,text/sgml\n.sgm,text/x-sgml\n.sh,application/x-bsh\n.sh,application/x-sh\n.sh,application/x-shar\n.shar,application/x-bsh\n.shar,application/x-shar\n.shf,application/shf+xml\n.sh,text/x-script.sh\n.shtml,text/html\n.shtml,text/x-server-parsed-html\n.sid,audio/x-psid\n.sis,application/vnd.symbian.install\n.sit,application/x-sit\n.sit,application/x-stuffit\n.sitx,application/x-stuffitx\n.skd,application/x-koan\n.skm,application/x-koan\n.skp,application/vnd.koan\n.skp,application/x-koan\n.skt,application/x-koan\n.sl,application/x-seelogo\n.sldm,application/vnd.ms-powerpoint.slide.macroenabled.12\n.sldx,application/vnd.openxmlformats-officedocument.presentationml.slide\n.slt,application/vnd.epson.salt\n.sm,application/vnd.stepmania.stepchart\n.smf,application/vnd.stardivision.math\n.smi,application/smil\n.smi,application/smil+xml\n.smil,application/smil\n.snd,audio/basic\n.snd,audio/x-adpcm\n.snf,application/x-font-snf\n.sol,application/solids\n.spc,application/x-pkcs7-certificates\n.spc,text/x-speech\n.spf,application/vnd.yamaha.smaf-phrase\n.spl,application/futuresplash\n.spl,application/x-futuresplash\n.spot,text/vnd.in3d.spot\n.spp,application/scvp-vp-response\n.spq,application/scvp-vp-request\n.spr,application/x-sprite\n.sprite,application/x-sprite\n.src,application/x-wais-source\n.srt,text/srt\n.sru,application/sru+xml\n.srx,application/sparql-results+xml\n.sse,application/vnd.kodak-descriptor\n.ssf,application/vnd.epson.ssf\n.ssi,text/x-server-parsed-html\n.ssm,application/streamingmedia\n.ssml,application/ssml+xml\n.sst,application/vnd.ms-pki.certstore\n.st,application/vnd.sailingtracker.track\n.stc,application/vnd.sun.xml.calc.template\n.std,application/vnd.sun.xml.draw.template\n.step,application/step\n.s,text/x-asm\n.stf,application/vnd.wt.stf\n.sti,application/vnd.sun.xml.impress.template\n.stk,application/hyperstudio\n.stl,application/sla\n.stl,application/vnd.ms-pki.stl\n.stl,application/x-navistyle\n.stp,application/step\n.str,application/vnd.pg.format\n.stw,application/vnd.sun.xml.writer.template\n.sub,image/vnd.dvb.subtitle\n.sus,application/vnd.sus-calendar\n.sv4cpio,application/x-sv4cpio\n.sv4crc,application/x-sv4crc\n.svc,application/vnd.dvb.service\n.svd,application/vnd.svd\n.svf,image/vnd.dwg\n.svf,image/x-dwg\n.svg,image/svg+xml\n.svr,application/x-world\n.svr,x-world/x-svr\n.swf,application/x-shockwave-flash\n.swi,application/vnd.aristanetworks.swi\n.sxc,application/vnd.sun.xml.calc\n.sxd,application/vnd.sun.xml.draw\n.sxg,application/vnd.sun.xml.writer.global\n.sxi,application/vnd.sun.xml.impress\n.sxm,application/vnd.sun.xml.math\n.sxw,application/vnd.sun.xml.writer\n.talk,text/x-speech\n.tao,application/vnd.tao.intent-module-archive\n.t,application/x-troff\n.tar,application/x-tar\n.tbk,application/toolbook\n.tbk,application/x-tbook\n.tcap,application/vnd.3gpp2.tcap\n.tcl,application/x-tcl\n.tcl,text/x-script.tcl\n.tcsh,text/x-script.tcsh\n.teacher,application/vnd.smart.teacher\n.tei,application/tei+xml\n.tex,application/x-tex\n.texi,application/x-texinfo\n.texinfo,application/x-texinfo\n.text,text/plain\n.tfi,application/thraud+xml\n.tfm,application/x-tex-tfm\n.tgz,application/gnutar\n.tgz,application/x-compressed\n.thmx,application/vnd.ms-officetheme\n.tiff,image/tiff\n.tif,image/tiff\n.tmo,application/vnd.tmobile-livetv\n.torrent,application/x-bittorrent\n.tpl,application/vnd.groove-tool-template\n.tpt,application/vnd.trid.tpt\n.tra,application/vnd.trueapp\n.tr,application/x-troff\n.trm,application/x-msterminal\n.tsd,application/timestamped-data\n.tsi,audio/tsp-audio\n.tsp,application/dsptype\n.tsp,audio/tsplayer\n.tsv,text/tab-separated-values\n.t,text/troff\n.ttf,application/x-font-ttf\n.ttl,text/turtle\n.turbot,image/florian\n.twd,application/vnd.simtech-mindmapper\n.txd,application/vnd.genomatix.tuxedo\n.txf,application/vnd.mobius.txf\n.txt,text/plain\n.ufd,application/vnd.ufdl\n.uil,text/x-uil\n.umj,application/vnd.umajin\n.unis,text/uri-list\n.uni,text/uri-list\n.unityweb,application/vnd.unity\n.unv,application/i-deas\n.uoml,application/vnd.uoml+xml\n.uris,text/uri-list\n.uri,text/uri-list\n.ustar,application/x-ustar\n.ustar,multipart/x-ustar\n.utz,application/vnd.uiq.theme\n.uu,application/octet-stream\n.uue,text/x-uuencode\n.uu,text/x-uuencode\n.uva,audio/vnd.dece.audio\n.uvh,video/vnd.dece.hd\n.uvi,image/vnd.dece.graphic\n.uvm,video/vnd.dece.mobile\n.uvp,video/vnd.dece.pd\n.uvs,video/vnd.dece.sd\n.uvu,video/vnd.uvvu.mp4\n.uvv,video/vnd.dece.video\n.vcd,application/x-cdlink\n.vcf,text/x-vcard\n.vcg,application/vnd.groove-vcard\n.vcs,text/x-vcalendar\n.vcx,application/vnd.vcx\n.vda,application/vda\n.vdo,video/vdo\n.vew,application/groupwise\n.vis,application/vnd.visionary\n.vivo,video/vivo\n.vivo,video/vnd.vivo\n.viv,video/vivo\n.viv,video/vnd.vivo\n.vmd,application/vocaltec-media-desc\n.vmf,application/vocaltec-media-file\n.vob,video/dvd\n.voc,audio/voc\n.voc,audio/x-voc\n.vos,video/vosaic\n.vox,audio/voxware\n.vqe,audio/x-twinvq-plugin\n.vqf,audio/x-twinvq\n.vql,audio/x-twinvq-plugin\n.vrml,application/x-vrml\n.vrml,model/vrml\n.vrml,x-world/x-vrml\n.vrt,x-world/x-vrt\n.vsd,application/vnd.visio\n.vsd,application/x-visio\n.vsf,application/vnd.vsf\n.vst,application/x-visio\n.vsw,application/x-visio\n.vtt,text/vtt\n.vtu,model/vnd.vtu\n.vxml,application/voicexml+xml\n.w60,application/wordperfect6.0\n.w61,application/wordperfect6.1\n.w6w,application/msword\n.wad,application/x-doom\n.war,application/zip\n.wasm,application/wasm\n.wav,audio/wav\n.wax,audio/x-ms-wax\n.wb1,application/x-qpro\n.wbmp,image/vnd.wap.wbmp\n.wbs,application/vnd.criticaltools.wbs+xml\n.wbxml,application/vnd.wap.wbxml\n.weba,audio/webm\n.web,application/vnd.xara\n.webm,video/webm\n.webp,image/webp\n.wg,application/vnd.pmi.widget\n.wgt,application/widget\n.wiz,application/msword\n.wk1,application/x-123\n.wma,audio/x-ms-wma\n.wmd,application/x-ms-wmd\n.wmf,application/x-msmetafile\n.wmf,windows/metafile\n.wmlc,application/vnd.wap.wmlc\n.wmlsc,application/vnd.wap.wmlscriptc\n.wmls,text/vnd.wap.wmlscript\n.wml,text/vnd.wap.wml\n.wm,video/x-ms-wm\n.wmv,video/x-ms-wmv\n.wmx,video/x-ms-wmx\n.wmz,application/x-ms-wmz\n.woff,application/x-font-woff\n.word,application/msword\n.wp5,application/wordperfect\n.wp5,application/wordperfect6.0\n.wp6,application/wordperfect\n.wp,application/wordperfect\n.wpd,application/vnd.wordperfect\n.wpd,application/wordperfect\n.wpd,application/x-wpwin\n.wpl,application/vnd.ms-wpl\n.wps,application/vnd.ms-works\n.wq1,application/x-lotus\n.wqd,application/vnd.wqd\n.wri,application/mswrite\n.wri,application/x-mswrite\n.wri,application/x-wri\n.wrl,application/x-world\n.wrl,model/vrml\n.wrl,x-world/x-vrml\n.wrz,model/vrml\n.wrz,x-world/x-vrml\n.wsc,text/scriplet\n.wsdl,application/wsdl+xml\n.wspolicy,application/wspolicy+xml\n.wsrc,application/x-wais-source\n.wtb,application/vnd.webturbo\n.wtk,application/x-wintalk\n.wvx,video/x-ms-wvx\n.x3d,application/vnd.hzn-3d-crossword\n.xap,application/x-silverlight-app\n.xar,application/vnd.xara\n.xbap,application/x-ms-xbap\n.xbd,application/vnd.fujixerox.docuworks.binder\n.xbm,image/xbm\n.xbm,image/x-xbitmap\n.xbm,image/x-xbm\n.xdf,application/xcap-diff+xml\n.xdm,application/vnd.syncml.dm+xml\n.xdp,application/vnd.adobe.xdp+xml\n.xdr,video/x-amt-demorun\n.xdssc,application/dssc+xml\n.xdw,application/vnd.fujixerox.docuworks\n.xenc,application/xenc+xml\n.xer,application/patch-ops-error+xml\n.xfdf,application/vnd.adobe.xfdf\n.xfdl,application/vnd.xfdl\n.xgz,xgl/drawing\n.xhtml,application/xhtml+xml\n.xif,image/vnd.xiff\n.xla,application/excel\n.xla,application/x-excel\n.xla,application/x-msexcel\n.xlam,application/vnd.ms-excel.addin.macroenabled.12\n.xl,application/excel\n.xlb,application/excel\n.xlb,application/vnd.ms-excel\n.xlb,application/x-excel\n.xlc,application/excel\n.xlc,application/vnd.ms-excel\n.xlc,application/x-excel\n.xld,application/excel\n.xld,application/x-excel\n.xlk,application/excel\n.xlk,application/x-excel\n.xll,application/excel\n.xll,application/vnd.ms-excel\n.xll,application/x-excel\n.xlm,application/excel\n.xlm,application/vnd.ms-excel\n.xlm,application/x-excel\n.xls,application/excel\n.xls,application/vnd.ms-excel\n.xls,application/x-excel\n.xls,application/x-msexcel\n.xlsb,application/vnd.ms-excel.sheet.binary.macroenabled.12\n.xlsm,application/vnd.ms-excel.sheet.macroenabled.12\n.xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\n.xlt,application/excel\n.xlt,application/x-excel\n.xltm,application/vnd.ms-excel.template.macroenabled.12\n.xltx,application/vnd.openxmlformats-officedocument.spreadsheetml.template\n.xlv,application/excel\n.xlv,application/x-excel\n.xlw,application/excel\n.xlw,application/vnd.ms-excel\n.xlw,application/x-excel\n.xlw,application/x-msexcel\n.xm,audio/xm\n.xml,application/xml\n.xml,text/xml\n.xmz,xgl/movie\n.xo,application/vnd.olpc-sugar\n.xop,application/xop+xml\n.xpi,application/x-xpinstall\n.xpix,application/x-vnd.ls-xpix\n.xpm,image/xpm\n.xpm,image/x-xpixmap\n.x-png,image/png\n.xpr,application/vnd.is-xpr\n.xps,application/vnd.ms-xpsdocument\n.xpw,application/vnd.intercon.formnet\n.xslt,application/xslt+xml\n.xsm,application/vnd.syncml+xml\n.xspf,application/xspf+xml\n.xsr,video/x-amt-showrun\n.xul,application/vnd.mozilla.xul+xml\n.xwd,image/x-xwd\n.xwd,image/x-xwindowdump\n.xyz,chemical/x-pdb\n.xyz,chemical/x-xyz\n.xz,application/x-xz\n.yaml,text/yaml\n.yang,application/yang\n.yin,application/yin+xml\n.z,application/x-compress\n.z,application/x-compressed\n.zaz,application/vnd.zzazz.deck+xml\n.zip,application/zip\n.zip,application/x-compressed\n.zip,application/x-zip-compressed\n.zip,multipart/x-zip\n.zir,application/vnd.zul\n.zmm,application/vnd.handheld-entertainment+xml\n.zoo,application/octet-stream\n.zsh,text/x-script.zsh\n';
  }
  function _no_name_provided__61() {
  }
  _no_name_provided__61.prototype.invoke_0_k$ = function () {
    return loadMimes();
  };
  _no_name_provided__61.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__62() {
  }
  _no_name_provided__62.prototype.invoke_6wfw3l_k$ = function (it) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = toString_1(trim(isCharSequence(it) ? it : THROW_CCE()));
      break $l$block;
    }
    var line = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = charSequenceLength(line) === 0;
      break $l$block_0;
    }
    if (tmp$ret$1)
      return null;
    else {
    }
    var tmp = new Char(44);
    var index = indexOf$default(line, tmp, 0, false, 6, null);
    var tmp$ret$3;
    $l$block_2: {
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = line;
        break $l$block_1;
      }
      tmp$ret$3 = tmp$ret$2.substring(0, index);
      break $l$block_2;
    }
    var extension = tmp$ret$3;
    var tmp$ret$5;
    $l$block_4: {
      var tmp0_substring_0 = index + 1 | 0;
      var tmp$ret$4;
      $l$block_3: {
        tmp$ret$4 = line;
        break $l$block_3;
      }
      tmp$ret$5 = tmp$ret$4.substring(tmp0_substring_0);
      break $l$block_4;
    }
    var mime = tmp$ret$5;
    return to(toLowerCasePreservingASCIIRules(removePrefix(extension, '.')), toContentType(mime));
  };
  _no_name_provided__62.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_6wfw3l_k$((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__62.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function mimes$factory() {
    return getPropertyCallableRef('mimes', 0, KProperty0, function () {
      return _get_mimes_();
    }, null);
  }
  function _no_name_provided_$factory_44() {
    var i = new _no_name_provided__61();
    return function () {
      return i.invoke_0_k$();
    };
  }
  function _no_name_provided_$factory_45() {
    var i = new _no_name_provided__62();
    return function (p1) {
      return i.invoke_6wfw3l_k$(p1);
    };
  }
  var TOKEN_EXTRA;
  var TOKEN68_EXTRA;
  var token68Pattern;
  var escapeRegex;
  function token68Pattern$init$() {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Regex_init_$Create$('[a-zA-Z0-9\\-._~+/]+=*');
      break $l$block;
    }
    return tmp$ret$0;
  }
  function escapeRegex$init$() {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Regex_init_$Create$('\\\\.');
      break $l$block;
    }
    return tmp$ret$0;
  }
  var CachingProperty;
  function Parser() {
  }
  Parser.$metadata$ = {
    simpleName: 'Parser',
    kind: 'interface',
    interfaces: []
  };
  function Grammar() {
  }
  Grammar.$metadata$ = {
    simpleName: 'Grammar',
    kind: 'class',
    interfaces: []
  };
  function then(_this_, grammar) {
    return new SequenceGrammar(listOf([_this_, grammar]));
  }
  function then_0(_this_, value) {
    return then(_this_, new StringGrammar(value));
  }
  function then_1(_this_, grammar) {
    return then(new StringGrammar(_this_), grammar);
  }
  function atLeastOne(grammar) {
    return new AtLeastOne(grammar);
  }
  function or(_this_, value) {
    return or_0(_this_, new StringGrammar(value));
  }
  function or_0(_this_, grammar) {
    return new OrGrammar(listOf([_this_, grammar]));
  }
  function SequenceGrammar(sourceGrammars) {
    Grammar.call(this);
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = ArrayList_init_$Create$();
        break $l$block;
      }
      var result_1 = tmp$ret$0;
      {
        var tmp0_iterator_1 = sourceGrammars.iterator_0_k$();
        while (tmp0_iterator_1.hasNext_0_k$()) {
          var element_2 = tmp0_iterator_1.next_0_k$();
          {
            if (element_2 instanceof SequenceGrammar) {
              var tmp0_plusAssign_0_4 = element_2._get_grammars__0_k$();
              addAll(result_1, tmp0_plusAssign_0_4);
              Unit_getInstance();
            } else {
              {
                result_1.add_2bq_k$(element_2);
                Unit_getInstance();
              }
            }
          }
        }
      }
      tmp$ret$1 = result_1;
      break $l$block_0;
    }
    tmp._grammars = tmp$ret$1;
  }
  SequenceGrammar.prototype._get_grammars__0_k$ = function () {
    return this._grammars;
  };
  SequenceGrammar.$metadata$ = {
    simpleName: 'SequenceGrammar',
    kind: 'class',
    interfaces: [ComplexGrammar]
  };
  function StringGrammar(value) {
    Grammar.call(this);
    this._value_11 = value;
  }
  StringGrammar.$metadata$ = {
    simpleName: 'StringGrammar',
    kind: 'class',
    interfaces: []
  };
  function AtLeastOne(grammar) {
    Grammar.call(this);
    this._grammar = grammar;
  }
  AtLeastOne.prototype._get_grammar__0_k$ = function () {
    return this._grammar;
  };
  AtLeastOne.$metadata$ = {
    simpleName: 'AtLeastOne',
    kind: 'class',
    interfaces: [SimpleGrammar]
  };
  function OrGrammar(sourceGrammars) {
    Grammar.call(this);
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = ArrayList_init_$Create$();
        break $l$block;
      }
      var result_1 = tmp$ret$0;
      {
        var tmp0_iterator_1 = sourceGrammars.iterator_0_k$();
        while (tmp0_iterator_1.hasNext_0_k$()) {
          var element_2 = tmp0_iterator_1.next_0_k$();
          {
            if (element_2 instanceof OrGrammar) {
              var tmp0_plusAssign_0_4 = element_2._get_grammars__0_k$();
              addAll(result_1, tmp0_plusAssign_0_4);
              Unit_getInstance();
            } else {
              {
                result_1.add_2bq_k$(element_2);
                Unit_getInstance();
              }
            }
          }
        }
      }
      tmp$ret$1 = result_1;
      break $l$block_0;
    }
    tmp._grammars_0 = tmp$ret$1;
  }
  OrGrammar.prototype._get_grammars__0_k$ = function () {
    return this._grammars_0;
  };
  OrGrammar.$metadata$ = {
    simpleName: 'OrGrammar',
    kind: 'class',
    interfaces: [ComplexGrammar]
  };
  function ComplexGrammar() {
  }
  ComplexGrammar.$metadata$ = {
    simpleName: 'ComplexGrammar',
    kind: 'interface',
    interfaces: []
  };
  function SimpleGrammar() {
  }
  SimpleGrammar.$metadata$ = {
    simpleName: 'SimpleGrammar',
    kind: 'interface',
    interfaces: []
  };
  function RawGrammar(value) {
    Grammar.call(this);
    this._value_12 = value;
  }
  RawGrammar.$metadata$ = {
    simpleName: 'RawGrammar',
    kind: 'class',
    interfaces: []
  };
  function to_0(_this_, other) {
    return new RangeGrammar(_this_, other);
  }
  function NamedGrammar() {
  }
  NamedGrammar.$metadata$ = {
    simpleName: 'NamedGrammar',
    kind: 'class',
    interfaces: []
  };
  function MaybeGrammar() {
  }
  MaybeGrammar.$metadata$ = {
    simpleName: 'MaybeGrammar',
    kind: 'class',
    interfaces: [SimpleGrammar]
  };
  function ManyGrammar() {
  }
  ManyGrammar.$metadata$ = {
    simpleName: 'ManyGrammar',
    kind: 'class',
    interfaces: [SimpleGrammar]
  };
  function AnyOfGrammar() {
  }
  AnyOfGrammar.$metadata$ = {
    simpleName: 'AnyOfGrammar',
    kind: 'class',
    interfaces: []
  };
  function RangeGrammar(from, to_1) {
    Grammar.call(this);
    this._from = from;
    this._to = to_1;
  }
  RangeGrammar.$metadata$ = {
    simpleName: 'RangeGrammar',
    kind: 'class',
    interfaces: []
  };
  function _get_digits_() {
    return atLeastOne(_get_digit_());
  }
  function _get_hex_() {
    return or_0(or_0(_get_digit_(), to_0(new Char(65), new Char(70))), to_0(new Char(97), new Char(102)));
  }
  function _get_digit_() {
    return new RawGrammar('\\d');
  }
  function RegexParser(expression, indexes) {
    this._expression = expression;
    this._indexes = indexes;
  }
  RegexParser.$metadata$ = {
    simpleName: 'RegexParser',
    kind: 'class',
    interfaces: [Parser]
  };
  function buildRegexParser(_this_) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      break $l$block;
    }
    var groups = tmp$ret$0;
    var expression = toRegex$default(_this_, groups, 0, false, 6, null)._regex;
    return new RegexParser(Regex_init_$Create$(expression), groups);
  }
  function GrammarRegex_init_$Init$(regexRaw, groupsCountRaw, group, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      groupsCountRaw = 0;
    if (!(($mask0 & 4) === 0))
      group = false;
    GrammarRegex.call($this, regexRaw, groupsCountRaw, group);
    return $this;
  }
  function GrammarRegex_init_$Create$(regexRaw, groupsCountRaw, group, $mask0, $marker) {
    return GrammarRegex_init_$Init$(regexRaw, groupsCountRaw, group, $mask0, $marker, Object.create(GrammarRegex.prototype));
  }
  function GrammarRegex(regexRaw, groupsCountRaw, group) {
    this._regex = group ? '' + '(' + regexRaw + ')' : regexRaw;
    this._groupsCount = group ? groupsCountRaw + 1 | 0 : groupsCountRaw;
  }
  GrammarRegex.$metadata$ = {
    simpleName: 'GrammarRegex',
    kind: 'class',
    interfaces: []
  };
  function toRegex(_this_, groups, offset, shouldGroup) {
    var tmp0_subject = _this_;
    var tmp;
    if (tmp0_subject instanceof StringGrammar) {
      var tmp_0 = Companion_getInstance_8().escape_6wfw3l_k$(_this_._value_11);
      tmp = GrammarRegex_init_$Create$(tmp_0, 0, false, 6, null);
    } else {
      if (tmp0_subject instanceof RawGrammar) {
        tmp = GrammarRegex_init_$Create$(_this_._value_12, 0, false, 6, null);
      } else {
        if (tmp0_subject instanceof NamedGrammar) {
          var tmp_1 = offset + 1 | 0;
          var nested = toRegex$default(_this_._grammar_0, groups, tmp_1, false, 4, null);
          add_0(groups, _this_._name_4, offset);
          tmp = new GrammarRegex(nested._regex, nested._groupsCount, true);
        } else {
          if (isInterface(tmp0_subject, ComplexGrammar)) {
            var expression = StringBuilder_init_$Create$_0();
            var currentOffset = shouldGroup ? offset + 1 | 0 : offset;
            {
              var tmp0_forEachIndexed_0 = _this_._get_grammars__0_k$();
              var index_1 = 0;
              var tmp0_iterator_2 = tmp0_forEachIndexed_0.iterator_0_k$();
              while (tmp0_iterator_2.hasNext_0_k$()) {
                var item_3 = tmp0_iterator_2.next_0_k$();
                {
                  var tmp1_4 = index_1;
                  index_1 = tmp1_4 + 1 | 0;
                  var tmp1__anonymous__5 = checkIndexOverflow(tmp1_4);
                  var current_6 = toRegex(item_3, groups, currentOffset, true);
                  var tmp_2;
                  if (!(tmp1__anonymous__5 === 0)) {
                    tmp_2 = _this_ instanceof OrGrammar;
                  } else {
                    tmp_2 = false;
                  }
                  if (tmp_2) {
                    expression.append_uch40_k$('|');
                    Unit_getInstance();
                  } else {
                  }
                  expression.append_uch40_k$(current_6._regex);
                  Unit_getInstance();
                  currentOffset = currentOffset + current_6._groupsCount | 0;
                }
              }
            }
            var groupsCount = shouldGroup ? (currentOffset - offset | 0) - 1 | 0 : currentOffset - offset | 0;
            tmp = new GrammarRegex(expression.toString(), groupsCount, shouldGroup);
          } else {
            if (isInterface(tmp0_subject, SimpleGrammar)) {
              var tmp1_subject = _this_;
              var tmp_3;
              if (tmp1_subject instanceof MaybeGrammar) {
                tmp_3 = new Char(63);
              } else {
                if (tmp1_subject instanceof ManyGrammar) {
                  tmp_3 = new Char(42);
                } else {
                  if (tmp1_subject instanceof AtLeastOne) {
                    tmp_3 = new Char(43);
                  } else {
                    {
                      var tmp2_error_0 = '' + 'Unsupported simple grammar element: ' + _this_;
                      throw IllegalStateException_init_$Create$(toString_1(tmp2_error_0));
                    }
                  }
                }
              }
              var operator = tmp_3;
              var nested_0 = toRegex(_this_._get_grammar__0_k$(), groups, offset, true);
              var tmp_4 = '' + nested_0._regex + operator;
              tmp = GrammarRegex_init_$Create$(tmp_4, nested_0._groupsCount, false, 4, null);
            } else {
              if (tmp0_subject instanceof AnyOfGrammar) {
                var tmp_5 = '' + '[' + Companion_getInstance_8().escape_6wfw3l_k$(_this_._value_13) + ']';
                tmp = GrammarRegex_init_$Create$(tmp_5, 0, false, 6, null);
              } else {
                if (tmp0_subject instanceof RangeGrammar) {
                  var tmp_6 = '' + '[' + _this_._from + '-' + _this_._to + ']';
                  tmp = GrammarRegex_init_$Create$(tmp_6, 0, false, 6, null);
                } else {
                  {
                    var tmp3_error_0 = '' + 'Unsupported grammar element: ' + _this_;
                    throw IllegalStateException_init_$Create$(toString_1(tmp3_error_0));
                  }
                }
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function toRegex$default(_this_, groups, offset, shouldGroup, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 1;
    if (!(($mask0 & 4) === 0))
      shouldGroup = false;
    return toRegex(_this_, groups, offset, shouldGroup);
  }
  function add_0(_this_, key, value) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = (isInterface(_this_, Map_0) ? _this_ : THROW_CCE()).containsKey_2bw_k$(key);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    if (!tmp$ret$1) {
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = ArrayList_init_$Create$();
        break $l$block_1;
      }
      var tmp0_set_0 = tmp$ret$2;
      _this_.put_1q9pf_k$(key, tmp0_set_0);
      Unit_getInstance();
    } else {
    }
    {
      var tmp1_plusAssign_0 = ensureNotNull(_this_.get_2bw_k$(key));
      tmp1_plusAssign_0.add_2bq_k$(value);
      Unit_getInstance();
    }
  }
  var ChunkSizeBufferPool;
  var CrLf;
  var LastChunkBytes;
  function _no_name_provided__63() {
    DefaultPool.call(this, 2048);
  }
  _no_name_provided__63.prototype.produceInstance_0_k$ = function () {
    return StringBuilder_init_$Create$(128);
  };
  _no_name_provided__63.prototype.clearInstance_tyr4jb_k$ = function (instance) {
    var tmp$ret$0;
    $l$block: {
      {
      }
      {
        instance.clear_0_k$();
        Unit_getInstance();
      }
      tmp$ret$0 = instance;
      break $l$block;
    }
    return tmp$ret$0;
  };
  _no_name_provided__63.prototype.clearInstance_2c5_k$ = function (instance) {
    return this.clearInstance_tyr4jb_k$(instance instanceof StringBuilder ? instance : THROW_CCE());
  };
  _no_name_provided__63.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function ChunkSizeBufferPool$init$() {
    return new _no_name_provided__63();
  }
  function CrLf$init$() {
    var tmp$ret$0;
    $l$block: {
      var tmp0_toByteArray_0 = Charsets_getInstance()._UTF_8;
      tmp$ret$0 = encodeToByteArray(tmp0_toByteArray_0.newEncoder_0_k$(), '\r\n', 0, '\r\n'.length);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function LastChunkBytes$init$() {
    var tmp$ret$0;
    $l$block: {
      var tmp0_toByteArray_0 = Charsets_getInstance()._UTF_8;
      tmp$ret$0 = encodeToByteArray(tmp0_toByteArray_0.newEncoder_0_k$(), '0\r\n\r\n', 0, '0\r\n\r\n'.length);
      break $l$block;
    }
    return tmp$ret$0;
  }
  var EMPTY_INT_ARRAY;
  var IntArrayPool;
  function _no_name_provided__64() {
    DefaultPool.call(this, 1000);
  }
  _no_name_provided__64.prototype.produceInstance_0_k$ = function () {
    return new Int32Array(512);
  };
  _no_name_provided__64.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function IntArrayPool$init$() {
    return new _no_name_provided__64();
  }
  var hostForbiddenSymbols;
  var versions;
  function build($this, resultList, from, maxLength, idx, length, charAt) {
    {
      var tmp$ret$4;
      $l$block_3: {
        var tmp$ret$3;
        $l$block_2: {
          var tmp0_groupByTo_0_1 = LinkedHashMap_init_$Create$();
          var tmp0_iterator_1_2 = from.iterator_0_k$();
          while (tmp0_iterator_1_2.hasNext_0_k$()) {
            var element_2_3 = tmp0_iterator_1_2.next_0_k$();
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = charAt(element_2_3, idx);
              break $l$block;
            }
            var key_3_4 = tmp$ret$0;
            var tmp$ret$2;
            $l$block_1: {
              var value_1_6 = tmp0_groupByTo_0_1.get_2bw_k$(key_3_4);
              var tmp;
              if (value_1_6 == null) {
                var tmp$ret$1;
                $l$block_0: {
                  tmp$ret$1 = ArrayList_init_$Create$();
                  break $l$block_0;
                }
                var answer_2_7 = tmp$ret$1;
                tmp0_groupByTo_0_1.put_1q9pf_k$(key_3_4, answer_2_7);
                Unit_getInstance();
                tmp = answer_2_7;
              } else {
                tmp = value_1_6;
              }
              tmp$ret$2 = tmp;
              break $l$block_1;
            }
            var list_4_5 = tmp$ret$2;
            list_4_5.add_2bq_k$(element_2_3);
            Unit_getInstance();
          }
          tmp$ret$3 = tmp0_groupByTo_0_1;
          break $l$block_2;
        }
        tmp$ret$4 = tmp$ret$3;
        break $l$block_3;
      }
      var tmp0_forEach_0 = tmp$ret$4;
      var tmp$ret$5;
      $l$block_4: {
        tmp$ret$5 = tmp0_forEach_0._get_entries__0_k$().iterator_0_k$();
        break $l$block_4;
      }
      var tmp0_iterator_1 = tmp$ret$5;
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        {
          var tmp$ret$6;
          $l$block_5: {
            tmp$ret$6 = element_2._get_key__0_k$();
            break $l$block_5;
          }
          var ch_4 = tmp$ret$6;
          var tmp$ret$7;
          $l$block_6: {
            tmp$ret$7 = element_2._get_value__0_k$();
            break $l$block_6;
          }
          var list_5 = tmp$ret$7;
          var nextIdx_6 = idx + 1 | 0;
          var children_7 = ArrayList_init_$Create$();
          var tmp_0 = Companion_getInstance_24();
          var tmp$ret$10;
          $l$block_9: {
            var tmp$ret$9;
            $l$block_8: {
              var tmp0_filterTo_0_1_8 = ArrayList_init_$Create$();
              var tmp0_iterator_1_2_9 = list_5.iterator_0_k$();
              while (tmp0_iterator_1_2_9.hasNext_0_k$()) {
                var element_2_3_10 = tmp0_iterator_1_2_9.next_0_k$();
                var tmp$ret$8;
                $l$block_7: {
                  tmp$ret$8 = length(element_2_3_10) > nextIdx_6;
                  break $l$block_7;
                }
                if (tmp$ret$8) {
                  tmp0_filterTo_0_1_8.add_2bq_k$(element_2_3_10);
                  Unit_getInstance();
                } else {
                }
              }
              tmp$ret$9 = tmp0_filterTo_0_1_8;
              break $l$block_8;
            }
            tmp$ret$10 = tmp$ret$9;
            break $l$block_9;
          }
          build(tmp_0, children_7, tmp$ret$10, maxLength, nextIdx_6, length, charAt);
          children_7.trimToSize_sv8swh_k$();
          var tmp$ret$13;
          $l$block_12: {
            var tmp$ret$12;
            $l$block_11: {
              var tmp0_filterTo_0_1_11 = ArrayList_init_$Create$();
              var tmp0_iterator_1_2_12 = list_5.iterator_0_k$();
              while (tmp0_iterator_1_2_12.hasNext_0_k$()) {
                var element_2_3_13 = tmp0_iterator_1_2_12.next_0_k$();
                var tmp$ret$11;
                $l$block_10: {
                  tmp$ret$11 = length(element_2_3_13) === nextIdx_6;
                  break $l$block_10;
                }
                if (tmp$ret$11) {
                  tmp0_filterTo_0_1_11.add_2bq_k$(element_2_3_13);
                  Unit_getInstance();
                } else {
                }
              }
              tmp$ret$12 = tmp0_filterTo_0_1_11;
              break $l$block_11;
            }
            tmp$ret$13 = tmp$ret$12;
            break $l$block_12;
          }
          resultList.add_2bq_k$(new Node_0(ch_4, tmp$ret$13, children_7));
          Unit_getInstance();
        }
      }
    }
  }
  function _no_name_provided__65() {
  }
  _no_name_provided__65.prototype.invoke_2c5_k$ = function (it) {
    return charSequenceLength(it);
  };
  _no_name_provided__65.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_2c5_k$((!(p1 == null) ? isCharSequence(p1) : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__65.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__66() {
  }
  _no_name_provided__66.prototype.invoke_et4ano_k$ = function (s, idx) {
    return charSequenceGet(s, idx);
  };
  _no_name_provided__66.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isCharSequence(p1) : false) ? p1 : THROW_CCE();
    return this.invoke_et4ano_k$(tmp, (!(p2 == null) ? typeof p2 === 'number' : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__66.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function Node_0(ch, exact, children) {
    this._ch = ch;
    this._exact = exact;
    this._children = children;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = 256;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
      break $l$block;
    }
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$3;
      $l$block_4: {
        var tmp$ret$2;
        $l$block_3: {
          var tmp0_singleOrNull_0 = this._children;
          var single_1_0 = null;
          var found_2 = false;
          var tmp0_iterator_3 = tmp0_singleOrNull_0.iterator_0_k$();
          while (tmp0_iterator_3.hasNext_0_k$()) {
            var element_4 = tmp0_iterator_3.next_0_k$();
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = element_4._ch.toInt_0_k$() === tmp_3;
              break $l$block_0;
            }
            if (tmp$ret$1) {
              if (found_2) {
                tmp$ret$2 = null;
                break $l$block_3;
              }single_1_0 = element_4;
              found_2 = true;
            } else {
            }
          }
          if (!found_2) {
            tmp$ret$2 = null;
            break $l$block_3;
          }tmp$ret$2 = single_1_0;
          break $l$block_3;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_4;
      }
      tmp_2[tmp_3] = tmp$ret$3;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp._array_0 = tmp_2;
  }
  Node_0.$metadata$ = {
    simpleName: 'Node',
    kind: 'class',
    interfaces: []
  };
  function Companion_25() {
    Companion_instance_24 = this;
  }
  Companion_25.prototype.build_swg7i5_k$ = function (from) {
    var tmp = _no_name_provided_$factory_46();
    return this.build_w791lz_k$(from, tmp, _no_name_provided_$factory_47());
  };
  Companion_25.prototype.build_w791lz_k$ = function (from, length, charAt) {
    var tmp$ret$0;
    $l$block_1: {
      var iterator_1 = from.iterator_0_k$();
      if (!iterator_1.hasNext_0_k$()) {
        tmp$ret$0 = null;
        break $l$block_1;
      }var maxElem_2 = iterator_1.next_0_k$();
      if (!iterator_1.hasNext_0_k$()) {
        tmp$ret$0 = maxElem_2;
        break $l$block_1;
      }var maxValue_3 = length(maxElem_2);
      do {
        var e_4 = iterator_1.next_0_k$();
        var v_5 = length(e_4);
        if (compareTo(maxValue_3, v_5) < 0) {
          maxElem_2 = e_4;
          maxValue_3 = v_5;
        }}
       while (iterator_1.hasNext_0_k$());
      tmp$ret$0 = maxElem_2;
      break $l$block_1;
    }
    var tmp0_safe_receiver = tmp$ret$0;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block_2: {
        {
        }
        tmp$ret$1 = length(tmp0_safe_receiver);
        break $l$block_2;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw NoSuchElementException_init_$Create$_0('Unable to build char tree from an empty list');
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var maxLen = tmp_0;
    var tmp$ret$2;
    $l$block_6: {
      var tmp_1;
      if (isInterface(from, Collection)) {
        tmp_1 = from.isEmpty_0_k$();
      } else {
        {
          tmp_1 = false;
        }
      }
      if (tmp_1) {
        tmp$ret$2 = false;
        break $l$block_6;
      } else {
      }
      var tmp0_iterator_1 = from.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$3;
        $l$block_4: {
          tmp$ret$3 = length(element_2) === 0;
          break $l$block_4;
        }
        if (tmp$ret$3) {
          tmp$ret$2 = true;
          break $l$block_6;
        } else {
        }
      }
      tmp$ret$2 = false;
      break $l$block_6;
    }
    if (tmp$ret$2)
      throw IllegalArgumentException_init_$Create$('There should be no empty entries');
    else {
    }
    var root = ArrayList_init_$Create$();
    build(this, root, from, maxLen, 0, length, charAt);
    root.trimToSize_sv8swh_k$();
    return new AsciiCharTree(new Node_0(new Char(0), emptyList(), root));
  };
  Companion_25.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_24;
  function Companion_getInstance_24() {
    if (Companion_instance_24 == null)
      new Companion_25();
    return Companion_instance_24;
  }
  function AsciiCharTree(root) {
    Companion_getInstance_24();
    this._root = root;
  }
  AsciiCharTree.$metadata$ = {
    simpleName: 'AsciiCharTree',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_46() {
    var i = new _no_name_provided__65();
    return function (p1) {
      return i.invoke_2c5_k$(p1);
    };
  }
  function _no_name_provided_$factory_47() {
    var i = new _no_name_provided__66();
    return function (p1, p2) {
      return i.invoke_et4ano_k$(p1, p2);
    };
  }
  var CharArrayPool;
  function _no_name_provided__67() {
    DefaultPool.call(this, 4096);
  }
  _no_name_provided__67.prototype.produceInstance_0_k$ = function () {
    return charArray(2048);
  };
  _no_name_provided__67.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function CharArrayPool$init$() {
    return new _no_name_provided__67();
  }
  var DefaultHttpMethods;
  var HexTable;
  var HexLetterTable;
  function _no_name_provided__68() {
  }
  _no_name_provided__68.prototype.invoke_5w734a_k$ = function (it) {
    return it._value_10.length;
  };
  _no_name_provided__68.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_5w734a_k$(p1 instanceof HttpMethod ? p1 : THROW_CCE());
  };
  _no_name_provided__68.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__69() {
  }
  _no_name_provided__69.prototype.invoke_b7rxv9_k$ = function (m, idx) {
    return charSequenceGet(m._value_10, idx);
  };
  _no_name_provided__69.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = p1 instanceof HttpMethod ? p1 : THROW_CCE();
    return this.invoke_b7rxv9_k$(tmp, (!(p2 == null) ? typeof p2 === 'number' : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__69.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_48() {
    var i = new _no_name_provided__68();
    return function (p1) {
      return i.invoke_5w734a_k$(p1);
    };
  }
  function _no_name_provided_$factory_49() {
    var i = new _no_name_provided__69();
    return function (p1, p2) {
      return i.invoke_b7rxv9_k$(p1, p2);
    };
  }
  function DefaultHttpMethods$init$() {
    var tmp = Companion_getInstance_24();
    var tmp_0 = Companion_getInstance_23()._DefaultMethods;
    var tmp_1 = _no_name_provided_$factory_48();
    return tmp.build_w791lz_k$(tmp_0, tmp_1, _no_name_provided_$factory_49());
  }
  function HexTable$init$() {
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_map_0 = numberRangeToNumber(0, 255);
      var tmp$ret$3;
      $l$block_2: {
        var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0, 10));
        var inductionVariable = tmp0_map_0._get_first__0_k$();
        var last_0 = tmp0_map_0._get_last__0_k$();
        if (inductionVariable <= last_0)
          do {
            var item_2_3 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$2;
            $l$block_1: {
              var tmp;
              if (48 <= item_2_3 ? item_2_3 <= 57 : false) {
                tmp = numberToLong(item_2_3).minus_wiekkq_k$(new Long(48, 0));
              } else if (toLong(item_2_3).compareTo_wiekkq_k$(new Long(97, 0)) >= 0 ? toLong(item_2_3).compareTo_wiekkq_k$(new Long(102, 0)) <= 0 : false) {
                var tmp$ret$0;
                $l$block: {
                  var tmp0_plus_0_5 = numberToLong(item_2_3).minus_wiekkq_k$(new Long(97, 0));
                  tmp$ret$0 = tmp0_plus_0_5.plus_wiekkq_k$(new Long(10, 0));
                  break $l$block;
                }
                tmp = tmp$ret$0;
              } else if (toLong(item_2_3).compareTo_wiekkq_k$(new Long(65, 0)) >= 0 ? toLong(item_2_3).compareTo_wiekkq_k$(new Long(70, 0)) <= 0 : false) {
                var tmp$ret$1;
                $l$block_0: {
                  var tmp1_plus_0_6 = numberToLong(item_2_3).minus_wiekkq_k$(new Long(65, 0));
                  tmp$ret$1 = tmp1_plus_0_6.plus_wiekkq_k$(new Long(10, 0));
                  break $l$block_0;
                }
                tmp = tmp$ret$1;
              } else {
                tmp = new Long(-1, -1);
              }
              tmp$ret$2 = tmp;
              break $l$block_1;
            }
            tmp0_mapTo_0_1.add_2bq_k$(tmp$ret$2);
            Unit_getInstance();
          }
           while (!(item_2_3 === last_0));
        tmp$ret$3 = tmp0_mapTo_0_1;
        break $l$block_2;
      }
      tmp$ret$4 = tmp$ret$3;
      break $l$block_3;
    }
    return toLongArray(tmp$ret$4);
  }
  function HexLetterTable$init$() {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_map_0 = numberRangeToNumber(0, 15);
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0, 10));
        var inductionVariable = tmp0_map_0._get_first__0_k$();
        var last_0 = tmp0_map_0._get_last__0_k$();
        if (inductionVariable <= last_0)
          do {
            var item_2_3 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = item_2_3 < 10 ? toByte(48 + item_2_3 | 0) : toByte((new Char(97)).plus_ha5a7z_k$(item_2_3).minus_ha5a7z_k$(10).toInt_0_k$());
              break $l$block;
            }
            tmp0_mapTo_0_1.add_2bq_k$(tmp$ret$0);
            Unit_getInstance();
          }
           while (!(item_2_3 === last_0));
        tmp$ret$1 = tmp0_mapTo_0_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return toByteArray(tmp$ret$2);
  }
  var CALL_COROUTINE;
  var ENGINE_CAPABILITIES_KEY;
  var DEFAULT_CAPABILITIES;
  function HttpClientEngineCapability() {
  }
  HttpClientEngineCapability.$metadata$ = {
    simpleName: 'HttpClientEngineCapability',
    kind: 'interface',
    interfaces: []
  };
  var KTOR_DEFAULT_USER_AGENT;
  var UploadProgressListenerAttributeKey;
  var DownloadProgressListenerAttributeKey;
  var ValidateMark;
  var ExpectSuccessAttributeKey;
  var FEATURE_INSTALLED_LIST;
  function HttpClientFeature() {
  }
  HttpClientFeature.$metadata$ = {
    simpleName: 'HttpClientFeature',
    kind: 'interface',
    interfaces: []
  };
  var ALLOWED_FOR_REDIRECT;
  function Feature() {
    Feature_instance = this;
    this._key_2 = new AttributeKey('TimeoutFeature');
    this._INFINITE_TIMEOUT_MS = new Long(-1, 2147483647);
  }
  Feature.$metadata$ = {
    simpleName: 'Feature',
    kind: 'object',
    interfaces: [HttpClientFeature, HttpClientEngineCapability]
  };
  var Feature_instance;
  function Feature_getInstance() {
    if (Feature_instance == null)
      new Feature();
    return Feature_instance;
  }
  var REQUEST_EXTENSIONS_KEY;
  var RN_BYTES;
  function RN_BYTES$init$() {
    var tmp$ret$0;
    $l$block: {
      var tmp0_toByteArray_0 = Charsets_getInstance()._UTF_8;
      tmp$ret$0 = encodeToByteArray(tmp0_toByteArray_0.newEncoder_0_k$(), '\r\n', 0, '\r\n'.length);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function isHumanImage(image) {
    var tmp = GlobalScope_getInstance();
    return promise$default(tmp, null, null, _no_name_provided_$factory_50(image, null), 3, null);
  }
  function invoke$outlinedJsCode$(predictions) {
    return predictions.length;
  }
  function _no_name_provided__70($image, resultContinuation) {
    this._$image = $image;
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__70.prototype.invoke_mzru1z_k$ = function ($this$promise, $cont) {
    var tmp = this.create_y6imfn_k$($this$promise, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_0_k$();
  };
  _no_name_provided__70.prototype.invoke_20e8_k$ = function (p1, $cont) {
    return this.invoke_mzru1z_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  _no_name_provided__70.prototype.doResume_0_k$ = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 3;
            console.log('Before load');
            this._state_0 = 1;
            suspendResult = await_0(load_0(), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            this._model0 = suspendResult;
            console.log('After load');
            this._state_0 = 2;
            suspendResult = await_0(this._model0.estimateFaces(this._$image, false), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 2:
            var predictions = suspendResult;
            console.log('After estimation');
            var tmp_0 = console;
            tmp_0.log('typeof', invoke$outlinedJsCode$(predictions));
            var tmp0_isNotEmpty_0 = predictions;
            return !(tmp0_isNotEmpty_0.length === 0);
          case 3:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 3) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  _no_name_provided__70.prototype.create_y6imfn_k$ = function ($this$promise, completion) {
    var i = new _no_name_provided__70(this._$image, completion);
    i._$this$promise = $this$promise;
    return i;
  };
  _no_name_provided__70.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function _no_name_provided_$factory_50($image, resultContinuation) {
    var i = new _no_name_provided__70($image, resultContinuation);
    var l = function (p1, $cont) {
      return i.invoke_mzru1z_k$(p1, $cont);
    };
    l.$arity = 1;
    return l;
  }
  CombinedContext.prototype.plus_d7pszg_k$ = CoroutineContext.prototype.plus_d7pszg_k$;
  AbstractCoroutineContextElement.prototype.get_9uvjra_k$ = Element_0.prototype.get_9uvjra_k$;
  AbstractCoroutineContextElement.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  AbstractCoroutineContextElement.prototype.minusKey_djuxjq_k$ = Element_0.prototype.minusKey_djuxjq_k$;
  AbstractCoroutineContextElement.prototype.plus_d7pszg_k$ = CoroutineContext.prototype.plus_d7pszg_k$;
  InternalHashCodeMap.prototype.createJsMap_0_k$ = InternalMap.prototype.createJsMap_0_k$;
  JobSupport.prototype.invokeOnCompletion$default_n4h7x8_k$ = Job.prototype.invokeOnCompletion$default_n4h7x8_k$;
  JobSupport.prototype.plus_d7pszg_k$ = CoroutineContext.prototype.plus_d7pszg_k$;
  JobSupport.prototype.get_9uvjra_k$ = Element_0.prototype.get_9uvjra_k$;
  JobSupport.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  JobSupport.prototype.minusKey_djuxjq_k$ = Element_0.prototype.minusKey_djuxjq_k$;
  AbstractCoroutine.prototype.invokeOnCompletion$default_n4h7x8_k$ = Job.prototype.invokeOnCompletion$default_n4h7x8_k$;
  AbstractCoroutine.prototype.plus_d7pszg_k$ = CoroutineContext.prototype.plus_d7pszg_k$;
  AbstractCoroutine.prototype.get_9uvjra_k$ = Element_0.prototype.get_9uvjra_k$;
  AbstractCoroutine.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  AbstractCoroutine.prototype.minusKey_djuxjq_k$ = Element_0.prototype.minusKey_djuxjq_k$;
  DeferredCoroutine.prototype.invokeOnCompletion$default_n4h7x8_k$ = Job.prototype.invokeOnCompletion$default_n4h7x8_k$;
  DeferredCoroutine.prototype.plus_d7pszg_k$ = CoroutineContext.prototype.plus_d7pszg_k$;
  DeferredCoroutine.prototype.get_9uvjra_k$ = Element_0.prototype.get_9uvjra_k$;
  DeferredCoroutine.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  DeferredCoroutine.prototype.minusKey_djuxjq_k$ = Element_0.prototype.minusKey_djuxjq_k$;
  LazyDeferredCoroutine.prototype.invokeOnCompletion$default_n4h7x8_k$ = Job.prototype.invokeOnCompletion$default_n4h7x8_k$;
  LazyDeferredCoroutine.prototype.plus_d7pszg_k$ = CoroutineContext.prototype.plus_d7pszg_k$;
  LazyDeferredCoroutine.prototype.get_9uvjra_k$ = Element_0.prototype.get_9uvjra_k$;
  LazyDeferredCoroutine.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  LazyDeferredCoroutine.prototype.minusKey_djuxjq_k$ = Element_0.prototype.minusKey_djuxjq_k$;
  CoroutineDispatcher.prototype.get_9uvjra_k$ = ContinuationInterceptor.prototype.get_9uvjra_k$;
  CoroutineDispatcher.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  CoroutineDispatcher.prototype.minusKey_djuxjq_k$ = ContinuationInterceptor.prototype.minusKey_djuxjq_k$;
  CoroutineDispatcher.prototype.plus_d7pszg_k$ = CoroutineContext.prototype.plus_d7pszg_k$;
  CoroutineName.prototype.get_9uvjra_k$ = Element_0.prototype.get_9uvjra_k$;
  CoroutineName.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  CoroutineName.prototype.minusKey_djuxjq_k$ = Element_0.prototype.minusKey_djuxjq_k$;
  CoroutineName.prototype.plus_d7pszg_k$ = CoroutineContext.prototype.plus_d7pszg_k$;
  EventLoop.prototype.plus_d7pszg_k$ = CoroutineContext.prototype.plus_d7pszg_k$;
  EventLoop.prototype.get_9uvjra_k$ = ContinuationInterceptor.prototype.get_9uvjra_k$;
  EventLoop.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  EventLoop.prototype.minusKey_djuxjq_k$ = ContinuationInterceptor.prototype.minusKey_djuxjq_k$;
  MainCoroutineDispatcher.prototype.plus_d7pszg_k$ = CoroutineContext.prototype.plus_d7pszg_k$;
  MainCoroutineDispatcher.prototype.get_9uvjra_k$ = ContinuationInterceptor.prototype.get_9uvjra_k$;
  MainCoroutineDispatcher.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  MainCoroutineDispatcher.prototype.minusKey_djuxjq_k$ = ContinuationInterceptor.prototype.minusKey_djuxjq_k$;
  Unconfined.prototype.plus_d7pszg_k$ = CoroutineContext.prototype.plus_d7pszg_k$;
  Unconfined.prototype.get_9uvjra_k$ = ContinuationInterceptor.prototype.get_9uvjra_k$;
  Unconfined.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  Unconfined.prototype.minusKey_djuxjq_k$ = ContinuationInterceptor.prototype.minusKey_djuxjq_k$;
  JsMainDispatcher.prototype.plus_d7pszg_k$ = CoroutineContext.prototype.plus_d7pszg_k$;
  JsMainDispatcher.prototype.get_9uvjra_k$ = ContinuationInterceptor.prototype.get_9uvjra_k$;
  JsMainDispatcher.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  JsMainDispatcher.prototype.minusKey_djuxjq_k$ = ContinuationInterceptor.prototype.minusKey_djuxjq_k$;
  UnconfinedEventLoop.prototype.plus_d7pszg_k$ = CoroutineContext.prototype.plus_d7pszg_k$;
  UnconfinedEventLoop.prototype.get_9uvjra_k$ = ContinuationInterceptor.prototype.get_9uvjra_k$;
  UnconfinedEventLoop.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  UnconfinedEventLoop.prototype.minusKey_djuxjq_k$ = ContinuationInterceptor.prototype.minusKey_djuxjq_k$;
  SetTimeoutBasedDispatcher.prototype.plus_d7pszg_k$ = CoroutineContext.prototype.plus_d7pszg_k$;
  SetTimeoutBasedDispatcher.prototype.get_9uvjra_k$ = ContinuationInterceptor.prototype.get_9uvjra_k$;
  SetTimeoutBasedDispatcher.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  SetTimeoutBasedDispatcher.prototype.minusKey_djuxjq_k$ = ContinuationInterceptor.prototype.minusKey_djuxjq_k$;
  NodeDispatcher.prototype.plus_d7pszg_k$ = CoroutineContext.prototype.plus_d7pszg_k$;
  NodeDispatcher.prototype.get_9uvjra_k$ = ContinuationInterceptor.prototype.get_9uvjra_k$;
  NodeDispatcher.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  NodeDispatcher.prototype.minusKey_djuxjq_k$ = ContinuationInterceptor.prototype.minusKey_djuxjq_k$;
  SetTimeoutDispatcher.prototype.plus_d7pszg_k$ = CoroutineContext.prototype.plus_d7pszg_k$;
  SetTimeoutDispatcher.prototype.get_9uvjra_k$ = ContinuationInterceptor.prototype.get_9uvjra_k$;
  SetTimeoutDispatcher.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  SetTimeoutDispatcher.prototype.minusKey_djuxjq_k$ = ContinuationInterceptor.prototype.minusKey_djuxjq_k$;
  WindowDispatcher.prototype.plus_d7pszg_k$ = CoroutineContext.prototype.plus_d7pszg_k$;
  WindowDispatcher.prototype.get_9uvjra_k$ = ContinuationInterceptor.prototype.get_9uvjra_k$;
  WindowDispatcher.prototype.fold_cq605b_k$ = Element_0.prototype.fold_cq605b_k$;
  WindowDispatcher.prototype.minusKey_djuxjq_k$ = ContinuationInterceptor.prototype.minusKey_djuxjq_k$;
  functionClasses = functionClasses$init$();
  buf = new ArrayBuffer(8);
  bufFloat64 = bufFloat64$init$();
  bufInt32 = bufInt32$init$();
  lowIndex = lowIndex$init$();
  highIndex = 1 - lowIndex | 0;
  ZERO = fromInt(0);
  ONE = fromInt(1);
  NEG_ONE = fromInt(-1);
  MAX_VALUE = new Long(-1, 2147483647);
  MIN_VALUE = new Long(0, -2147483648);
  TWO_PWR_24_ = fromInt(16777216);
  propertyRefClassMetadataCache = propertyRefClassMetadataCache$init$();
  COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
  COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
  COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
  TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
  SEALED = new Symbol('SEALED');
  EMPTY_NEW = new Empty(false);
  EMPTY_ACTIVE = new Empty(true);
  UNDEFINED = new Symbol('UNDEFINED');
  REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
  counter = 0;
  DEBUG = false;
  DefaultChunkedBufferPool = DefaultBufferPool_init_$Create$(0, 0, null, 7, null);
  EmptyByteArray = new Int8Array(0);
  ByteArrayPool = ByteArrayPool$init$();
  isLittleEndianPlatform = Companion_getInstance_19().nativeOrder_0_k$() === ByteOrder_LITTLE_ENDIAN_getInstance();
  PACKET_MAX_COPY_SIZE = 200;
  ENCODING_ALIASES = setOf(['ansi_x3.4-1968', 'ascii', 'cp1252', 'cp819', 'csisolatin1', 'ibm819', 'iso-8859-1', 'iso-ir-100', 'iso8859-1', 'iso88591', 'iso_8859-1', 'iso_8859-1:1987', 'l1', 'latin1', 'us-ascii', 'windows-1252', 'x-cp1252']);
  REPLACEMENT = REPLACEMENT$init$();
  WIN1252_TABLE = WIN1252_TABLE$init$();
  BASE64_INVERSE_ALPHABET = BASE64_INVERSE_ALPHABET$init$();
  digits = toCharArray('0123456789abcdef');
  _crypto$delegate = lazy(_no_name_provided_$factory_38());
  URL_ALPHABET = URL_ALPHABET$init$();
  URL_ALPHABET_CHARS = plus(plus_0((new Char(97)).rangeTo_wi8o78_k$(new Char(122)), (new Char(65)).rangeTo_wi8o78_k$(new Char(90))), (new Char(48)).rangeTo_wi8o78_k$(new Char(57)));
  HEX_ALPHABET = plus(plus_0((new Char(97)).rangeTo_wi8o78_k$(new Char(102)), (new Char(65)).rangeTo_wi8o78_k$(new Char(70))), (new Char(48)).rangeTo_wi8o78_k$(new Char(57)));
  URL_PROTOCOL_PART = URL_PROTOCOL_PART$init$();
  VALID_PATH_PART = listOf([new Char(58), new Char(64), new Char(33), new Char(36), new Char(38), new Char(39), new Char(40), new Char(41), new Char(42), new Char(43), new Char(44), new Char(59), new Char(61), new Char(45), new Char(46), new Char(95), new Char(126)]);
  OAUTH_SYMBOLS = OAUTH_SYMBOLS$init$();
  LETTERS_AND_NUMBERS = plus_1(plus_1(toSet_0((new Char(97)).rangeTo_wi8o78_k$(new Char(122))), toSet_0((new Char(65)).rangeTo_wi8o78_k$(new Char(90)))), toSet_0((new Char(48)).rangeTo_wi8o78_k$(new Char(57))));
  TOKENS = plus_1(setOf([new Char(33), new Char(35), new Char(37), new Char(38), new Char(39), new Char(42), new Char(43), new Char(45), new Char(46), new Char(94), new Char(95), new Char(96), new Char(124), new Char(126)]), LETTERS_AND_NUMBERS);
  loweredPartNames = setOf(['max-age', 'expires', 'domain', 'path', 'secure', 'httponly', '$x-enc']);
  clientCookieHeaderPattern = clientCookieHeaderPattern$init$();
  cookieCharsShouldBeEscaped = setOf([new Char(59), new Char(44), new Char(34)]);
  HTTP_DATE_FORMATS = listOf(['***, dd MMM YYYY hh:mm:ss zzz', '****, dd-MMM-YYYY hh:mm:ss zzz', '*** MMM d hh:mm:ss YYYY', '***, dd-MMM-YYYY hh:mm:ss zzz', '***, dd-MMM-YYYY hh-mm-ss zzz', '***, dd MMM YYYY hh:mm:ss zzz', '*** dd-MMM-YYYY hh:mm:ss zzz', '*** dd MMM YYYY hh:mm:ss zzz', '*** dd-MMM-YYYY hh-mm-ss zzz', '***,dd-MMM-YYYY hh:mm:ss zzz', '*** MMM d YYYY hh:mm:ss zzz']);
  contentTypesByExtensions$delegate = lazy(_no_name_provided_$factory_39());
  extensionsByContentType$delegate = lazy(_no_name_provided_$factory_40());
  HeaderFieldValueSeparators = setOf([new Char(40), new Char(41), new Char(60), new Char(62), new Char(64), new Char(44), new Char(59), new Char(58), new Char(92), new Char(34), new Char(47), new Char(91), new Char(93), new Char(63), new Char(61), new Char(123), new Char(125), new Char(32), new Char(9), new Char(10), new Char(13)]);
  IPv4address = then(then_0(then(then_0(then(then_0(_get_digits_(), '.'), _get_digits_()), '.'), _get_digits_()), '.'), _get_digits_());
  IPv6address = then_0(then_1('[', atLeastOne(or(_get_hex_(), ':'))), ']');
  IP_PARSER = buildRegexParser(or_0(IPv4address, IPv6address));
  mimes$delegate = lazy(_no_name_provided_$factory_44());
  TOKEN_EXTRA = setOf([new Char(33), new Char(35), new Char(36), new Char(37), new Char(38), new Char(39), new Char(42), new Char(43), new Char(45), new Char(46), new Char(94), new Char(95), new Char(96), new Char(124), new Char(126)]);
  TOKEN68_EXTRA = setOf([new Char(45), new Char(46), new Char(95), new Char(126), new Char(43), new Char(47)]);
  token68Pattern = token68Pattern$init$();
  escapeRegex = escapeRegex$init$();
  CachingProperty = new AttributeKey('Caching');
  ChunkSizeBufferPool = ChunkSizeBufferPool$init$();
  CrLf = CrLf$init$();
  LastChunkBytes = LastChunkBytes$init$();
  EMPTY_INT_ARRAY = new Int32Array(0);
  IntArrayPool = IntArrayPool$init$();
  hostForbiddenSymbols = setOf([new Char(47), new Char(63), new Char(35), new Char(64)]);
  versions = Companion_getInstance_24().build_swg7i5_k$(listOf(['HTTP/1.0', 'HTTP/1.1']));
  CharArrayPool = CharArrayPool$init$();
  DefaultHttpMethods = DefaultHttpMethods$init$();
  HexTable = HexTable$init$();
  HexLetterTable = HexLetterTable$init$();
  CALL_COROUTINE = new CoroutineName('call-context');
  ENGINE_CAPABILITIES_KEY = new AttributeKey('EngineCapabilities');
  DEFAULT_CAPABILITIES = setOf_0(Feature_getInstance());
  KTOR_DEFAULT_USER_AGENT = 'Ktor client';
  UploadProgressListenerAttributeKey = new AttributeKey('UploadProgressListenerAttributeKey');
  DownloadProgressListenerAttributeKey = new AttributeKey('DownloadProgressListenerAttributeKey');
  ValidateMark = new AttributeKey('ValidateMark');
  ExpectSuccessAttributeKey = new AttributeKey('ExpectSuccessAttributeKey');
  FEATURE_INSTALLED_LIST = new AttributeKey('ApplicationFeatureRegistry');
  ALLOWED_FOR_REDIRECT = setOf([Companion_getInstance_23()._Get, Companion_getInstance_23()._Head]);
  REQUEST_EXTENSIONS_KEY = new AttributeKey('Websocket extensions');
  RN_BYTES = RN_BYTES$init$();
  var $kotlinx = _.kotlinx || (_.kotlinx = {});
  var $kotlinx$atomicfu = $kotlinx.atomicfu || ($kotlinx.atomicfu = {});
  $kotlinx$atomicfu.atomic$ref$ = atomic_2;
  $kotlinx$atomicfu.atomic$boolean$ = atomic_4;
  $kotlinx$atomicfu.atomic$int$ = atomic_6;
  $kotlinx$atomicfu.atomic$long$ = atomic_8;
  var $io = _.io || (_.io = {});
  var $io$ktor = $io.ktor || ($io.ktor = {});
  var $io$ktor$util = $io$ktor.util || ($io$ktor.util = {});
  $io$ktor$util.AttributesJsFn = Attributes_0;
  _.isHumanImage = isHumanImage;
  return _;
}));

//# sourceMappingURL=ImageValidationLib.js.map