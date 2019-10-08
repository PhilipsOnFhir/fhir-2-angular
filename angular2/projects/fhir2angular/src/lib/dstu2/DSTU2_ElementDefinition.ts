import { DSTU2_Address } from './DSTU2_Address'
import { DSTU2_Annotation } from './DSTU2_Annotation'
import { DSTU2_Attachment } from './DSTU2_Attachment'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_ContactPoint } from './DSTU2_ContactPoint'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'
import { DSTU2_ElementDefinition_Base } from './DSTU2_ElementDefinition_Base'
import { DSTU2_ElementDefinition_Binding } from './DSTU2_ElementDefinition_Binding'
import { DSTU2_ElementDefinition_Constraint } from './DSTU2_ElementDefinition_Constraint'
import { DSTU2_ElementDefinition_Mapping } from './DSTU2_ElementDefinition_Mapping'
import { DSTU2_ElementDefinition_Slicing } from './DSTU2_ElementDefinition_Slicing'
import { DSTU2_ElementDefinition_Type } from './DSTU2_ElementDefinition_Type'
import { DSTU2_HumanName } from './DSTU2_HumanName'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Meta } from './DSTU2_Meta'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_PropertyRepresentationEnum } from './DSTU2_PropertyRepresentationEnum'
import { DSTU2_Quantity } from './DSTU2_Quantity'
import { DSTU2_Range } from './DSTU2_Range'
import { DSTU2_Ratio } from './DSTU2_Ratio'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_SampledData } from './DSTU2_SampledData'
import { DSTU2_Signature } from './DSTU2_Signature'
import { DSTU2_Timing } from './DSTU2_Timing'

export class DSTU2_ElementDefinition      extends DSTU2_Element
{

   static def : string = 'ElementDefinition';
   path : string ;
   representation : DSTU2_PropertyRepresentationEnum [];
   name : string ;
   label : string ;
   code : DSTU2_Coding [];
   slicing : DSTU2_ElementDefinition_Slicing ;
   short : string ;
   definition : string ;
   comments : string ;
   requirements : string ;
   alias : string [];
   min : string ;
   max : string ;
   base : DSTU2_ElementDefinition_Base ;
   type : DSTU2_ElementDefinition_Type [];
   nameReference : string ;
   defaultValueBoolean : boolean ;
   defaultValueInteger : string ;
   defaultValueDecimal : string ;
   defaultValueBase64Binary : string ;
   defaultValueInstant : string ;
   defaultValueString : string ;
   defaultValueUri : string ;
   defaultValueDate : string ;
   defaultValueDateTime : string ;
   defaultValueTime : string ;
   defaultValueCode : string ;
   defaultValueOid : string ;
   defaultValueUuid : string ;
   defaultValueId : string ;
   defaultValueUnsignedInt : string ;
   defaultValuePositiveInt : string ;
   defaultValueMarkdown : string ;
   defaultValueAnnotation : DSTU2_Annotation ;
   defaultValueAttachment : DSTU2_Attachment ;
   defaultValueIdentifier : DSTU2_Identifier ;
   defaultValueCodeableConcept : DSTU2_CodeableConcept ;
   defaultValueCoding : DSTU2_Coding ;
   defaultValueQuantity : DSTU2_Quantity ;
   defaultValueRange : DSTU2_Range ;
   defaultValuePeriod : DSTU2_Period ;
   defaultValueRatio : DSTU2_Ratio ;
   defaultValueReference : DSTU2_Reference ;
   defaultValueSampledData : DSTU2_SampledData ;
   defaultValueSignature : DSTU2_Signature ;
   defaultValueHumanName : DSTU2_HumanName ;
   defaultValueAddress : DSTU2_Address ;
   defaultValueContactPoint : DSTU2_ContactPoint ;
   defaultValueTiming : DSTU2_Timing ;
   defaultValueMeta : DSTU2_Meta ;
   meaningWhenMissing : string ;
   fixedBoolean : boolean ;
   fixedInteger : string ;
   fixedDecimal : string ;
   fixedBase64Binary : string ;
   fixedInstant : string ;
   fixedString : string ;
   fixedUri : string ;
   fixedDate : string ;
   fixedDateTime : string ;
   fixedTime : string ;
   fixedCode : string ;
   fixedOid : string ;
   fixedUuid : string ;
   fixedId : string ;
   fixedUnsignedInt : string ;
   fixedPositiveInt : string ;
   fixedMarkdown : string ;
   fixedAnnotation : DSTU2_Annotation ;
   fixedAttachment : DSTU2_Attachment ;
   fixedIdentifier : DSTU2_Identifier ;
   fixedCodeableConcept : DSTU2_CodeableConcept ;
   fixedCoding : DSTU2_Coding ;
   fixedQuantity : DSTU2_Quantity ;
   fixedRange : DSTU2_Range ;
   fixedPeriod : DSTU2_Period ;
   fixedRatio : DSTU2_Ratio ;
   fixedReference : DSTU2_Reference ;
   fixedSampledData : DSTU2_SampledData ;
   fixedSignature : DSTU2_Signature ;
   fixedHumanName : DSTU2_HumanName ;
   fixedAddress : DSTU2_Address ;
   fixedContactPoint : DSTU2_ContactPoint ;
   fixedTiming : DSTU2_Timing ;
   fixedMeta : DSTU2_Meta ;
   patternBoolean : boolean ;
   patternInteger : string ;
   patternDecimal : string ;
   patternBase64Binary : string ;
   patternInstant : string ;
   patternString : string ;
   patternUri : string ;
   patternDate : string ;
   patternDateTime : string ;
   patternTime : string ;
   patternCode : string ;
   patternOid : string ;
   patternUuid : string ;
   patternId : string ;
   patternUnsignedInt : string ;
   patternPositiveInt : string ;
   patternMarkdown : string ;
   patternAnnotation : DSTU2_Annotation ;
   patternAttachment : DSTU2_Attachment ;
   patternIdentifier : DSTU2_Identifier ;
   patternCodeableConcept : DSTU2_CodeableConcept ;
   patternCoding : DSTU2_Coding ;
   patternQuantity : DSTU2_Quantity ;
   patternRange : DSTU2_Range ;
   patternPeriod : DSTU2_Period ;
   patternRatio : DSTU2_Ratio ;
   patternReference : DSTU2_Reference ;
   patternSampledData : DSTU2_SampledData ;
   patternSignature : DSTU2_Signature ;
   patternHumanName : DSTU2_HumanName ;
   patternAddress : DSTU2_Address ;
   patternContactPoint : DSTU2_ContactPoint ;
   patternTiming : DSTU2_Timing ;
   patternMeta : DSTU2_Meta ;
   exampleBoolean : boolean ;
   exampleInteger : string ;
   exampleDecimal : string ;
   exampleBase64Binary : string ;
   exampleInstant : string ;
   exampleString : string ;
   exampleUri : string ;
   exampleDate : string ;
   exampleDateTime : string ;
   exampleTime : string ;
   exampleCode : string ;
   exampleOid : string ;
   exampleUuid : string ;
   exampleId : string ;
   exampleUnsignedInt : string ;
   examplePositiveInt : string ;
   exampleMarkdown : string ;
   exampleAnnotation : DSTU2_Annotation ;
   exampleAttachment : DSTU2_Attachment ;
   exampleIdentifier : DSTU2_Identifier ;
   exampleCodeableConcept : DSTU2_CodeableConcept ;
   exampleCoding : DSTU2_Coding ;
   exampleQuantity : DSTU2_Quantity ;
   exampleRange : DSTU2_Range ;
   examplePeriod : DSTU2_Period ;
   exampleRatio : DSTU2_Ratio ;
   exampleReference : DSTU2_Reference ;
   exampleSampledData : DSTU2_SampledData ;
   exampleSignature : DSTU2_Signature ;
   exampleHumanName : DSTU2_HumanName ;
   exampleAddress : DSTU2_Address ;
   exampleContactPoint : DSTU2_ContactPoint ;
   exampleTiming : DSTU2_Timing ;
   exampleMeta : DSTU2_Meta ;
   minValueBoolean : boolean ;
   minValueInteger : string ;
   minValueDecimal : string ;
   minValueBase64Binary : string ;
   minValueInstant : string ;
   minValueString : string ;
   minValueUri : string ;
   minValueDate : string ;
   minValueDateTime : string ;
   minValueTime : string ;
   minValueCode : string ;
   minValueOid : string ;
   minValueUuid : string ;
   minValueId : string ;
   minValueUnsignedInt : string ;
   minValuePositiveInt : string ;
   minValueMarkdown : string ;
   minValueAnnotation : DSTU2_Annotation ;
   minValueAttachment : DSTU2_Attachment ;
   minValueIdentifier : DSTU2_Identifier ;
   minValueCodeableConcept : DSTU2_CodeableConcept ;
   minValueCoding : DSTU2_Coding ;
   minValueQuantity : DSTU2_Quantity ;
   minValueRange : DSTU2_Range ;
   minValuePeriod : DSTU2_Period ;
   minValueRatio : DSTU2_Ratio ;
   minValueReference : DSTU2_Reference ;
   minValueSampledData : DSTU2_SampledData ;
   minValueSignature : DSTU2_Signature ;
   minValueHumanName : DSTU2_HumanName ;
   minValueAddress : DSTU2_Address ;
   minValueContactPoint : DSTU2_ContactPoint ;
   minValueTiming : DSTU2_Timing ;
   minValueMeta : DSTU2_Meta ;
   maxValueBoolean : boolean ;
   maxValueInteger : string ;
   maxValueDecimal : string ;
   maxValueBase64Binary : string ;
   maxValueInstant : string ;
   maxValueString : string ;
   maxValueUri : string ;
   maxValueDate : string ;
   maxValueDateTime : string ;
   maxValueTime : string ;
   maxValueCode : string ;
   maxValueOid : string ;
   maxValueUuid : string ;
   maxValueId : string ;
   maxValueUnsignedInt : string ;
   maxValuePositiveInt : string ;
   maxValueMarkdown : string ;
   maxValueAnnotation : DSTU2_Annotation ;
   maxValueAttachment : DSTU2_Attachment ;
   maxValueIdentifier : DSTU2_Identifier ;
   maxValueCodeableConcept : DSTU2_CodeableConcept ;
   maxValueCoding : DSTU2_Coding ;
   maxValueQuantity : DSTU2_Quantity ;
   maxValueRange : DSTU2_Range ;
   maxValuePeriod : DSTU2_Period ;
   maxValueRatio : DSTU2_Ratio ;
   maxValueReference : DSTU2_Reference ;
   maxValueSampledData : DSTU2_SampledData ;
   maxValueSignature : DSTU2_Signature ;
   maxValueHumanName : DSTU2_HumanName ;
   maxValueAddress : DSTU2_Address ;
   maxValueContactPoint : DSTU2_ContactPoint ;
   maxValueTiming : DSTU2_Timing ;
   maxValueMeta : DSTU2_Meta ;
   maxLength : string ;
   condition : string [];
   constraint : DSTU2_ElementDefinition_Constraint [];
   mustSupport : boolean ;
   isModifier : boolean ;
   isSummary : boolean ;
   binding : DSTU2_ElementDefinition_Binding ;
   mapping : DSTU2_ElementDefinition_Mapping [];
}
