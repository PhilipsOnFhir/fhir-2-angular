import { R4_Address } from './R4_Address'
import { R4_Annotation } from './R4_Annotation'
import { R4_Attachment } from './R4_Attachment'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_Coding } from './R4_Coding'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_ContactPoint } from './R4_ContactPoint'
import { R4_Contributor } from './R4_Contributor'
import { R4_DataRequirement } from './R4_DataRequirement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Dosage } from './R4_Dosage'
import { R4_ElementDefinition_Base } from './R4_ElementDefinition_Base'
import { R4_ElementDefinition_Binding } from './R4_ElementDefinition_Binding'
import { R4_ElementDefinition_Constraint } from './R4_ElementDefinition_Constraint'
import { R4_ElementDefinition_Example } from './R4_ElementDefinition_Example'
import { R4_ElementDefinition_Mapping } from './R4_ElementDefinition_Mapping'
import { R4_ElementDefinition_Slicing } from './R4_ElementDefinition_Slicing'
import { R4_ElementDefinition_Type } from './R4_ElementDefinition_Type'
import { R4_Expression } from './R4_Expression'
import { R4_HumanName } from './R4_HumanName'
import { R4_Identifier } from './R4_Identifier'
import { R4_Money } from './R4_Money'
import { R4_ParameterDefinition } from './R4_ParameterDefinition'
import { R4_Period } from './R4_Period'
import { R4_PropertyRepresentationEnum } from './R4_PropertyRepresentationEnum'
import { R4_Quantity } from './R4_Quantity'
import { R4_Range } from './R4_Range'
import { R4_Ratio } from './R4_Ratio'
import { R4_Reference } from './R4_Reference'
import { R4_RelatedArtifact } from './R4_RelatedArtifact'
import { R4_SampledData } from './R4_SampledData'
import { R4_Signature } from './R4_Signature'
import { R4_Timing } from './R4_Timing'
import { R4_TriggerDefinition } from './R4_TriggerDefinition'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_ElementDefinition      extends R4_BackboneElement
{

   static def : string = 'ElementDefinition';
   path : string ;
   representation : R4_PropertyRepresentationEnum [];
   sliceName : string ;
   sliceIsConstraining : boolean ;
   label : string ;
   code : R4_Coding [];
   slicing : R4_ElementDefinition_Slicing ;
   short : string ;
   definition : string ;
   comment : string ;
   requirements : string ;
   alias : string [];
   min : string ;
   max : string ;
   base : R4_ElementDefinition_Base ;
   contentReference : string ;
   type : R4_ElementDefinition_Type [];
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
   defaultValueAddress : R4_Address ;
   defaultValueAge : string ;
   defaultValueAnnotation : R4_Annotation ;
   defaultValueAttachment : R4_Attachment ;
   defaultValueCodeableConcept : R4_CodeableConcept ;
   defaultValueCoding : R4_Coding ;
   defaultValueContactPoint : R4_ContactPoint ;
   defaultValueCount : string ;
   defaultValueDistance : string ;
   defaultValueDuration : string ;
   defaultValueHumanName : R4_HumanName ;
   defaultValueIdentifier : R4_Identifier ;
   defaultValueMoney : R4_Money ;
   defaultValuePeriod : R4_Period ;
   defaultValueQuantity : R4_Quantity ;
   defaultValueRange : R4_Range ;
   defaultValueRatio : R4_Ratio ;
   defaultValueReference : R4_Reference ;
   defaultValueSampledData : R4_SampledData ;
   defaultValueSignature : R4_Signature ;
   defaultValueTiming : R4_Timing ;
   defaultValueContactDetail : R4_ContactDetail ;
   defaultValueContributor : R4_Contributor ;
   defaultValueDataRequirement : R4_DataRequirement ;
   defaultValueExpression : R4_Expression ;
   defaultValueParameterDefinition : R4_ParameterDefinition ;
   defaultValueRelatedArtifact : R4_RelatedArtifact ;
   defaultValueTriggerDefinition : R4_TriggerDefinition ;
   defaultValueUsageContext : R4_UsageContext ;
   defaultValueDosage : R4_Dosage ;
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
   fixedAddress : R4_Address ;
   fixedAge : string ;
   fixedAnnotation : R4_Annotation ;
   fixedAttachment : R4_Attachment ;
   fixedCodeableConcept : R4_CodeableConcept ;
   fixedCoding : R4_Coding ;
   fixedContactPoint : R4_ContactPoint ;
   fixedCount : string ;
   fixedDistance : string ;
   fixedDuration : string ;
   fixedHumanName : R4_HumanName ;
   fixedIdentifier : R4_Identifier ;
   fixedMoney : R4_Money ;
   fixedPeriod : R4_Period ;
   fixedQuantity : R4_Quantity ;
   fixedRange : R4_Range ;
   fixedRatio : R4_Ratio ;
   fixedReference : R4_Reference ;
   fixedSampledData : R4_SampledData ;
   fixedSignature : R4_Signature ;
   fixedTiming : R4_Timing ;
   fixedContactDetail : R4_ContactDetail ;
   fixedContributor : R4_Contributor ;
   fixedDataRequirement : R4_DataRequirement ;
   fixedExpression : R4_Expression ;
   fixedParameterDefinition : R4_ParameterDefinition ;
   fixedRelatedArtifact : R4_RelatedArtifact ;
   fixedTriggerDefinition : R4_TriggerDefinition ;
   fixedUsageContext : R4_UsageContext ;
   fixedDosage : R4_Dosage ;
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
   patternAddress : R4_Address ;
   patternAge : string ;
   patternAnnotation : R4_Annotation ;
   patternAttachment : R4_Attachment ;
   patternCodeableConcept : R4_CodeableConcept ;
   patternCoding : R4_Coding ;
   patternContactPoint : R4_ContactPoint ;
   patternCount : string ;
   patternDistance : string ;
   patternDuration : string ;
   patternHumanName : R4_HumanName ;
   patternIdentifier : R4_Identifier ;
   patternMoney : R4_Money ;
   patternPeriod : R4_Period ;
   patternQuantity : R4_Quantity ;
   patternRange : R4_Range ;
   patternRatio : R4_Ratio ;
   patternReference : R4_Reference ;
   patternSampledData : R4_SampledData ;
   patternSignature : R4_Signature ;
   patternTiming : R4_Timing ;
   patternContactDetail : R4_ContactDetail ;
   patternContributor : R4_Contributor ;
   patternDataRequirement : R4_DataRequirement ;
   patternExpression : R4_Expression ;
   patternParameterDefinition : R4_ParameterDefinition ;
   patternRelatedArtifact : R4_RelatedArtifact ;
   patternTriggerDefinition : R4_TriggerDefinition ;
   patternUsageContext : R4_UsageContext ;
   patternDosage : R4_Dosage ;
   example : R4_ElementDefinition_Example [];
   minValueDate : string ;
   minValueDateTime : string ;
   minValueInstant : string ;
   minValueTime : string ;
   minValueDecimal : string ;
   minValueInteger : string ;
   minValuePositiveInt : string ;
   minValueUnsignedInt : string ;
   minValueQuantity : R4_Quantity ;
   maxValueDate : string ;
   maxValueDateTime : string ;
   maxValueInstant : string ;
   maxValueTime : string ;
   maxValueDecimal : string ;
   maxValueInteger : string ;
   maxValuePositiveInt : string ;
   maxValueUnsignedInt : string ;
   maxValueQuantity : R4_Quantity ;
   maxLength : string ;
   condition : string [];
   constraint : R4_ElementDefinition_Constraint [];
   mustSupport : boolean ;
   isModifier : boolean ;
   isModifierReason : string ;
   isSummary : boolean ;
   binding : R4_ElementDefinition_Binding ;
   mapping : R4_ElementDefinition_Mapping [];
}
