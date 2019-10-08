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
import { R4_Expression } from './R4_Expression'
import { R4_HumanName } from './R4_HumanName'
import { R4_Identifier } from './R4_Identifier'
import { R4_Money } from './R4_Money'
import { R4_ParameterDefinition } from './R4_ParameterDefinition'
import { R4_Period } from './R4_Period'
import { R4_Quantity } from './R4_Quantity'
import { R4_Range } from './R4_Range'
import { R4_Ratio } from './R4_Ratio'
import { R4_Reference } from './R4_Reference'
import { R4_RelatedArtifact } from './R4_RelatedArtifact'
import { R4_SampledData } from './R4_SampledData'
import { R4_Signature } from './R4_Signature'
import { R4_StructureMapSourceListModeEnum } from './R4_StructureMapSourceListModeEnum'
import { R4_Timing } from './R4_Timing'
import { R4_TriggerDefinition } from './R4_TriggerDefinition'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_StructureMap_Source      extends R4_BackboneElement
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
   element : string ;
   listMode : R4_StructureMapSourceListModeEnum ;
   variable : string ;
   condition : string ;
   check : string ;
   logMessage : string ;
}
