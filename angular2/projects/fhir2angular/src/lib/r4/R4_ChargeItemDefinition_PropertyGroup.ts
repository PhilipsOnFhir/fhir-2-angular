import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_ChargeItemDefinition_Applicability } from './R4_ChargeItemDefinition_Applicability'
import { R4_ChargeItemDefinition_PriceComponent } from './R4_ChargeItemDefinition_PriceComponent'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_ChargeItemDefinition_PropertyGroup      extends R4_BackboneElement
{

   static def : string = 'ChargeItemDefinition_PropertyGroup';
   applicability : R4_ChargeItemDefinition_Applicability [];
   priceComponent : R4_ChargeItemDefinition_PriceComponent [];
}
