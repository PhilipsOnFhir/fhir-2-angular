import { R4_1_Address } from './R4_1_Address'
import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_Attachment } from './R4_1_Attachment'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_ContactDetail } from './R4_1_ContactDetail'
import { R4_1_ContactPoint } from './R4_1_ContactPoint'
import { R4_1_Contributor } from './R4_1_Contributor'
import { R4_1_DataRequirement } from './R4_1_DataRequirement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Dosage } from './R4_1_Dosage'
import { R4_1_ElementDefinition_Base } from './R4_1_ElementDefinition_Base'
import { R4_1_ElementDefinition_Binding } from './R4_1_ElementDefinition_Binding'
import { R4_1_ElementDefinition_Constraint } from './R4_1_ElementDefinition_Constraint'
import { R4_1_ElementDefinition_Example } from './R4_1_ElementDefinition_Example'
import { R4_1_ElementDefinition_Mapping } from './R4_1_ElementDefinition_Mapping'
import { R4_1_ElementDefinition_Slicing } from './R4_1_ElementDefinition_Slicing'
import { R4_1_ElementDefinition_Type } from './R4_1_ElementDefinition_Type'
import { R4_1_Expression } from './R4_1_Expression'
import { R4_1_HumanName } from './R4_1_HumanName'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Money } from './R4_1_Money'
import { R4_1_ParameterDefinition } from './R4_1_ParameterDefinition'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_PropertyRepresentationEnum } from './R4_1_PropertyRepresentationEnum'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Range } from './R4_1_Range'
import { R4_1_Ratio } from './R4_1_Ratio'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_RelatedArtifact } from './R4_1_RelatedArtifact'
import { R4_1_SampledData } from './R4_1_SampledData'
import { R4_1_Signature } from './R4_1_Signature'
import { R4_1_Timing } from './R4_1_Timing'
import { R4_1_TriggerDefinition } from './R4_1_TriggerDefinition'
import { R4_1_UsageContext } from './R4_1_UsageContext'

export class R4_1_ElementDefinition      extends R4_1_BackboneElement
{

   static def : string = 'ElementDefinition';
   path : string ;
   representation : R4_1_PropertyRepresentationEnum [];
   sliceName : string ;
   sliceIsConstraining : boolean ;
   label : string ;
   code : R4_1_Coding [];
   slicing : R4_1_ElementDefinition_Slicing ;
   short : string ;
   definition : string ;
   comment : string ;
   requirements : string ;
   alias : string [];
   min : string ;
   max : string ;
   base : R4_1_ElementDefinition_Base ;
   contentReference : string ;
   type : R4_1_ElementDefinition_Type [];
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
   defaultValueAddress : R4_1_Address ;
   defaultValueAge : string ;
   defaultValueAnnotation : R4_1_Annotation ;
   defaultValueAttachment : R4_1_Attachment ;
   defaultValueCodeableConcept : R4_1_CodeableConcept ;
   defaultValueCoding : R4_1_Coding ;
   defaultValueContactPoint : R4_1_ContactPoint ;
   defaultValueCount : string ;
   defaultValueDistance : string ;
   defaultValueDuration : string ;
   defaultValueHumanName : R4_1_HumanName ;
   defaultValueIdentifier : R4_1_Identifier ;
   defaultValueMoney : R4_1_Money ;
   defaultValuePeriod : R4_1_Period ;
   defaultValueQuantity : R4_1_Quantity ;
   defaultValueRange : R4_1_Range ;
   defaultValueRatio : R4_1_Ratio ;
   defaultValueReference : R4_1_Reference ;
   defaultValueSampledData : R4_1_SampledData ;
   defaultValueSignature : R4_1_Signature ;
   defaultValueTiming : R4_1_Timing ;
   defaultValueContactDetail : R4_1_ContactDetail ;
   defaultValueContributor : R4_1_Contributor ;
   defaultValueDataRequirement : R4_1_DataRequirement ;
   defaultValueExpression : R4_1_Expression ;
   defaultValueParameterDefinition : R4_1_ParameterDefinition ;
   defaultValueRelatedArtifact : R4_1_RelatedArtifact ;
   defaultValueTriggerDefinition : R4_1_TriggerDefinition ;
   defaultValueUsageContext : R4_1_UsageContext ;
   defaultValueDosage : R4_1_Dosage ;
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
   fixedAddress : R4_1_Address ;
   fixedAge : string ;
   fixedAnnotation : R4_1_Annotation ;
   fixedAttachment : R4_1_Attachment ;
   fixedCodeableConcept : R4_1_CodeableConcept ;
   fixedCoding : R4_1_Coding ;
   fixedContactPoint : R4_1_ContactPoint ;
   fixedCount : string ;
   fixedDistance : string ;
   fixedDuration : string ;
   fixedHumanName : R4_1_HumanName ;
   fixedIdentifier : R4_1_Identifier ;
   fixedMoney : R4_1_Money ;
   fixedPeriod : R4_1_Period ;
   fixedQuantity : R4_1_Quantity ;
   fixedRange : R4_1_Range ;
   fixedRatio : R4_1_Ratio ;
   fixedReference : R4_1_Reference ;
   fixedSampledData : R4_1_SampledData ;
   fixedSignature : R4_1_Signature ;
   fixedTiming : R4_1_Timing ;
   fixedContactDetail : R4_1_ContactDetail ;
   fixedContributor : R4_1_Contributor ;
   fixedDataRequirement : R4_1_DataRequirement ;
   fixedExpression : R4_1_Expression ;
   fixedParameterDefinition : R4_1_ParameterDefinition ;
   fixedRelatedArtifact : R4_1_RelatedArtifact ;
   fixedTriggerDefinition : R4_1_TriggerDefinition ;
   fixedUsageContext : R4_1_UsageContext ;
   fixedDosage : R4_1_Dosage ;
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
   patternAddress : R4_1_Address ;
   patternAge : string ;
   patternAnnotation : R4_1_Annotation ;
   patternAttachment : R4_1_Attachment ;
   patternCodeableConcept : R4_1_CodeableConcept ;
   patternCoding : R4_1_Coding ;
   patternContactPoint : R4_1_ContactPoint ;
   patternCount : string ;
   patternDistance : string ;
   patternDuration : string ;
   patternHumanName : R4_1_HumanName ;
   patternIdentifier : R4_1_Identifier ;
   patternMoney : R4_1_Money ;
   patternPeriod : R4_1_Period ;
   patternQuantity : R4_1_Quantity ;
   patternRange : R4_1_Range ;
   patternRatio : R4_1_Ratio ;
   patternReference : R4_1_Reference ;
   patternSampledData : R4_1_SampledData ;
   patternSignature : R4_1_Signature ;
   patternTiming : R4_1_Timing ;
   patternContactDetail : R4_1_ContactDetail ;
   patternContributor : R4_1_Contributor ;
   patternDataRequirement : R4_1_DataRequirement ;
   patternExpression : R4_1_Expression ;
   patternParameterDefinition : R4_1_ParameterDefinition ;
   patternRelatedArtifact : R4_1_RelatedArtifact ;
   patternTriggerDefinition : R4_1_TriggerDefinition ;
   patternUsageContext : R4_1_UsageContext ;
   patternDosage : R4_1_Dosage ;
   example : R4_1_ElementDefinition_Example [];
   minValueDate : string ;
   minValueDateTime : string ;
   minValueInstant : string ;
   minValueTime : string ;
   minValueDecimal : string ;
   minValueInteger : string ;
   minValuePositiveInt : string ;
   minValueUnsignedInt : string ;
   minValueQuantity : R4_1_Quantity ;
   maxValueDate : string ;
   maxValueDateTime : string ;
   maxValueInstant : string ;
   maxValueTime : string ;
   maxValueDecimal : string ;
   maxValueInteger : string ;
   maxValuePositiveInt : string ;
   maxValueUnsignedInt : string ;
   maxValueQuantity : R4_1_Quantity ;
   maxLength : string ;
   condition : string [];
   constraint : R4_1_ElementDefinition_Constraint [];
   mustSupport : boolean ;
   isModifier : boolean ;
   isModifierReason : string ;
   isSummary : boolean ;
   binding : R4_1_ElementDefinition_Binding ;
   mapping : R4_1_ElementDefinition_Mapping [];
}
