import { STU3_Address } from './STU3_Address'
import { STU3_Annotation } from './STU3_Annotation'
import { STU3_Attachment } from './STU3_Attachment'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Coding } from './STU3_Coding'
import { STU3_ContactPoint } from './STU3_ContactPoint'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_ElementDefinition_Base } from './STU3_ElementDefinition_Base'
import { STU3_ElementDefinition_Binding } from './STU3_ElementDefinition_Binding'
import { STU3_ElementDefinition_Constraint } from './STU3_ElementDefinition_Constraint'
import { STU3_ElementDefinition_Example } from './STU3_ElementDefinition_Example'
import { STU3_ElementDefinition_Mapping } from './STU3_ElementDefinition_Mapping'
import { STU3_ElementDefinition_Slicing } from './STU3_ElementDefinition_Slicing'
import { STU3_ElementDefinition_Type } from './STU3_ElementDefinition_Type'
import { STU3_HumanName } from './STU3_HumanName'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Meta } from './STU3_Meta'
import { STU3_Period } from './STU3_Period'
import { STU3_PropertyRepresentationEnum } from './STU3_PropertyRepresentationEnum'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Range } from './STU3_Range'
import { STU3_Ratio } from './STU3_Ratio'
import { STU3_Reference } from './STU3_Reference'
import { STU3_SampledData } from './STU3_SampledData'
import { STU3_Signature } from './STU3_Signature'
import { STU3_Timing } from './STU3_Timing'

export class STU3_ElementDefinition      extends STU3_Element
{

   static def : string = 'ElementDefinition';
   path : string ;
   representation : STU3_PropertyRepresentationEnum [];
   sliceName : string ;
   label : string ;
   code : STU3_Coding [];
   slicing : STU3_ElementDefinition_Slicing ;
   short : string ;
   definition : string ;
   comment : string ;
   requirements : string ;
   alias : string [];
   min : string ;
   max : string ;
   base : STU3_ElementDefinition_Base ;
   contentReference : string ;
   type : STU3_ElementDefinition_Type [];
   defaultValueBase64Binary : string ;
   defaultValueBoolean : boolean ;
   defaultValueCode : string ;
   defaultValueDate : string ;
   defaultValueDateTime : string ;
   defaultValueDecimal : string ;
   defaultValueId : string ;
   defaultValueInstant : string ;
   defaultValueInteger : string ;
   defaultValueMarkdown : string ;
   defaultValueOid : string ;
   defaultValuePositiveInt : string ;
   defaultValueString : string ;
   defaultValueTime : string ;
   defaultValueUnsignedInt : string ;
   defaultValueUri : string ;
   defaultValueAddress : STU3_Address ;
   defaultValueAge : string ;
   defaultValueAnnotation : STU3_Annotation ;
   defaultValueAttachment : STU3_Attachment ;
   defaultValueCodeableConcept : STU3_CodeableConcept ;
   defaultValueCoding : STU3_Coding ;
   defaultValueContactPoint : STU3_ContactPoint ;
   defaultValueCount : string ;
   defaultValueDistance : string ;
   defaultValueDuration : string ;
   defaultValueHumanName : STU3_HumanName ;
   defaultValueIdentifier : STU3_Identifier ;
   defaultValueMoney : string ;
   defaultValuePeriod : STU3_Period ;
   defaultValueQuantity : STU3_Quantity ;
   defaultValueRange : STU3_Range ;
   defaultValueRatio : STU3_Ratio ;
   defaultValueReference : STU3_Reference ;
   defaultValueSampledData : STU3_SampledData ;
   defaultValueSignature : STU3_Signature ;
   defaultValueTiming : STU3_Timing ;
   defaultValueMeta : STU3_Meta ;
   meaningWhenMissing : string ;
   orderMeaning : string ;
   fixedBase64Binary : string ;
   fixedBoolean : boolean ;
   fixedCode : string ;
   fixedDate : string ;
   fixedDateTime : string ;
   fixedDecimal : string ;
   fixedId : string ;
   fixedInstant : string ;
   fixedInteger : string ;
   fixedMarkdown : string ;
   fixedOid : string ;
   fixedPositiveInt : string ;
   fixedString : string ;
   fixedTime : string ;
   fixedUnsignedInt : string ;
   fixedUri : string ;
   fixedAddress : STU3_Address ;
   fixedAge : string ;
   fixedAnnotation : STU3_Annotation ;
   fixedAttachment : STU3_Attachment ;
   fixedCodeableConcept : STU3_CodeableConcept ;
   fixedCoding : STU3_Coding ;
   fixedContactPoint : STU3_ContactPoint ;
   fixedCount : string ;
   fixedDistance : string ;
   fixedDuration : string ;
   fixedHumanName : STU3_HumanName ;
   fixedIdentifier : STU3_Identifier ;
   fixedMoney : string ;
   fixedPeriod : STU3_Period ;
   fixedQuantity : STU3_Quantity ;
   fixedRange : STU3_Range ;
   fixedRatio : STU3_Ratio ;
   fixedReference : STU3_Reference ;
   fixedSampledData : STU3_SampledData ;
   fixedSignature : STU3_Signature ;
   fixedTiming : STU3_Timing ;
   fixedMeta : STU3_Meta ;
   patternBase64Binary : string ;
   patternBoolean : boolean ;
   patternCode : string ;
   patternDate : string ;
   patternDateTime : string ;
   patternDecimal : string ;
   patternId : string ;
   patternInstant : string ;
   patternInteger : string ;
   patternMarkdown : string ;
   patternOid : string ;
   patternPositiveInt : string ;
   patternString : string ;
   patternTime : string ;
   patternUnsignedInt : string ;
   patternUri : string ;
   patternAddress : STU3_Address ;
   patternAge : string ;
   patternAnnotation : STU3_Annotation ;
   patternAttachment : STU3_Attachment ;
   patternCodeableConcept : STU3_CodeableConcept ;
   patternCoding : STU3_Coding ;
   patternContactPoint : STU3_ContactPoint ;
   patternCount : string ;
   patternDistance : string ;
   patternDuration : string ;
   patternHumanName : STU3_HumanName ;
   patternIdentifier : STU3_Identifier ;
   patternMoney : string ;
   patternPeriod : STU3_Period ;
   patternQuantity : STU3_Quantity ;
   patternRange : STU3_Range ;
   patternRatio : STU3_Ratio ;
   patternReference : STU3_Reference ;
   patternSampledData : STU3_SampledData ;
   patternSignature : STU3_Signature ;
   patternTiming : STU3_Timing ;
   patternMeta : STU3_Meta ;
   example : STU3_ElementDefinition_Example [];
   minValueDate : string ;
   minValueDateTime : string ;
   minValueInstant : string ;
   minValueTime : string ;
   minValueDecimal : string ;
   minValueInteger : string ;
   minValuePositiveInt : string ;
   minValueUnsignedInt : string ;
   minValueQuantity : STU3_Quantity ;
   maxValueDate : string ;
   maxValueDateTime : string ;
   maxValueInstant : string ;
   maxValueTime : string ;
   maxValueDecimal : string ;
   maxValueInteger : string ;
   maxValuePositiveInt : string ;
   maxValueUnsignedInt : string ;
   maxValueQuantity : STU3_Quantity ;
   maxLength : string ;
   condition : string [];
   constraint : STU3_ElementDefinition_Constraint [];
   mustSupport : boolean ;
   isModifier : boolean ;
   isSummary : boolean ;
   binding : STU3_ElementDefinition_Binding ;
   mapping : STU3_ElementDefinition_Mapping [];
}
