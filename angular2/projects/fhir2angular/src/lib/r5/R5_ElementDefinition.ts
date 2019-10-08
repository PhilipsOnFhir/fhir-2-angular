import { R5_Address } from './R5_Address'
import { R5_Annotation } from './R5_Annotation'
import { R5_Attachment } from './R5_Attachment'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_Coding } from './R5_Coding'
import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_ContactPoint } from './R5_ContactPoint'
import { R5_Contributor } from './R5_Contributor'
import { R5_DataRequirement } from './R5_DataRequirement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Dosage } from './R5_Dosage'
import { R5_ElementDefinition_Base } from './R5_ElementDefinition_Base'
import { R5_ElementDefinition_Binding } from './R5_ElementDefinition_Binding'
import { R5_ElementDefinition_Constraint } from './R5_ElementDefinition_Constraint'
import { R5_ElementDefinition_Example } from './R5_ElementDefinition_Example'
import { R5_ElementDefinition_Mapping } from './R5_ElementDefinition_Mapping'
import { R5_ElementDefinition_Slicing } from './R5_ElementDefinition_Slicing'
import { R5_ElementDefinition_Type } from './R5_ElementDefinition_Type'
import { R5_Expression } from './R5_Expression'
import { R5_HumanName } from './R5_HumanName'
import { R5_Identifier } from './R5_Identifier'
import { R5_Money } from './R5_Money'
import { R5_ParameterDefinition } from './R5_ParameterDefinition'
import { R5_Period } from './R5_Period'
import { R5_PropertyRepresentationEnum } from './R5_PropertyRepresentationEnum'
import { R5_Quantity } from './R5_Quantity'
import { R5_Range } from './R5_Range'
import { R5_Ratio } from './R5_Ratio'
import { R5_Reference } from './R5_Reference'
import { R5_RelatedArtifact } from './R5_RelatedArtifact'
import { R5_SampledData } from './R5_SampledData'
import { R5_Signature } from './R5_Signature'
import { R5_Timing } from './R5_Timing'
import { R5_TriggerDefinition } from './R5_TriggerDefinition'
import { R5_UsageContext } from './R5_UsageContext'

export class R5_ElementDefinition      extends R5_BackboneElement
{

   static def : string = 'ElementDefinition';
   path : string ;
   representation : R5_PropertyRepresentationEnum [];
   sliceName : string ;
   sliceIsConstraining : boolean ;
   label : string ;
   code : R5_Coding [];
   slicing : R5_ElementDefinition_Slicing ;
   short : string ;
   definition : string ;
   comment : string ;
   requirements : string ;
   alias : string [];
   min : string ;
   max : string ;
   base : R5_ElementDefinition_Base ;
   contentReference : string ;
   type : R5_ElementDefinition_Type [];
   defaultValueBase64Binary : string ;
   defaultValueBoolean : boolean ;
   defaultValueCanonical : string ;
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
   defaultValueUrl : string ;
   defaultValueUuid : string ;
   defaultValueAddress : R5_Address ;
   defaultValueAge : string ;
   defaultValueAnnotation : R5_Annotation ;
   defaultValueAttachment : R5_Attachment ;
   defaultValueCodeableConcept : R5_CodeableConcept ;
   defaultValueCoding : R5_Coding ;
   defaultValueContactPoint : R5_ContactPoint ;
   defaultValueCount : string ;
   defaultValueDistance : string ;
   defaultValueDuration : string ;
   defaultValueHumanName : R5_HumanName ;
   defaultValueIdentifier : R5_Identifier ;
   defaultValueMoney : R5_Money ;
   defaultValuePeriod : R5_Period ;
   defaultValueQuantity : R5_Quantity ;
   defaultValueRange : R5_Range ;
   defaultValueRatio : R5_Ratio ;
   defaultValueReference : R5_Reference ;
   defaultValueSampledData : R5_SampledData ;
   defaultValueSignature : R5_Signature ;
   defaultValueTiming : R5_Timing ;
   defaultValueContactDetail : R5_ContactDetail ;
   defaultValueContributor : R5_Contributor ;
   defaultValueDataRequirement : R5_DataRequirement ;
   defaultValueExpression : R5_Expression ;
   defaultValueParameterDefinition : R5_ParameterDefinition ;
   defaultValueRelatedArtifact : R5_RelatedArtifact ;
   defaultValueTriggerDefinition : R5_TriggerDefinition ;
   defaultValueUsageContext : R5_UsageContext ;
   defaultValueDosage : R5_Dosage ;
   meaningWhenMissing : string ;
   orderMeaning : string ;
   fixedBase64Binary : string ;
   fixedBoolean : boolean ;
   fixedCanonical : string ;
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
   fixedUrl : string ;
   fixedUuid : string ;
   fixedAddress : R5_Address ;
   fixedAge : string ;
   fixedAnnotation : R5_Annotation ;
   fixedAttachment : R5_Attachment ;
   fixedCodeableConcept : R5_CodeableConcept ;
   fixedCoding : R5_Coding ;
   fixedContactPoint : R5_ContactPoint ;
   fixedCount : string ;
   fixedDistance : string ;
   fixedDuration : string ;
   fixedHumanName : R5_HumanName ;
   fixedIdentifier : R5_Identifier ;
   fixedMoney : R5_Money ;
   fixedPeriod : R5_Period ;
   fixedQuantity : R5_Quantity ;
   fixedRange : R5_Range ;
   fixedRatio : R5_Ratio ;
   fixedReference : R5_Reference ;
   fixedSampledData : R5_SampledData ;
   fixedSignature : R5_Signature ;
   fixedTiming : R5_Timing ;
   fixedContactDetail : R5_ContactDetail ;
   fixedContributor : R5_Contributor ;
   fixedDataRequirement : R5_DataRequirement ;
   fixedExpression : R5_Expression ;
   fixedParameterDefinition : R5_ParameterDefinition ;
   fixedRelatedArtifact : R5_RelatedArtifact ;
   fixedTriggerDefinition : R5_TriggerDefinition ;
   fixedUsageContext : R5_UsageContext ;
   fixedDosage : R5_Dosage ;
   patternBase64Binary : string ;
   patternBoolean : boolean ;
   patternCanonical : string ;
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
   patternUrl : string ;
   patternUuid : string ;
   patternAddress : R5_Address ;
   patternAge : string ;
   patternAnnotation : R5_Annotation ;
   patternAttachment : R5_Attachment ;
   patternCodeableConcept : R5_CodeableConcept ;
   patternCoding : R5_Coding ;
   patternContactPoint : R5_ContactPoint ;
   patternCount : string ;
   patternDistance : string ;
   patternDuration : string ;
   patternHumanName : R5_HumanName ;
   patternIdentifier : R5_Identifier ;
   patternMoney : R5_Money ;
   patternPeriod : R5_Period ;
   patternQuantity : R5_Quantity ;
   patternRange : R5_Range ;
   patternRatio : R5_Ratio ;
   patternReference : R5_Reference ;
   patternSampledData : R5_SampledData ;
   patternSignature : R5_Signature ;
   patternTiming : R5_Timing ;
   patternContactDetail : R5_ContactDetail ;
   patternContributor : R5_Contributor ;
   patternDataRequirement : R5_DataRequirement ;
   patternExpression : R5_Expression ;
   patternParameterDefinition : R5_ParameterDefinition ;
   patternRelatedArtifact : R5_RelatedArtifact ;
   patternTriggerDefinition : R5_TriggerDefinition ;
   patternUsageContext : R5_UsageContext ;
   patternDosage : R5_Dosage ;
   example : R5_ElementDefinition_Example [];
   minValueDate : string ;
   minValueDateTime : string ;
   minValueInstant : string ;
   minValueTime : string ;
   minValueDecimal : string ;
   minValueInteger : string ;
   minValuePositiveInt : string ;
   minValueUnsignedInt : string ;
   minValueQuantity : R5_Quantity ;
   maxValueDate : string ;
   maxValueDateTime : string ;
   maxValueInstant : string ;
   maxValueTime : string ;
   maxValueDecimal : string ;
   maxValueInteger : string ;
   maxValuePositiveInt : string ;
   maxValueUnsignedInt : string ;
   maxValueQuantity : R5_Quantity ;
   maxLength : string ;
   condition : string [];
   constraint : R5_ElementDefinition_Constraint [];
   mustSupport : boolean ;
   isModifier : boolean ;
   isModifierReason : string ;
   isSummary : boolean ;
   binding : R5_ElementDefinition_Binding ;
   mapping : R5_ElementDefinition_Mapping [];
}
