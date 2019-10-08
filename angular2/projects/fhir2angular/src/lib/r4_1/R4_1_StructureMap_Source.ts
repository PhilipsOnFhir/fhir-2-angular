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
import { R4_1_Expression } from './R4_1_Expression'
import { R4_1_HumanName } from './R4_1_HumanName'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Money } from './R4_1_Money'
import { R4_1_ParameterDefinition } from './R4_1_ParameterDefinition'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Range } from './R4_1_Range'
import { R4_1_Ratio } from './R4_1_Ratio'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_RelatedArtifact } from './R4_1_RelatedArtifact'
import { R4_1_SampledData } from './R4_1_SampledData'
import { R4_1_Signature } from './R4_1_Signature'
import { R4_1_StructureMapSourceListModeEnum } from './R4_1_StructureMapSourceListModeEnum'
import { R4_1_Timing } from './R4_1_Timing'
import { R4_1_TriggerDefinition } from './R4_1_TriggerDefinition'
import { R4_1_UsageContext } from './R4_1_UsageContext'

export class R4_1_StructureMap_Source      extends R4_1_BackboneElement
{

   static def : string = 'StructureMap_Source';
   context : string ;
   min : string ;
   max : string ;
   type : string ;
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
   element : string ;
   listMode : R4_1_StructureMapSourceListModeEnum ;
   variable : string ;
   condition : string ;
   check : string ;
   logMessage : string ;
}
